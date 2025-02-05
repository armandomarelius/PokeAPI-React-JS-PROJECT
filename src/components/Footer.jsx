import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from bg-green-500 to-purple-300 shadow-lg text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">¡Thanks for visiting!</h2>
          <p className="mb-4">
            Explore more about pokemon and discover all the nice things we have ready for you
          </p>
          <div className="flex space-x-4">
            <Link
              to={ROUTES.HOME}
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="hover:text-yellow-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Pokémon Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;