interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
        {description}
      </p>
    </div>
  );
}

