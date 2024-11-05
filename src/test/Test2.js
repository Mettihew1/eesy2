export default function Test2(props) {

    const clickHandler = () => {
        props.carName("clicked");
    }

  return (
    <div>
      2
      <button onClick={clickHandler}>Click Here</button>
    </div>
  );
}
