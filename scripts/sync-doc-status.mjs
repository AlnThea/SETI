import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const tasksPath = path.join(rootDir, ".docs", "TASKS.md");
const implementationPath = path.join(rootDir, ".docs", "IMPLEMENTATION_STATUS.md");
const devlogPath = path.join(rootDir, ".docs", "DEVLOG.md");
const readmePath = path.join(rootDir, "README.md");

const today = new Date().toISOString().slice(0, 10);
const phaseNames = [
  "Phase 1: Knowledge Hub (Prompt A)",
  "Phase 2: Impact Portal (Prompt B)",
  "Phase 3: Living Knowledge Network (Prompt C)",
  "Phase 4: Polish & Deploy"
];

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeIfChanged(filePath, nextContent) {
  const currentContent = readFile(filePath);
  if (currentContent !== nextContent) {
    fs.writeFileSync(filePath, nextContent);
    return true;
  }

  return false;
}

function getSection(content, startHeading, endHeading) {
  const start = content.indexOf(startHeading);
  if (start === -1) {
    throw new Error(`Section start not found: ${startHeading}`);
  }

  const end = endHeading ? content.indexOf(endHeading, start) : -1;
  return content.slice(start, end === -1 ? undefined : end);
}

function countTasks(section) {
  const tasks = section.match(/^- \[(?: |x)\].*$/gm) ?? [];
  const done = section.match(/^- \[x\].*$/gm)?.length ?? 0;
  return { done, total: tasks.length };
}

