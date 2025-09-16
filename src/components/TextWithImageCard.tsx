import type { TextCardProps } from './TextCard.tsx';

export type TextWithImageCardProps = TextCardProps & {
  imageName: string;
};

export default function TextWithImageCard({
  imageName,
  title,
  description,
  price,
}: TextWithImageCardProps) {
  return (
    <div className="h-32 sm:h-36 grid grid-rows-1 grid-cols-3 sm:gap-6 sm:rounded-xl border-b-2 sm:border border-gray-100 sm:shadow-md">
      <img
        src={`/public/images/${imageName}.png`}
        alt={`${title} ${description}`}
        className="h-full"
      />
      <div className="col-span-2 flex flex-col items-start justify-between py-4 sm:py-6">
        <div>
          <p className="uppercase text-base font-semibold text-primary">
            {title}
          </p>
          {description && <p className="text-secondary">{description}</p>}
        </div>
        <p className="text-base sm:text-xl text-accent font-bold sm:font-black">
          {price}
        </p>
      </div>
    </div>
  );
}
