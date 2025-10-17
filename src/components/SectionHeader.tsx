export type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
};

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <div>
      {subtitle && <h4 className="uppercase text-secondary">{subtitle}</h4>}
      {title && <h2 className="text-xl font-semibold text-primary">{title}</h2>}
    </div>
  );
}
