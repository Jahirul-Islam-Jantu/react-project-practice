import Hero from "./components/Hero";
import Header from "./components/Header";
import Result from "./components/Result";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ObjectProps from "./components/ObjectProps";

const App = () => {
  const item = {
    Name: "Jahirul Islam",
    Age: "32",
    Address: "Narayangonj",
    Education: "M.B.A",
  };

  let marks = 85;
  return (
    <div>
      <Home title="This is home title" des="This is description" />
      <ObjectProps {...item}/>
      <Header />
      <Hero />
      {marks >= 80 ? <h1>Brilliant Result</h1> : <h2>Average Result</h2>}
      <Result />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
