import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Fysioterapeuter } from "./pages/Fysioterapeuter";
import { Kontakt } from "./pages/Kontakt";

function RouteNotFound() {
  return <div>Page not found</div>;
}

export function RouterPathway() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fysioterapeuter" element={<Fysioterapeuter />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
