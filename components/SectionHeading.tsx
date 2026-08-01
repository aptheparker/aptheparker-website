export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3.5 text-sm font-bold text-toss-blue md:text-base">{eyebrow}</p>
      <h2 className="text-[30px] leading-[1.22] font-extrabold tracking-[-0.025em] text-grey-900 md:text-[42px] md:leading-[1.18]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-grey-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
