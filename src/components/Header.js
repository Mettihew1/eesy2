import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";

function Header() {
  const [search, setSearch] = useState()
  const [product, setProducts] = useState()

  const searchSubmitHandler = () => {
    localStorage.setItem("search", JSON.stringify(search))
    // window.location("bitch")

    // axios
    // .post("http://localhost:4000/product/search", search)
    // .then((ev) => setProducts(ev.data))
    // .catch((err) => console.log(err));
  }

  const typeHandler = (ev) => {
    setSearch(ev.target.value)
  }

  const searchLocalStorage = JSON.parse(localStorage.getItem('search'))

  return (
    <div className="header">
      <div id="flex" className="buttons">
        <a href="/">Home</a>
        <a href="products">Products</a>
        <a href="account">account</a>
      </div>

      {/* <form onSubmit={searchSubmitHandler}> */}
        <input defaultValue={searchLocalStorage} placeholder={"Search"} onChange={(ev) => typeHandler(ev)}/>
        {/* <button>Search ..</button> */}
        <button onClick={searchSubmitHandler}>Search ..</button>
      {/* </form> */}

      <div>
        <a href="cart">
          Your Cart
          <IoCartOutline />
        </a>
      </div>
    </div>
  );
}
export default Header;
