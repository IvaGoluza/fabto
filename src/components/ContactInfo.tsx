import type { ReactNode } from 'react';

export type ContactInfoProps = {
  text: string;
  icon: ReactNode;
};

export default function ContactInfo({ text, icon }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 text-surface-white">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-2xl">
        {icon}
      </div>
      <p className="text-wrap sm:text-lg">{text}</p>
    </div>
  );
}
