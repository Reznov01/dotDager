export default function Footer() {
  return (
    <div className="w-screen  p-5 bg-black flex justify-around flex-col md:flex-row">
      <div className="flex flex-col gap-2 mb-2 md:mb-0">
        <p className="text-gray-500 md:text-xl">Links</p>
        <p className="md:text-lg text-white">
          Hecha con 🥒 y ☕ por{" "}
          <a href="https://conseportafolio.netlify.app/">
            <span className="hover:text-yellow-400">Rafael Conse</span>
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-2 md:mb-0">
        <p className="text-gray-600 md:text-xl">Legal</p>
        <p className="text-white md:text-lg">
          Todos los iconos usados son de{" "}
          <a href="https://www.flaticon.es/">
            <span className="text-blue-500">Flaticon</span>
          </a>
        </p>
        <p className="text-white md:text-lg">
          juego usado
          <a href="https://tbot.xyz/lumber/">
            <span className="text-blue-500"> LumberJack</span>
          </a>
        </p>
      </div>
    </div>
  );
}
