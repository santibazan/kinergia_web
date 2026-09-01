import { CalculadoraTermotanqueUI } from "../../UI/Calculadora/CalculadoraTermotanqueUI";
import FooterUI from "../../UI/Footer/FooterUI";
import NavbarUI from "../../UI/Header/NavbarUI";




export const CalculadoraSolarScreen = () => {
  return (
    <>
      <NavbarUI />
      <CalculadoraTermotanqueUI/>
      <FooterUI />
    </>
  );
};
