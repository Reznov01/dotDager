import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Aboutme from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Nav />
      <main className="flex flex-col ">
        <Header />
        <div className=" bg-[url('/img/about.jpeg')] bg-cover bg-center  bg-fixed flex w-screen h-[200px] sm:h-[300px]"></div>
        <Aboutme />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
