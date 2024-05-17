const ObjectProps = (props) => {
  return (
    <div>
      <h1>Name: {props.Name}</h1>
      <h2>Age: {props.Age}</h2>
      <h3>Address: {props.Address}</h3>
      <h4>Education: {props.Education}</h4>
    </div>
  );
};

export default ObjectProps;
