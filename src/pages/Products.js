import { useEffect, useState } from "react";
import axios from "axios";
import RangeSlider from "./RangeSlider";

function Products() {
  const [products, setProducts] = useState();

  const localStorageRange = JSON.parse(localStorage.getItem("range"))

  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/")
    //   .then((ev) => setProducts(ev.data))
    //   .catch((err) => console.log(err));


      axios
      .post("http://localhost:4000/user", {price: localStorageRange})
      .then((ev) => setProducts(ev.data))
      .catch((err) => console.log(err));

  }, []);

  const dataMap = products?.map((ev, id) => (
    <div key={ev._id} className="productsMap">
      <p>{ev.name}</p>
      <h3>${ev.price}</h3>
      <img
        src="https://lh5.googleusercontent.com/p/AF1QipOrj0R9lSjcSVga9678WI_pC_npU5s_5qaoWOhW=w190-h190-n-k-no"
        width={"50px"}
        alt="shoe"
      />
    </div>
  ));

  const goHandler = (ev) => {
    axios
      .post("http://localhost:4000/user", {price: ev})
      .then((ev) => setProducts(ev.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="products">
      <div className="left">
 
      {products?.length} Results

<select>
  <option>sort by</option>
  <option>low to high</option>
  <option>high to low</option>
</select>

        <RangeSlider goParent={(ev) => goHandler(ev)}/>

      </div>

      <div style={{ display: "grid" }}> {dataMap}
        
         </div>
    </div>
  );
}
export default Products;



