import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from "../../assets/steerifyNewLogo.png";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const links = [
  { title: "Products", path: "/Products" },
  { title: "Contact us", path: "/ContactUs" },
  { title: "About Steerify", path: "/SteerifyLens/AboutUs"}
];

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-[#030F6D] text-white w-full p-8 md:justify-center md:items-start">
      {/* Left side */}
      <div className="md:mr-12 mb-6 md:mb-0">
        <Link to="/"><img src={FooterLogo} alt="Steerify Logo" className="w-40 h-auto cursor-pointer" /></Link>
      </div>

      {/* Right side */}
      <div className="flex flex-col md:ml-24 flex-1">
        {/* Navigation links */}
        <div className="flex space-x-8 mb-4">
          {links.map((list, index) => (
            <Link key={index} to={list.path}>
              <h3 className="text-lg font-medium hover:text-[#2aa006]">{list.title}</h3>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-4" />

        {/* Address + Contact */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-8 text-sm">
          {/* Location */}
          <div className="md:w-2/3">
            <div className="flex items-center text-white mb-2 cursor-pointer">
              <LocationOnIcon />
              <h5 className="ml-2 mt-1 font-medium">Lagos</h5>
            </div>
            <p className="mb-2">
              Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District, Alausa 100212, Ikeja, Lagos, Nigeria
            </p>
            <p className="mb-2">Over 24 physical branches across the nation.</p>
            <p className="mt-4">&copy; 2025 Steerify. All Rights Reserved.</p>
          </div>

          {/* Contact */}
          <div className="mt-6 md:mt-0 md:w-1/3">
            <p className="uppercase font-semibold mb-2">Contact with us</p>
            <p className="mb-3">hello@steerifygroup.com</p>
            <div className="flex space-x-4 text-2xl">
              <Link to="/"><FontAwesomeIcon icon={faInstagram} className="text-[#2aa006] hover:opacity-80" /></Link>
              <Link to="/"><FontAwesomeIcon icon={faFacebook} className="text-[#2aa006] hover:opacity-80" /></Link>
              <Link to="/"><FontAwesomeIcon icon={faSquareXTwitter} className="text-[#2aa006] hover:opacity-80" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