function parseTasks(content) {
  const sections = [
    getSection(content, "## 🎯 Phase 1: Knowledge Hub (Prompt A)", "## 🎯 Phase 2: Impact Portal (Prompt B)"),
    getSection(content, "## 🎯 Phase 2: Impact Portal (Prompt B)", "## 🎯 Phase 3: Living Knowledge Network (Prompt C)"),
    getSection(content, "## 🎯 Phase 3: Living Knowledge Network (Prompt C)", "## 🎯 Phase 4: Polish & Deploy"),
    getSection(content, "## 🎯 Phase 4: Polish & Deploy", "## 📊 Progress Summary")
  ];

  const phases = sections.map((section, index) => {
    const counts = countTasks(section);
    const percent = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;
    return {
      label: phaseNames[index],
      done: counts.done,
      total: counts.total,
      percent
    };
  });

  const overallDone = phases.reduce((sum, phase) => sum + phase.done, 0);
  const overallTotal = phases.reduce((sum, phase) => sum + phase.total, 0);
  const overallPercent = overallTotal > 0 ? Math.round((overallDone / overallTotal) * 100) : 0;

  const currentSprintMatch = content.match(/\*\*Current Sprint:\*\*\s*(.+?)\s{2,}/);
  const nextMilestoneMatch = content.match(/\*\*Next Milestone:\*\*\s*(.+?)\s{2,}/);
  const nextThreeDaysMatch = content.match(/### Next 3 Days\s+([\s\S]*?)\n---/);

  return {
    phases,
    overallDone,
    overallTotal,
    overallPercent,
    currentSprint: currentSprintMatch?.[1]?.trim() ?? "Unknown",
    nextMilestone: nextMilestoneMatch?.[1]?.trim() ?? "Unknown",
    nextThreeDays: (nextThreeDaysMatch?.[1] ?? "").trim()
  };
}

function updateTasksSummary(content, parsed) {
  const byPhaseBlock = `### By Phase
- **Phase 1 (Knowledge Hub):** ${parsed.phases[0].done}/${parsed.phases[0].total} tasks (${parsed.phases[0].percent}%)
- **Phase 2 (Impact Portal):** ${parsed.phases[1].done}/${parsed.phases[1].total} tasks (${parsed.phases[1].percent}%)
- **Phase 3 (Living Network):** ${parsed.phases[2].done}/${parsed.phases[2].total} tasks (${parsed.phases[2].percent}%)
- **Phase 4 (Polish & Deploy):** ${parsed.phases[3].done}/${parsed.phases[3].total} tasks (${parsed.phases[3].percent}%)`;

  let nextContent = content.replace(
    /### By Phase[\s\S]*?(?=\n### Tracking Note)/,
    byPhaseBlock
  );

  nextContent = nextContent.replace(
    /\*\*Total:\s*\d+\/\d+\s+tasks completed \(\d+%\)\*\*/,
    `**Total: ${parsed.overallDone}/${parsed.overallTotal} tasks completed (${parsed.overallPercent}%)**`
  );

  nextContent = nextContent.replace(
    /\*\*Last Updated:\*\*\s*\d{4}-\d{2}-\d{2}/,
    `**Last Updated:** ${today}`
  );

  return nextContent;
}

function parseImplementation(content) {
  const done = getBulletItems(
    getSection(content, "### Done in code", "### Partially done")
  );
  const partial = getBulletItems(
    getSection(content, "### Partially done", "### Not done yet")
  );
  const notDone = getBulletItems(
    getSection(content, "### Not done yet", "---")
  );

  return { done, partial, notDone };
}

function getBulletItems(section) {
  return (section.match(/^- .+$/gm) ?? []).map((line) => line.replace(/^- /, "").trim());
}

function updateReadme(content, tasks, implementation) {
  const statusBlock = `<!-- AUTO-GENERATED:STATUS:START -->
### Current Phase
🟡 **${tasks.currentSprint}**

### Progress
- ✅ Phase 1: Knowledge Hub (${tasks.phases[0].done}/${tasks.phases[0].total} tracked tasks, ${tasks.phases[0].percent}%)
- 🟡 Phase 2: Impact Portal (${tasks.phases[1].done}/${tasks.phases[1].total} tracked tasks, ${tasks.phases[1].percent}%)
- ⚪ Phase 3: Living Network (${tasks.phases[2].done}/${tasks.phases[2].total} tracked tasks, ${tasks.phases[2].percent}%)
- ⚪ Phase 4: Polish & Deploy (${tasks.phases[3].done}/${tasks.phases[3].total} tracked tasks, ${tasks.phases[3].percent}%)

### Next Milestone
${tasks.nextMilestone}

### Next 3 Priorities
${tasks.nextThreeDays}
<!-- AUTO-GENERATED:STATUS:END -->`;

  const snapshotBlock = `<!-- AUTO-GENERATED:SNAPSHOT:START -->
### Working today
${implementation.done.map((item) => `- ${item}`).join("\n")}

### Partially implemented
${implementation.partial.map((item) => `- ${item}`).join("\n")}

### Not implemented yet
${implementation.notDone.map((item) => `- ${item}`).join("\n")}
<!-- AUTO-GENERATED:SNAPSHOT:END -->`;

  let nextContent = content.replace(
    /<!-- AUTO-GENERATED:STATUS:START -->[\s\S]*?<!-- AUTO-GENERATED:STATUS:END -->/,
    statusBlock
  );

  nextContent = nextContent.replace(
    /<!-- AUTO-GENERATED:SNAPSHOT:START -->[\s\S]*?<!-- AUTO-GENERATED:SNAPSHOT:END -->/,
    snapshotBlock
  );

  nextContent = nextContent.replace(
    /\*Last Updated:\s*\d{4}-\d{2}-\d{2}\*/,
    `*Last Updated: ${today}*`
  );

  nextContent = nextContent.replace(
    /\(\.docs\/TASKS\.md\)\s-\sTask tracking \(\d+ checklist items currently tracked\)/,
    `(.docs/TASKS.md) - Task tracking (${tasks.overallTotal} checklist items currently tracked)`
  );

  return nextContent;
}

function updateDevlog(content, tasks) {
  const statusBlock = `<!-- AUTO-GENERATED:DEVLOG-STATUS:START -->
## Current Status

- Current sprint: ${tasks.currentSprint}
- Next milestone: ${tasks.nextMilestone}
- Overall tracked progress: ${tasks.overallDone}/${tasks.overallTotal} tasks completed (${tasks.overallPercent}%)
- Phase 1: ${tasks.phases[0].done}/${tasks.phases[0].total} tasks (${tasks.phases[0].percent}%)
- Phase 2: ${tasks.phases[1].done}/${tasks.phases[1].total} tasks (${tasks.phases[1].percent}%)
- Phase 3: ${tasks.phases[2].done}/${tasks.phases[2].total} tasks (${tasks.phases[2].percent}%)
- Phase 4: ${tasks.phases[3].done}/${tasks.phases[3].total} tasks (${tasks.phases[3].percent}%)
<!-- AUTO-GENERATED:DEVLOG-STATUS:END -->`;

  let nextContent = content.replace(
    /<!-- AUTO-GENERATED:DEVLOG-STATUS:START -->[\s\S]*?<!-- AUTO-GENERATED:DEVLOG-STATUS:END -->/,
    statusBlock
  );

  nextContent = nextContent.replace(
    /\*\*Last Updated:\*\*\s*\d{4}-\d{2}-\d{2}/,
    `**Last Updated:** ${today}`
  );

  return nextContent;
}

const tasksContent = readFile(tasksPath);
const implementationContent = readFile(implementationPath);
const devlogContent = readFile(devlogPath);
const readmeContent = readFile(readmePath);

const parsedTasks = parseTasks(tasksContent);
const parsedImplementation = parseImplementation(implementationContent);

const nextTasks = updateTasksSummary(tasksContent, parsedTasks);
writeIfChanged(tasksPath, nextTasks);

const nextReadme = updateReadme(readmeContent, parsedTasks, parsedImplementation);
writeIfChanged(readmePath, nextReadme);

const nextDevlog = updateDevlog(devlogContent, parsedTasks);
writeIfChanged(devlogPath, nextDevlog);

console.log(`Synced docs for ${today}`);
