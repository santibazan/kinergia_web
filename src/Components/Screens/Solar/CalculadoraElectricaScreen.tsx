import { CalculadoraElectricaUI } from "../../UI/Calculadora/CalculadoraElectricaUI";
import FooterUI from "../../UI/Footer/FooterUI";
import NavbarUI from "../../UI/Header/NavbarUI";



export const CalculadoraElectricaScreen = () => {
  return (
    <>
      <NavbarUI />
      <CalculadoraElectricaUI/>
      <FooterUI />
    </>
  );
};
