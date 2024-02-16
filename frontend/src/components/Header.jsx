import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-gray-500 items-center py-2 px-8 justify-between font-semibold text-white">
      <Link to="/">
        <h1 className="text-xl font-bold">EDC</h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
