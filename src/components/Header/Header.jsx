import React, { useState } from "react";
import Cat from "../cat/Cat";
import "./style.css";

export default function Header() {
  const [activeElement, setActiveElement] = useState(true);

  const handleActiveElement = () => {
    setActiveElement(!activeElement);
  };

  return (
    <section
      className="relative min-w-screen min-h-screen lg:h-[110vh] 2xl:h-screen "
      id="home"
    >
      {/* Capa interactiva del gato y el pepino */}
      <div
        className={`absolute inset-0 z-20 ${
          activeElement ? "pointer-events-auto" : "pointer-events-none"
        } `}
      >
        <Cat controlElement={handleActiveElement} />
      </div>

      {/* Contenido de la página */}
      <div className="flex flex-col xl:flex-row h-screen ">
        <div className="h-screen xl:w-1/2  bg-yellow-500 lg:h-[110vh] 2xl:h-screen animate-left hover:bg-yellow-400 transition-all">
          <div className="w-full flex justify-center mt-5">
            <h1 className=" text-lg sm:text-2xl xl:text-4xl font-bold">
              Full-Stack Senior{" "}
              <span className="xl:hidden text-red-600">
                / Creador De Contenido
              </span>
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <img
              className="w-[500px] h-[400px] 2xl:w-[700px] 2xl:h-[550px] object-cover mb-6 mt-10 xl:ml-32 hidden xl:block"
              src="/img/desarollador.png"
              alt="imagen ilustrativa de dotdager"
            />
            <img
              className="sm:w-[500px] sm:h-[380px] 2xl:w-[700px] 2xl:h-[500px] object-cover mb-6 mt-12 xl:ml-32 ml-10 sm:ml-0  xl:hidden"
              src="/img/creadorDeContenido.png"
              alt="imagen ilustrativa de dotdager"
            />

            <div className="flex flex-col -mt-10  animate-fade-right xl:animate-delay-[2000ms]">
              <div className="border-2 p-4 border-black rounded-md shadow-[-21px_30px_20px_10px_#00000024] xl:w-[95%] xl:mx-auto 2xl:w-full ">
                <p className="text-2xl ">
                  Hola 👋 soy <span className="font-bold">DotDager</span>,
                  Desarrollador Senior con pasión por el código
                  <br /> y un toque de pepinillo en cada proyecto.
                </p>
              </div>

              {/* Iconos de redes sociales */}
              <div className="mt-10 xl:ml-5 2xl:ml-0">
                <ul className="flex gap-4">
                  <li>
                    <a href="https://linktr.ee/DotDager" target="_blank">
                      <img
                        src="/img/linktree.ico"
                        alt="imagen icon redSocial"
                        className="w-[45px] transform hover:scale-105 hover:-translate-y-1 transition-transform "
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MarianoVilla" target="_blank">
                      <img
                        src="/img/githubIcon.png"
                        alt="imagen icon redSocial"
                        className="w-[45px]  transform hover:scale-105 hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US"
                      target="_blank"
                    >
                      <img
                        src="/img/linkedinIcon.png"
                        alt="imagen icon redSocial"
                        className="w-[45px]  transform hover:scale-105 hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  </li>
                  <div className="flex gap-4 xl:hidden ">
                    <li className="w-[45px]">
                      <a href="https://www.twitch.tv/dagerxiv" target="_blank">
                        <img
                          src="/img/twichIcon.png"
                          alt="imagen icon redSocial"
                          className="w-[45px] transform hover:scale-105 hover:-translate-y-1 transition-transform "
                        />
                      </a>
                    </li>
                    <a href="https://www.youtube.com/@DotDager" target="_blank">
                      <li className="w-[45px]">
                        <img
                          src="/img/youtubeIcon.png"
                          alt="imagen icon redSocial"
                          className=" w-[45px] transform hover:scale-105 hover:-translate-y-1 transition-transform"
                        />
                      </li>
                    </a>
                    <a
                      href="https://www.instagram.com/dager.32/"
                      target="_blank"
                    >
                      <li className="w-[45px]">
                        <img
                          src="/img/instagramIcon.png"
                          alt="imagen icon redSocial"
                          className=" w-[45px] transform hover:scale-105 hover:-translate-y-1 transition-transform"
                        />
                      </li>
                    </a>
                    <a href="https://x.com/Dager_32" target="_blank">
                      <li className="w-[45px]">
                        <img
                          src="/img/twitterIcon.png"
                          alt="imagen icon redSocial"
                          className=" w-[45px] transform hover:scale-105 hover:-translate-y-1 transition-transform"
                        />
                      </li>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex flex-col  xl:w-[50%] bg-gray-500 lg:h-[110vh] 2xl:h-screen  animate-rigth relative hover:bg-gray-600 transition-all hidden ">
          <div className="w-full flex justify-center mt-5">
            <h1 className=" text-xl md:text-3xl xl:text-4xl font-bold ">
              Creador De <span className="text-yellow-300">Contenido.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center mt-10 2xl:ml-20 w-full ">
            <img
              className="w-[300px] h-[400px]  xl:w-[520px] 2xl:w-[600px]  2xl:h-[450px] xl:ml-20  2xl:ml-24  hidden lg:block object-cover"
              src="/img/creadorDeContenido.png"
              alt="imagen ilustrativa de dotdager"
            />
            <div className="flex flex-col  xl:mt-5 2xl:mt-24 animate-fade-left xl:animate-delay-[2000ms] lg:w-[95%] lg:mx-auto 2xl:w-full">
              <div className=" border-2  p-2 border-black rounded-md max-w-[800px] shadow-[31px_30px_20px_10px_#00000024]">
                <p className="text-2xl ">
                  Cuando no estoy programando, estoy pensando en el próximo
                  chiste de mierda que contaré.
                </p>
              </div>
              <div className="mt-10 lg:ml-5 2xl:ml-0">
                <ul className="flex gap-4">
                  <a
                    href="https://www.twitch.tv/dagerxiv"
                    target="_blank"
                    className="transform hover:scale-105 hover:-translate-y-1 transition-transform"
                  >
                    <li className="w-[45px]">
                      <img
                        src="/img/twichIcon.png"
                        alt="imagen icon redSocial"
                        className="w-[45px]"
                      />
                    </li>
                  </a>
                  <a
                    href="https://www.youtube.com/@DotDager"
                    target="_blank"
                    className="transform hover:scale-105 hover:-translate-y-1 transition-transform"
                  >
                    <li className="w-[45px]">
                      <img
                        src="/img/youtubeIcon.png"
                        alt="imagen icon redSocial"
                      />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/dager.32/"
                    target="_blank"
                    className="transform hover:scale-105 hover:-translate-y-1 transition-transform"
                  >
                    <li className="w-[45px]">
                      <img
                        src="/img/instagramIcon.png"
                        alt="imagen icon redSocial"
                      />
                    </li>
                  </a>
                  <a
                    href="https://x.com/Dager_32"
                    target="_blank"
                    className="transform hover:scale-105 hover:-translate-y-1 transition-transform"
                  >
                    <li className="w-[45px]">
                      <img
                        src="/img/twitterIcon.png"
                        alt="imagen icon redSocial"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block absolute left-[50%] transform translate-x-[-50%] bottom-10 xl:bottom-2 2xl:bottom-10 z-10">
          <p className="text-xl text-[#1b1b1b]">
            Usa click para soltar el pepinillo
          </p>
        </div>
      </div>
    </section>
  );
}
