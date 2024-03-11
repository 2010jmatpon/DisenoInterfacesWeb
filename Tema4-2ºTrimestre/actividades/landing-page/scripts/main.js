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
        bloquesTexto[i].classList.remove("activoTexto");
      });

      // Y le ponemos activo al boton al que hacemos click
      boton.classList.add("activoBoton");
      bloquesTexto[i].classList.add("activoTexto");
    });
  });

  //CÓDIGO DEL CARRUSEL
  //Seleccionamos el nodo con clase carrousel__grande
  const divCarrouselGrande = document.querySelector(".carrousel__grande");
  //debemos añadir una funcionalidad click a los botones ...  tenemos que seleccionar TODOS los botones
  const botones = document.querySelectorAll(".botones__boton");

  botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log(`Se ha pulsado el botón número ${i}`);

      botones.forEach((botonQuitar) => {
        botonQuitar.classList.remove("activo");
      });
      boton.classList.add("activo");

      let calculoPx = i * -50;
      console.log(`Click en ${i}, cálculo = ${calculoPx}`)
      divCarrouselGrande.style.transform = `translateX(${calculoPx}%)`
    });
  });
}

window.onload = onIniciar;
