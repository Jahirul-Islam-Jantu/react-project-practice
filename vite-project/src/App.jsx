import Hero from "./components/Hero";
import Header from "./components/Header";
import Result from "./components/Result";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  let marks = 85;
  return (
    <div>
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
