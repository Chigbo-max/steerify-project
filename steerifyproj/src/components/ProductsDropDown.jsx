import { useState } from "react";
import { productsDropDownItems } from "../helpers/ProductsDropDownItems.jsx";
import { Link } from "react-router-dom";

function ProductsDropDown() {
  const [dropDown, setDropDown] = useState(true); // true so it shows when parent sets state

  return (
    <div className="absolute mt-0">
      <ul
        className={`${
          dropDown ? "block" : "hidden"
        } bg-white w-40 p-1 rounded-lg shadow-lg`}
        onClick={() => setDropDown(!dropDown)}
      >
        {productsDropDownItems.map((item) => (
          <li
            key={item.id}
            className="px-3 py-2 bg-[#030F6D] hover:bg-[#2aa006] transition"
          >
            <Link
              to={item.path}
              onClick={() => setDropDown(false)}
              className="text-white text-sm"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsDropDown;
