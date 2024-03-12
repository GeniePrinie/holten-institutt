import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Fysioterapeuter } from "./pages/Fysioterapeuter";
import { BestillingTime } from "./pages/BestillingTime";
import { Adresse } from "./pages/Adresse";

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
          <Route path="kontakt">
            <Route path="bestillingtime" element={<BestillingTime />} />
            <Route path="adresse" element={<Adresse />} />
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
