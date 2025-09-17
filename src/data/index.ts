import type { TextCardProps } from '../components/TextCard.tsx';
import type { TextWithImageCardProps } from '../components/TextWithImageCard.tsx';
import type { AboutCardProps } from '../components/AboutCard.tsx';
import type { ContactInfoProps } from '../components/ContactInfo.tsx';

export const aboutCards: AboutCardProps[] = [
  {
    imageName: 'cleaning-hand',
    text: 'Naš obrt za čišćenje osnovan je s ciljem da svojim klijentima pružimo pouzdanu, kvalitetnu i fleksibilnu uslugu čišćenja.',
  },
  {
    imageName: 'home',
    text: 'Posvećeni smo detaljima i vjerujemo da čistoća prostora doprinosi boljoj svakodnevici, zdravijem okruženju i ugodnijem boravku.',
  },
  {
    imageName: 'cleaning-spray',
    text: 'Specijalizirani smo za generalno i dubinsko čišćenje stanova, kuća i poslovnih prostora, a naš tim koristi provjerene metode i sredstva koja osiguravaju besprijekorne rezultate.',
  },
];

export const oneTimeCleaning: TextCardProps[] = [
  {
    title: 'do 45 m²',
    description: 'garsonijera, studio s kupaonicom',
    price: '95-180 €',
  },
  {
    title: '45-90 m²',
    description: '2-3 sobe, kuhinja, kupaonica',
    price: '180-350 €',
  },
  {
    title: '90-130 m²',
    description: '3-4 sobe, kuhinja, više kupaonica',
    price: 'od 350 €',
  },
  {
    title: '130+ m²',
    description: 'veći stanovi, kuće, dvoetažni prostori',
    price: 'od 450 €',
  },
];

export const deepCleaning: TextWithImageCardProps[] = [
  { imageName: 'chair', title: 'stolica', price: 'od 10 €' },
  {
    imageName: 'sofa-bed',
    title: 'kauč',
    description: 'na razvlačenje',
    price: 'od 50 €',
  },
  {
    imageName: 'sofa-s',
    title: 'mala sofa',
    description: 'fotelja',
    price: 'od 30 €',
  },
  {
    imageName: 'sofa-m',
    title: 'velika sofa',
    description: '3+ sjedeća mjesta',
    price: 'od 40 €',
  },
  {
    imageName: 'bed-s',
    title: 'madrac',
    description: 'jednokrevetni',
    price: 'od 30 €',
  },
  {
    imageName: 'bed-m',
    title: 'madrac',
    description: 'bračni',
    price: 'od 40 €',
  },
  {
    imageName: 'angle-sofa-s',
    title: 'kutna garnitura',
    description: 'do 5 sjedala',
    price: 'od 50 €',
  },
  {
    imageName: 'angle-sofa-m',
    title: 'kutna garnitura',
    description: 'više od 5 sjedala',
    price: 'od 65 €',
  },
];

export const additionalServices: string[] = [
  'Pranje prozora',
  'Čišćenje unutrašnjosti kuhinjskih elemenata',
  'Peglanje rublja',
  'Uklanjanje kamenca, masnoća, tvrdokornih mrlja',
  'Hitne intervencije (ekspresno čišćenje)',
];

export const notes: string[] = [
  'Cijene su okvirne i podložne prilagodbi nakon procjene stanja prostora',
  'Sve usluge se dogovaraju individualno prema potrebama klijenata',
  'Minimalni izlazak na teren: 60€',
  '30% veća cijena čišćenja jako zaprljanih prostora',
  'Mogućnost popusta kod čišćenja većeg broja komada odjednom',
  'U cijenu je uključeno temeljito usisavanje, parno čišćenje te ekstrakcija - ispiranje tkanine i uklanjanje nečistoća za svjež i higijenski čist rezultat',
];

type ContactInfoDataItem = Omit<ContactInfoProps, 'icon'> & {
  iconClass: string;
};

export const contactInfoData: ContactInfoDataItem[] = [
  { text: '+385 97 6767 601', iconClass: 'fa-solid fa-phone' },
  {
    text: 'fabtocleaningsolutions@gmail.com',
    iconClass: 'fa-solid fa-envelope',
  },
  { text: 'Matulji 51211, Hrvatska', iconClass: 'fa-solid fa-location-dot' },
  { text: 'fabto.cleaningsolutions', iconClass: 'fa-brands fa-instagram' },
];
