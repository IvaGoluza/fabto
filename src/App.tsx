import { useEffect } from 'react';
import MapSnippet from './components/MapSnippet.tsx';
import TextCard from './components/TextCard.tsx';
import TextWithImageCard from './components/TextWithImageCard.tsx';
import {
  deepCleaning,
  oneTimeCleaning,
  notes,
  additionalServices,
  faq,
  aboutCards,
  descriptors,
  contactInfoData,
} from './data';
import AboutCard from './components/AboutCard.tsx';
import ContactInfo from './components/ContactInfo.tsx';
import SectionHeader from './components/SectionHeader.tsx';

function App() {
  useEffect(() => {
    const tool = document.getElementById('tool');

    const handleScrolling = () => {
      const value = window.scrollY;

      if (tool) {
        // Move diagonally down-left
        const x = -value; // left
        const y = value * 0.5; // down
        tool.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('scroll', handleScrolling);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col bg-surface-white  overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-100 flex justify-between items-center py-4 px-6 sm:px-8 bg-surface-white border-b-3 border-b-gray-50">
        <img src="/images/logo.png" alt="Fabto logo" className="w-28 sm:w-28" />
        <div className="w-2/3 lg:w-1/2 xl:w-1/3 flex items-center justify-end sm:justify-between">
          <a href="#about" className="hidden sm:block uppercase no-underline">
            <span className="font-semibold text-lg text-primary">o nama</span>
          </a>
          <a
            href="#services"
            className="hidden sm:block uppercase no-underline font-black"
          >
            <span className="font-semibold text-lg text-primary">usluge</span>
          </a>
          <a
            href="#contact"
            className="uppercase no-underline font-black bg-linear-to-br from-cyan-500 to-blue-500 py-2 px-4 rounded-lg"
          >
            <span className="font-semibold text-md sm:text-lg text-white">
              kontakt
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-5 sm:h-screen pt-36 sm:pt-24">
        {/* Top-Center Rectangle */}
        <div className="sm:row-start-1 sm:col-span-2 sm:col-start-2 flex flex-col justify-center items-center sm:items-start gap-2 sm:transform sm:translate-x-20">
          <p className="text-accent w-4/5 sm:w-full">
            <i className="fa-solid fa-location-dot"></i>
            Matulji, Rijeka, Opatija i okolica
          </p>
          <p className="text-2xl lg:text-3xl xl:text-4xl font-black sm:font-bold text-accent w-4/5 sm:w-full">
            Generalno, parno i dubinsko čišćenje prostora s garancijom kvalitete
          </p>
          <p className="md:text-md lg:text-lg xl:text-xl w-4/5 text-primary">
            Pouzdane usluge čišćenja domova, poslovnih prostora i apartmana,
            prilagođene vašim potrebama
          </p>
        </div>

        {/* Bottom-Left Triangle */}
        <div className="hidden relative row-span-1 row-start-2 col-span-2 col-start-1 sm:flex flex-row justify-start items-end">
          <img
            id="tool"
            src="/images/cleaning-tool-no-bg.png"
            alt="Cleaning service"
            className="w-xs lg:w-sm xl:w-lg absolute z-90"
          />
        </div>

        {/* Bottom-Right Polygon */}
        <div className="py-28 sm:py-0 sm:row-span-2 sm:col-span-3 sm:col-start-3 flex justify-end items-end transform translate-x-32 sm:translate-y-24">
          <div className="flex flex-col items-end gap-4 -rotate-12">
            <div className="relative">
              <img
                src="/images/people-cleaning.jpg"
                alt="Cleaning service"
                className="w-sm lg:w-md xl:w-lg rounded-4xl border-12 border-decorate-blue-light drop-shadow-xl"
              />
              <div className="absolute -top-24 left-1/3 -z-10 w-48 h-48 rounded-full bg-radial-[at_65%_25%] from-white to-decorate-blue to-75% drop-shadow-xl animate-float"></div>
              <div className="absolute -bottom-16 -left-32 -z-10 w-44 h-44 rounded-full bg-radial-[at_65%_25%] from-white to-decorate-blue-dark to-75% drop-shadow-xl animate-float"></div>
            </div>
            <div className="relative">
              <img
                src="/images/vacuum.jpg"
                alt="Cleaning service"
                className="w-lg lg:w-xl xl:w-2xl rounded-4xl border-10 border-decorate-blue drop-shadow-xl"
              />
              <div className="absolute top-24 -left-24 -z-10 w-36 h-36 rounded-full bg-radial-[at_65%_25%] from-white to-decorate-blue-light to-75% drop-shadow-xl animate-float"></div>
              <div className="absolute top-8 -left-44 -z-10 w-20 h-20 rounded-full bg-radial-[at_65%_25%] from-white to-decorate-blue-light to-75% drop-shadow-xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center gap-14 bg-surface-blue-light py-20 sm:py-48"
      >
        {aboutCards.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center px-8 sm:px-0 py-24 w-screen bg-gradient-to-tr from-sky-800 via-sky-500 to-sky-800">
        <p className="text-white/70 uppercase text-sm w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto">
          Mali detalji koji čine veliku razliku
          <i className="fa-solid fa-heart"></i>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto pt-2 sm:pt-4 border-t-2 border-white/50">
          {descriptors.map((descriptor, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center py-3 sm:py-6 px-6 rounded-xl lowercase text-base lg:text-xl text-white bg-white/10"
            >
              {descriptor}
            </div>
          ))}
        </div>
      </div>
      <div
        id="services"
        className="flex flex-col items-center justify-start gap-24 pt-32 w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto"
      >
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:px-0 w-full">
          <SectionHeader
            subtitle="usluge"
            title="Jednokratno generalno čišćenje"
          />
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-start sm:gap-4 w-full h-fit">
            {oneTimeCleaning.map((card, index) => (
              <TextCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:px-0 w-full">
          <SectionHeader
            subtitle="usluge"
            title="Dubinsko čišćenje (po komadu)"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:gap-3 w-full">
            {deepCleaning.map((card, index) => (
              <TextWithImageCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:px-0 w-full">
          <SectionHeader subtitle="Dodatne usluge (cijena po dogovoru)" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 w-full">
            <ul className="sm:list-disc list-outside lg:text-lg text-primary">
              {additionalServices.map((item, index) => (
                <li key={index} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
            <img
              src="/images/window-cleaning.jpg"
              alt="Window Cleaning"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:px-0 w-full">
          <SectionHeader subtitle="napomene" />
          <ul className="sm:list-disc list-outside lg:text-lg text-primary">
            {notes.map((item, index) => (
              <li key={index} className="py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center px-8 sm:px-0 py-20 w-screen bg-surface-blue-light">
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto">
            <SectionHeader subtitle="Česta pitanja" />
            <ul className="list lg:text-lg text-primary">
              {faq.map((item, index) => (
                <li key={index} className="py-2">
                  <b>{item.question}</b>
                  <br />
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex items-center justify-center px-8 sm:px-0 py-24 sm:py-42 w-screen bg-linear-to-br from-cyan-500 to-blue-500"
      >
        <div className="flex flex-col items-start justify-start gap-12 sm:gap-18 w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto">
          <h2 className="text-3xl text-surface-white font-bold">Kontakt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 w-full">
            <div className="flex flex-col gap-4">
              {contactInfoData.map((item, index) => (
                <ContactInfo
                  key={index}
                  text={item.text}
                  icon={<i className={item.iconClass}></i>}
                />
              ))}
            </div>
            <MapSnippet />
          </div>
        </div>
      </div>
      <div className="text-white text-sm w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500">
        2025 © Designed & developed by
        <a
          href="https://www.linkedin.com/in/ivagoluza"
          target="_blank"
          className="pl-1 hover:text-indigo-500"
        >
          Iva Goluza <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
