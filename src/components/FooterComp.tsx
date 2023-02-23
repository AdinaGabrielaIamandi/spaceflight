import { Link } from "react-router-dom";

export const FooterComp = () => {
  return (
    <div className="text-center bg-dark">
      <ul className="list-unstyled d-flex flex-column h-100 justify-content-center mb-0">
        <li>
          <Link className="text-decoration-none text-secondary" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none text-secondary" to="/">
            Songs
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none text-secondary" to="/">
            Coming soon
          </Link>
        </li>
      </ul>
    </div>
  );
};
