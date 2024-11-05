import Test2 from "./Test2";

export default function Test1() {
  const carHandler = (ev) => {
    console.log(ev);
  };

  return (
    <div>
      1
      <Test2 carName={(ev) => carHandler(ev)} />
      {/* <Test2 carName={carHandler} /> */}
    </div>
  );
}
