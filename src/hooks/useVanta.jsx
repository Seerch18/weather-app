import React, { useState, useEffect, useRef } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const useVanta = () => {
  const myRefDiv = useRef(null); // valor inicial
  // vanta = estado
  const [vanta, setVanta] = useState(0); // vanta va a ser inicializado a "0"
  // En la primera renderización "myRefDiv.current" es igual
  // a "nulo", el valor inicial
  console.log("myRefDiv.current", myRefDiv.current);

  useEffect(() => {
    console.log("myRefDiv.current (en UseEffect)", myRefDiv.current);
    // Solo pasa una vez por el if
    //vanta === 0, es igual a "vanta == false" o "!vanta"
    if (!vanta) {
      // SOLO PASA 1 VEZ
      // Inicialización de "vanta"
      // Activo el efecto "clouds"
      Clouds({
        THREE,
        el: myRefDiv.current,
      }); // vanta != 0, es direfente de falso
      console.log("Establezco vanta a un valor diferente de 0");
    }
    // Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + vanta effect)
    return () => {
      // Dentro de esta función se va arealizar la tarea
      // de destruir los recursos tomados por "vanta"
      if (vanta) {
        vanta.destroy();
        console.log("Libero los recursos");
      }
    };
  }, [vanta]); // Con esto me aseguro que siga funcionando bien
  // si tuviera más variables "use"

  return myRefDiv;
};

export default useVanta;
