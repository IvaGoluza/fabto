import type { ReactNode } from 'react';

export type ContactInfoProps = {
  text: string;
  icon: ReactNode;
};

export default function ContactInfo({ text, icon }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4 text-surface-white">
      <div className="flex items-center justify-center w-12 h-12 bg-[#5FCBF2] rounded-2xl">
        {icon}
      </div>
      <p className="text-wrap sm:font-semibold sm:text-lg">{text}</p>
    </div>
  );
}
