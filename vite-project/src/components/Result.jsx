const result = () => {
  let eggPrice = 40;
  return (
    <div>{eggPrice >= 35 ? <h1>Pick 4 Eggs</h1> : <h1>pick 3 Eggs</h1>}</div>
  );
};

export default result;
