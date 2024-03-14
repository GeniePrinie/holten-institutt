import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black container-fluid">
      <div className="d-flex mx-3 pt-3 mb-4 ">
        <img
          src="/assets/img/logo.png"
          alt="holten-institutt-logo"
          className="logo me-5"
        />
        <div className="text-white align-self-center logo-text">
          fysioterapi
        </div>
      </div>
      <nav className="d-flex flex-column flex-sm-row fs-3 pb-4 justify-content-center">
        <div className="mx-3">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Hjem
          </NavLink>
        </div>
        <div className="mx-3">
          <NavLink
            to={"/fysioterapeuter"}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Fysioterapeuter
          </NavLink>
        </div>
        <div className="mx-3">
          <NavLink
            to={"/kontakt"}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Kontakt
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
