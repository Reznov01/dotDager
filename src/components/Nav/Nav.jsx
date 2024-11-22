import React, { useState, useEffect } from "react";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Manejar la visibilidad del menú al hacer scroll
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    // Detectar la sección activa según el scroll
    const handleActiveSection = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id); // Cambia al ID de la sección visible
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent text-white p-4 transition-transform duration-500 z-50 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-fluid bg-transparent">
        <div className="padreNav">
          <div className="text-teal-50 flex  sm:p-2 justify-between lg:mx-12 2xl:mx-28">
            <button
              className="hidden lg:block text-xl uppercase font-medium"
              onClick={() => {
                const element = document.getElementById("home");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img
                src="/img/dotDagerIcon.png"
                alt="icono de dotDager"
                className="w-[80px] rounded-full"
              />
            </button>

            <div className="enlaces hidden lg:block ">
              <ul className="nav text-xl flex flex-col gap-4  w-[100px]">
                <li
                  className={`nav-link font-bold ${
                    activeSection === "home"
                      ? "border-r-4 border-blue-500  pr-2"
                      : " pr-2"
                  }`}
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById("home");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Inicio
                  </button>
                </li>
                <li
                  className={`nav-link font-bold ${
                    activeSection === "about"
                      ? "border-r-4 border-blue-500  pr-2"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Sobre Mi
                  </button>
                </li>
                <li
                  className={`nav-link font-bold ${
                    activeSection === "contact"
                      ? "border-r-4 border-blue-500 pr-2"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
