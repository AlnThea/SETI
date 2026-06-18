import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getProjects } from "@/lib/queries";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container-shell space-y-10 py-10 md:py-14">
      <SectionHeading
        eyebrow="Project Repository"
        title="Implementation projects with location, status, and impact signals."
        description="For the initial build, this page focuses on a grid view backed by the local database. Map visualization can be added next without changing the project model."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            province={project.province}
            theme={project.theme.name}
            status={project.status}
            impactSummary={project.impactHeadline}
          />
        ))}
      </div>
    </div>
  );
}
