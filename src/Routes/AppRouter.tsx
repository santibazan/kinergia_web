import { Route } from "react-router";
import { Routes } from "react-router";

import { LandingScreen } from "../Components/Screens/Landing/LandingScreen";
import { ContactoScreen } from "../Components/Screens/Contacto/ContactoScreen";
import { NosotrosScreen } from "../Components/Screens/Nosotros/NosotrosScreen";
import { OilGasScreen } from "../Components/Screens/OilGas/OilGasScreen";
import { SolarScreen } from "../Components/Screens/Solar/SolarScreen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/contacto" element={<ContactoScreen />} />
      <Route path="/nosotros" element={<NosotrosScreen />} />
      <Route path="/servicios/oilgas" element={<OilGasScreen />} />
      <Route path="/servicios/solar" element={<SolarScreen />} />
      {/* <Route path="/projects" element={<ProjectsScreen />} /> */}
    </Routes>
  );
};
