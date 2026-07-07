type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase text-limitless-blue">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">{text}</p> : null}
    </div>
  );
}
