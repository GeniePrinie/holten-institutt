import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black">
      <div className="d-flex mx-3 pt-3 mb-4 container">
        <img
          src="/dist/assets/logo.png"
          alt="holten-institutt-logo"
          className="logo me-5"
        />
        <div className=" text-white align-self-center logo-text">
          fysioterapi
        </div>
      </div>
      <nav className="text-center fs-3 pb-4">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "mx-4 link-active" : "mx-4")}
        >
          Hjem
        </NavLink>
        <NavLink
          to={"/fysioterapeuter"}
          className={({ isActive }) => (isActive ? "mx-4 link-active" : "mx-4")}
        >
          Fysioterapeuter
        </NavLink>
        <NavLink
          to={"/kontakt"}
          className={({ isActive }) => (isActive ? "mx-4 link-active" : "mx-4")}
        >
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
};
