import type { TextCardProps } from '../components/TextCard.tsx';
import type { TextWithImageCardProps } from '../components/TextWithImageCard.tsx';
import type { AboutCardProps } from '../components/AboutCard.tsx';
import type { ContactInfoProps } from '../components/ContactInfo.tsx';

export const aboutCards: AboutCardProps[] = [
  {
    imageName: 'cleaning-hand',
    text: 'Dobrodošli na FabTo Cleaning Solutions – specijalizirani obrt za dubinsko čišćenje interijera. Naš cilj nije samo čišćenje površine, već obnova higijene i kvalitete života u vašem prostoru.',
  },
  {
    imageName: 'home',
    text: 'Koristimo profesionalnu opremu i certificirana ekološki prihvatljiva sredstva koja učinkovito uklanjaju dubinske nečistoće, a istovremeno su sigurna za djecu, alergičare i kućne ljubimce.',
  },
  {
    imageName: 'cleaning-spray',
    text:
      'Visoke temperature pare dezinficiraju površine, smanjujući rizik od infekcija i\n' +
      'alergijskih reakcija. Ekstrakcijski uređaji osiguravaju uklanjanje svih preostalih\n' +
      'mikroorganizama i alergena.',
  },
];

export const descriptors: string[] = [
  'Sigurna sredstva',
  'Profesionalna oprema',
  'Brza dostupnost termina',
  'Potpuna posvećenost svakom klijentu',
  'Dolazak na lokaciju bez dodatnih troškova',
  'Zagarantirani rezultati',
  'Transparentne cijene',
  'Specijalizirani za dubinsko čišćenje',
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

type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'Koliko traje sušenje nakon dubinskog čišćenja?',
    answer:
      'Idealno vrijeme sušenja je 24 sata. U nekim slučajevima to može biti i kraće. Prostor treba biti prozračan, klimatiziran i u zimskim uvjetima zagrijan kako biste ubrzali sušenje.',
  },
  {
    question: 'Koristite li kemikalije koje su štetne?',
    answer:
      'Ne. Koristimo certificirana ekološki prihvatljiva sredstva sigurna za djecu, alergičare i kućne ljubimce.',
  },
  {
    question: 'Naplaćujete li dolazak?',
    answer: 'Dolazak na lokaciju u Matuljima i okolici je uključen u cijenu.',
  },
  {
    question: 'Imate li minimalni iznos za narudžbu?',
    answer:
      'Da, minimalni iznos izlaska na teren je 60 €. Time osiguravamo da svaki dolazak bude izveden s punom profesionalnom pripremom, opremom i učinkom, bez kompromisa na kvaliteti usluge.',
  },
  {
    question: 'Mogu li dobiti R1 račun?',
    answer: 'Da, izdavanje R1 računa je dostupno na zahtjev.',
  },
];

type ContactInfoDataItem = Omit<ContactInfoProps, 'icon'> & {
  iconClass: string;
};

export const contactInfoData: ContactInfoDataItem[] = [
  { text: '+385 97 6767 601', iconClass: 'fa-solid fa-phone' },
  {
    text: 'fabto.ciscenje@gmail.com',
    iconClass: 'fa-solid fa-envelope',
  },
  { text: 'Matulji 51211, Hrvatska', iconClass: 'fa-solid fa-location-dot' },
  { text: 'fabto.ciscenje', iconClass: 'fa-brands fa-instagram' },
];
