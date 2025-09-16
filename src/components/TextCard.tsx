export type TextCardProps = {
  title: string;
  description?: string;
  price: string;
};

export default function TextCard({ title, description, price }: TextCardProps) {
  return (
    <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-6 py-4 sm:py-6 sm:p-6 sm:rounded-xl border-b-2 sm:border border-b-gray-100 sm:border-gray-100 sm:shadow-md">
      <div className="flex flex-col justify-start items-start sm:gap-2">
        <h3 className="text-lg lg:text-xl font-bold text-primary">{title}</h3>
        <p className="text-base text-secondary">{description}</p>
      </div>
      <p className="text-base sm:text-xl text-accent font-bold sm:font-black">
        {price}
      </p>
    </div>
  );
}
