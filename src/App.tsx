import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const tool = document.getElementById('tool');
    const myImage = document.getElementById('phoneCleaningImage');

    const handleScrolling = () => {
      const value = window.scrollY;

      if (tool) {
        // Move diagonally down-left
        const x = -value; // left
        const y = value * 0.5; // down
        tool.style.transform = `translate(${x}px, ${y}px)`;
      }

      if (myImage) {
        // Fade in slowly
        const opacity = Math.min(value / 50, 1);
        myImage.style.opacity = String(opacity);
      }
    };

    window.addEventListener('scroll', handleScrolling);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col bg-surface-white  overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-100 flex justify-between items-center py-4 px-6 sm:px-8 bg-surface-white border-3 border-b-gray-50">
        <img
          src="/public/images/logo.png"
          alt="Fabto logo"
          className="w-28 sm:w-36"
        />
        <div className="w-2/3 lg:w-1/2 xl:w-1/3 flex items-center justify-end sm:justify-between">
          <a href="#about" className="hidden sm:block uppercase no-underline">
            <span className="font-bold text-lg text-primary">o nama</span>
          </a>
          <a
            href="#services"
            className="hidden sm:block uppercase no-underline font-black"
          >
            <span className="font-bold text-lg text-primary">usluge</span>
          </a>
          <a
            href="#contact"
            className="uppercase no-underline font-black bg-accent py-2 px-4 rounded-lg"
          >
            <span className="font-bold text-md sm:text-lg text-white">
              kontakt
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-5 h-[90vh] sm:h-screen pt-24">
        {/* Top-Center Rectangle */}
        <div className="sm:row-start-1 col-span-1 sm:col-span-2 sm:col-start-2 flex flex-col justify-center items-center sm:items-start gap-6">
          <p className="text-2xl lg:text-3xl xl:text-4xl font-black sm:font-bold text-accent w-4/5 sm:w-full">
            Profesionalno čišćenje <br /> stanova, kuća i poslovnih prostora
          </p>
          <p className="md:text-md lg:text-lg xl:text-xl w-4/5 text-primary">
            Pouzdana usluga i besprijekorni rezultati - za dom i ured u kojem je
            užitak boraviti.
          </p>
        </div>

        {/* Bottom-Left Triangle */}
        <div className="relative row-span-1 row-start-2 col-span-2 col-start-1 flex flex-row justify-start items-end">
          <img
            id="tool"
            src="/public/images/cleaning-tool-no-bg.png"
            alt="Cleaning service"
            className="w-xs lg:w-sm xl:w-lg absolute z-90"
          />
          <img
            id="phoneCleaningImage"
            src="/public/images/people-cleaning.jpg"
            alt="Cleaning service"
            className="absolute top-0 -right-6 opacity-0 transition-opacity duration-500 w-4/5 sm:hidden rounded-4xl border-8 border-decorate-blue-light drop-shadow-xl"
          />
        </div>

        {/* Bottom-Right Polygon */}
        <div className="hidden sm:flex row-span-2 col-span-3 col-start-3 justify-end items-end transform translate-x-32 translate-y-24">
          <div className="flex flex-col items-end gap-4 -rotate-12">
            <div className="relative">
              <img
                src="/public/images/people-cleaning.jpg"
                alt="Cleaning service"
                className="md:w-sm lg:w-md xl:w-lg rounded-4xl border-12 border-decorate-blue-light drop-shadow-xl"
              />
              <div className="absolute -top-24 left-1/3 -z-10 w-48 h-48 rounded-full bg-radial-[at_25%_25%] from-white to-decorate-blue to-75% drop-shadow-xl animate-float"></div>
              <div className="absolute -bottom-16 -left-32 -z-10 w-44 h-44 rounded-full bg-radial-[at_25%_25%] from-white to-decorate-blue-dark to-75% drop-shadow-xl animate-float"></div>
            </div>
            <div className="relative">
              <img
                src="/public/images/vacuum.jpg"
                alt="Cleaning service"
                className="md:w-lg lg:w-xl xl:w-2xl rounded-4xl border-10 border-decorate-blue drop-shadow-xl"
              />
              <div className="absolute top-24 -left-24 -z-10 w-36 h-36 rounded-full bg-radial-[at_25%_25%] from-white to-decorate-blue-light to-75% drop-shadow-xl animate-float"></div>
              <div className="absolute top-8 -left-44 -z-10 w-20 h-20 rounded-full bg-radial-[at_25%_25%] from-white to-decorate-blue-light to-75% drop-shadow-xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center gap-12 bg-surface-blue-light py-20 sm:py-48 px-8 sm:px-0"
      >
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 sm:w-1/2">
          <img
            src="/public/images/cleaning-hand.png"
            alt="Cleaning hand"
            className="w-20 sm:w-24 hover:animate-pulse"
          />
          <p className="text-primary text-center sm:text-start">
            Naš obrt za čišćenje osnovan je s ciljem da svojim klijentima
            pružimo pouzdanu, kvalitetnu i fleksibilnu uslugu čišćenja.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 sm:w-1/2">
          <img
            src="/public/images/home.png"
            alt="Home"
            className="w-20 sm:w-24 hover:animate-pulse"
          />
          <p className="text-primary text-center sm:text-start">
            Posvećeni smo detaljima i vjerujemo da čistoća prostora doprinosi
            boljoj svakodnevici, zdravijem okruženju i ugodnijem boravku.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 sm:w-1/2">
          <img
            src="/public/images/cleaning-spray.png"
            alt="Cleaning spray"
            className="w-20 sm:w-24 hover:animate-pulse"
          />
          <p className="text-primary text-center sm:text-start">
            Specijalizirani smo za generalno i dubinsko čišćenje stanova, kuća i
            poslovnih prostora, a naš tim koristi provjerene metode i sredstva
            koja osiguravaju besprijekorne rezultate.
          </p>
        </div>
      </div>
      <div
        id="services"
        className="flex flex-col items-start justify-start gap-24 pt-32"
      >
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:pl-32">
          <div>
            <h4 className="uppercase text-secondary">usluge</h4>
            <h2 className="text-xl font-bold text-primary">
              Jednokratno generalno čišćenje
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-start sm:gap-4 w-full h-fit">
            <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-6 p-4 sm:p-6 rounded-bl-xl border-2 sm:border border-l-gray-100 border-b-gray-100 sm:border-gray-100 sm:shadow-md">
              <div className="flex flex-col justify-start items-start sm:gap-2">
                <p className="text-xl font-bold text-primary">do 45 m²</p>
                <p className="text-md text-secondary">
                  garsonijera, studio s kupaonicom
                </p>
              </div>
              <p className="text-lg sm:text-xl text-accent font-black">
                95-180 €
              </p>
            </div>

            <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-6 p-4 sm:p-6 rounded-r-xl border-2 sm:border border-r-gray-100 border-b-gray-100 sm:border-gray-100 sm:shadow-md">
              <div className="flex flex-col justify-start items-start sm:gap-2">
                <p className="text-xl font-bold text-primary">45-90 m²</p>
                <p className="text-md text-secondary">
                  2-3 sobe, kuhinja, kupaonica
                </p>
              </div>
              <p className="text-lg sm:text-xl text-accent font-black">
                180-350 €
              </p>
            </div>

            <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-6 p-4 sm:p-6 sm:rounded-xl border-2 sm:border border-b-gray-100 sm:border-gray-100 sm:shadow-md">
              <div className="flex flex-col justify-start items-start sm:gap-2">
                <p className="text-xl font-bold text-primary">90-130 m²</p>
                <p className="text-md text-secondary">
                  3-4 sobe, kuhinja, više kupaonica
                </p>
              </div>
              <p className="text-lg sm:text-xl text-accent font-black">
                od 350 €
              </p>
            </div>

            <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-6 p-4 sm:p-6 sm:rounded-xl border-2 sm:border border-b-gray-100 sm:border-gray-100 sm:shadow-md">
              <div className="flex flex-col justify-start items-start sm:gap-2">
                <p className="text-xl font-bold text-primary">130+ m²</p>
                <p className="text-md text-secondary">
                  veći stanovi, kuće, dvoetažni prostori
                </p>
              </div>
              <p className="text-lg sm:text-xl text-accent font-black">
                od 450 €
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-fit flex flex-col items-start justify-start gap-4 sm:gap-8 px-8 sm:pl-32">
          <div>
            <h4 className="uppercase text-secondary">usluge</h4>
            <h2 className="text-xl font-bold text-primary">
              Dubinsko čišćenje (po komadu)
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:gap-3">
            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/chair.png"
                alt="Stolica"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <p className="uppercase text-md font-semibold text-primary">
                  stolica
                </p>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 10 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/sofa-bed.png"
                alt="Kauč na razvlačenje"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    kauč
                  </p>
                  <p className="text-md text-secondary">na razvlačenje</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 50 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/sofa-s.png"
                alt="Mala sofa"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    mala sofa
                  </p>
                  <p className="text-md text-secondary">fotelja</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 30 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/sofa-m.png"
                alt="Velika sofa"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    velika sofa
                  </p>
                  <p className="text-md text-secondary">3+ sjedeća mjesta</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 40 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/bed-s.png"
                alt="Jednokrevetni madrac"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    madrac
                  </p>
                  <p className="text-md text-secondary">jednokrevetni</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 30 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/bed-m.png"
                alt="Bračni madrac"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    madrac
                  </p>
                  <p className="text-md text-secondary">bračni</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 40 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/angle-sofa-s.png"
                alt="Kutna garnitura do 5 sjedala"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    kutna garnitura
                  </p>
                  <p className="text-md text-secondary">do 5 sjedala</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 50 €
                </p>
              </div>
            </div>

            <div className="h-28 sm:h-42 grid grid-rows-1 grid-cols-3 gap-3 sm:gap-6 sm:rounded-xl border border-b-gray-200 sm:border-gray-100 sm:shadow-md">
              <img
                src="/public/images/angle-sofa-m.png"
                alt="Kutna garnitura više od 5 sjedala"
                className="h-full"
              />
              <div className="col-span-2 flex flex-col items-start justify-between py-3 sm:py-8">
                <div>
                  <p className="uppercase text-md font-semibold text-primary">
                    kutna garnitura
                  </p>
                  <p className="text-md text-secondary">više od 5 sjedala</p>
                </div>
                <p className="text-lg sm:text-xl text-accent font-black">
                  od 65 €
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
