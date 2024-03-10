function onIniciar() {
    console.log("Hola Mundo");
  
    // 1º es conseguir todas las pestañas aka los botones
    // 2º es conseguir todos los bloques de texto
    const botonesTab = document.querySelectorAll(".botonesTab__pestana");
    const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");
  
    // 3º Sería añadir un eventListener de click a todos los botones
    botonesTab.forEach((boton, i) => {
      console.log(boton);
  
      boton.addEventListener("click", () => {
        console.log("Click en boton " + i);
  
        //Recorrer todos los botones y quitar clase activo
        // Le quitamos la clase activo al resto
  
        botonesTab.forEach((botonFE, i) => {
          botonFE.classList.remove("activoBoton");
          bloquesTexto[i].classList.remove("activoTexto")
        });
  
        // Y le ponemos activo al boton al que hacemos click
        boton.classList.add("activoBoton");
        bloquesTexto[i].classList.add("activoTexto")
  
      });
    });
  
    //contenedorTexto.addEventListener("click", removeActivo);
  }
  
  window.onload = onIniciar;
  