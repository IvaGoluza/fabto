export type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
};

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <div>
      {subtitle && (
        <h4 className="text-base xl:text-lg uppercase text-secondary">
          {subtitle}
        </h4>
      )}
      {title && (
        <h2 className="text-xl xl:text-2xl font-semibold text-primary">
          {title}
        </h2>
      )}
    </div>
  );
}
