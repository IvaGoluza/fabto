export type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <div>
      <h4 className="uppercase text-secondary">{subtitle}</h4>
      <h2 className="text-xl font-bold text-primary">{title}</h2>
    </div>
  );
}
