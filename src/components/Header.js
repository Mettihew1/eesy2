import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div id="flex" className="buttons">
        <a href="/">Home</a>
        <a href="products">Products</a>
        <a href="account">account</a>
      </div>

      <div>
        <input />
        <button>Search ..</button>
      </div>

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
