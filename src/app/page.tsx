"use client"
import { Boton } from "@/components/boton";
import Welcome from "@/components/welcome";

export default function Home() {
  const alerta = () => {
    alert("Ejemplo: hola");
  }

  return (
    <>
      <Welcome />
    </>
  );
}
