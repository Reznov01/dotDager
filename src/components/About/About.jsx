import React from "react";

export default function About() {
  return (
    <section
      className="min-h-screen min-w-screen bg-slate-800 flex flex-row relative"
      id="about"
    >
      <h2 className="absolute left-1/2 transform translate-x-[-50%] top-16 text-3xl font-bold text-white">
        MIS PASIONES
      </h2>
      <div className="w-full xl:w-[70%] p-20">
        <div className="flex  xl:w-full 2xl:w-[80%] h-[650px] bg-slate-700 mt-32 p-3 rounded-md shadow-[-27px_62px_13px_0px_#00000024]">
          <div className="w-[30%] h-fu rounded-md ">
            <img
              src="/img/aboutme.jpeg"
              alt="imagen cat"
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-[70%] flex-col relative mt-20">
            <div className="w-full  p-6 flex flex-col">
              <h2 className="text-3xl font-bold mb-4 text-slate-300">👀</h2>
              <p className="text-xl text-slate-400 whitespace-pre-line">
                Dicen que los gatos tienen nueve vidas. Yo, con mi guitarra, mi
                amor por la filosofía y mi adicción a los pepinillos, creo que
                tengo
              </p>
              <p className="text-xl text-slate-400 whitespace-pre-line my-1">
                al menos nueve pasiones. Y todas ellas se unen en mi código,
                creando aplicaciones que son tan únicas como yo
              </p>

              <h2 className="text-2xl text-orange-400 mt-10">
                Algo se está cocinando... ¡No te lo pierdas
              </h2>
              <div className=" mt-6 ">
                <ul className="flex space-x-4 justify-start">
                  <a
                    href="open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-Z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-gray-400 hover:text-white ">
                      <img
                        src="/img/spotifyIcon.png"
                        alt="icon Spotify"
                        className="w-[50px]"
                      />
                    </i>
                  </a>
                  <a
                    href="tiktok.com/@elantrodedager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-blue-400 hover:text-white">
                      <img
                        src="/img/tiktokIcon.png"
                        alt="icon Spotify"
                        className="w-[50px]"
                      />
                    </i>
                  </a>
                  <a
                    href="discord.gg/4NFk6TamAB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-pink-400 hover:text-white">
                      <img
                        src="/img/discordIcon.png"
                        alt="icon Spotify"
                        className="w-[50px]"
                      />
                    </i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] hidden xl:block">
        <img
          src="/img/sobreMi.png"
          alt="imagen filosofica"
          className="mt-52 2xl:mt-28"
        />
        <div className="p-4 border border-blue-400 rounded-lg 2xl:w-[60ch] mt-10 text-center -ml-10 2xl:ml-5 mr-5 2xl:mr-0 ">
          <h2 className=" xl:text-xl 2xl:text-2xl text-purple-500 font-medium">
            Che, si no podés leer lo del letrero, sos demasiado boludo para
            estar acá. Acá hablamos en código{" "}
            <span className="text-green-600">pepinillo</span> -{" "}
            <span className="text-white">guitarrero</span> , ¿entendés?
          </h2>
        </div>
      </div>
    </section>
  );
}
