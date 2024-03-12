import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>Hjem</NavLink>
      <NavLink to={"/fysioterapeuter"}>Fysioterapeuter</NavLink>
      <NavLink to={"/kontakt/bestillingtime"}>Bestilling Time</NavLink>
      <NavLink to={"/kontakt/adresse"}>Adresse</NavLink>
    </header>
  );
};
