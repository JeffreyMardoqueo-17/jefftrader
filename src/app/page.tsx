"use client"

import Welcome from "@/sections/welcome";
import { PorqueSection } from "@/sections/porque";
import QueSeAprende from "@/sections/QueSeAprende";
import HerramientasTrading from "@/sections/HerramientasTrading";

export default function Home() {
  const alerta = () => {
    alert("Ejemplo: hola");
  }

  return (
    <>
      <Welcome />
      <PorqueSection />
      <QueSeAprende />
      <HerramientasTrading />
    </>
  );
}
