export type AboutCardProps = {
  imageName: string;
  text: string;
};

export default function AboutCard({ imageName, text }: AboutCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 w-4/5 sm:w-1/2">
      <img
        src={`/public/images/${imageName}.png`}
        alt="Cleaning hand"
        className="w-20 lg:w-24 hover:animate-pulse"
      />
      <p className="text-primary text-center text-sm sm:text-base lg:text-lg">
        {text}
      </p>
    </div>
  );
}
