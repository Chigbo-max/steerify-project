import { navBarItems } from '../../helpers/NavBarItems.jsx'
import { Link } from "react-router-dom"
import Logo from "../../assets/steerifyNewLogo.png"
import DropDown from "../../components/DropDown.jsx"
import ProductsDropDown from "../ProductsDropDown.jsx"
import { LiaAngleDownSolid, LiaBarsSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux"
import { setDropDown, setOpenLink, setProductsDropDown } from '../../app/navBar/navBarSlice.jsx'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openLink, dropDown, productsDropDown } = useSelector((state) => state.navBar);

  function toggleBar() {
    dispatch(setOpenLink(!openLink));
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030F6D] h-[120px] flex items-center justify-center px-16 z-50">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="mt-[-30px]">
          <Link to="/"><img src={Logo} alt="Steerify Logo" className="w-[140px]" /></Link>
        </div>

        {/* Nav Items */}
        <ul
          className={`hidden md:flex gap-8 text-white text-[1.1em] ${
            openLink ? "flex" : ""
          }`}
        >
          {navBarItems.map((item) => {
            if (item.title === "Steerify Lens") {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => dispatch(setDropDown(true))}
                  onMouseLeave={() => dispatch(setDropDown(false))}
                >
                  <Link
                    to={item.path}
                    className="hover:bg-[#030F6D] hover:text-white rounded-md border-l-4 border-transparent hover:border-[#2aa006] px-2 py-1 transition"
                  >
                    {item.title} <LiaAngleDownSolid className="inline" />
                  </Link>
                  {dropDown && <DropDown />}
                </li>
              );
            }

            if (item.title === "Products") {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => dispatch(setProductsDropDown(true))}
                  onMouseLeave={() => dispatch(setProductsDropDown(false))}
                >
                  <Link
                    to={item.path}
                    className="hover:bg-[#030F6D] hover:text-white rounded-md border-l-4 border-transparent hover:border-[#2aa006] px-2 py-1 transition"
                  >
                    {item.title} <LiaAngleDownSolid className="inline" />
                  </Link>
                  {productsDropDown && <ProductsDropDown />}
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:bg-[#030F6D] hover:text-white rounded-md border-l-4 border-transparent hover:border-[#2aa006] px-2 py-1 transition"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Sign Up Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => navigate("/signUp")}
            className="bg-[#2aa006] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-[#030F6D] hover:border hover:border-[#030F6D] transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleBar} className="text-white text-2xl">
            <LiaBarsSolid />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {openLink && (
        <ul className="absolute top-[120px] left-0 w-full flex flex-col items-start bg-[#030F6D] p-4 gap-4 md:hidden shadow-lg">
          {navBarItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-white hover:text-[#2aa006] transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <button
            onClick={() => navigate("/signUp")}
            className="bg-[#2aa006] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-[#030F6D] hover:border hover:border-[#030F6D] transition"
          >
            Sign Up
          </button>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
