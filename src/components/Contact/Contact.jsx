import { useState } from "react";

export default function Contact() {
  const [showGame, setShowGame] = useState(false);

  const handleEmail = () => {
    const mailtoLink =
      "mailto:DotDager@Gmail.com?subject=Contacto urgente che&body=me interesa lo que haces, hagamos algo";
    window.open(mailtoLink, "_blank"); // Abre en una nueva pestaña
  };

  return (
    <section
      className="min-w-screen min-h-screen bg-slate-900 flex flex-col sm:flex-row relative"
      id="contact"
    >
      <h2 className="text-slate-100 text-2xl xt-center font-bold absolute top-10 left-1/2 transform translate-x-[-50%]">
        Contacto
      </h2>
      <div className="w-full sm:w-1/2 h-screen  flex flex-col items-center justify-center relative">
        <p
          className={` absolute top-5 right-10 sm:-right-10 xl:right-20  text-2xl font-bold text-red-500 cursor-pointer z-50 animate-fade ${
            showGame ? "block " : "hidden"
          }`}
          onClick={() => setShowGame(false)}
        >
          X
        </p>
        <div
          className={`w-full flex-col items-center animate-fade-right sm:ml-10 h-screen  ${
            showGame ? "flex" : "hidden"
          }`}
        >
          <iframe
            src="https://tbot.xyz/lumber/"
            title="Lumberjack Game"
            width="800"
            height="900"
            style={{
              border: "none",
              maxWidth: "100%",
              aspectRatio: "4/3",
            }}
          ></iframe>
        </div>
        <div
          className={` flex flex-col -mt-48 sm:mt-0 ${
            showGame ? "hidden" : "flex"
          }`}
        >
          <img
            src="/img/gameIcon.png"
            alt="game imagen"
            className="w-[250px] xl:w-[400px] xl:h-[450px]"
          />
          <button
            className=" w-[95%] p-2  bg-blue-400 rounded-md font-medium text-xl mr-10 text-white animate-bounce animate-infinite animate-ease-in-out"
            onClick={() => setShowGame(true)}
          >
            Juguemos un poco 😎
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 text-white flex flex-col justify-center items-center -mt-52 mb-28 sm:mt-0 sm:mb-0">
        <h2 className="text-xl md:text-2xl xl:text-4xl">
          Che contactame por donde queras
        </h2>
        <p className="text-2xl text-gray-500 mt-10">mandame un email 👍</p>
        <button
          className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 mt-12 "
          onClick={handleEmail}
        >
          Contáctame
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
