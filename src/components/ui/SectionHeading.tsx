import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
};

const titleClassName = {
  h1: "t-h1",
  h2: "t-h2",
  h3: "t-h3",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="t-eyebrow mb-3">{eyebrow}</p> : null}
      <Heading className={titleClassName[Heading]}>{title}</Heading>
      {description ? (
        <p
          className={cn(
            "t-body mt-4 text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
