import Result from "./components/Result";

const App = () => {
  let marks = 85;
  return (
    <div>
      {marks >= 80 ? <h1>Brilliant Result</h1> : <h2>Average Result</h2>}
      <Result />
    </div>
  );
};

export default App;
