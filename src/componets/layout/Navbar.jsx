import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

function Navbar({ title }) {
  return (
    // bg-neutral
    <nav className="navbar mb-12 shadow-lg text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to="/" className="text-lg font-bold aling-middle align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-secondary btn-sm rounded-btn mr-1">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-accent btn-sm rounded-btn ml-1"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
