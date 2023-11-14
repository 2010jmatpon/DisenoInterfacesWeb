

const cambiarDiseno = ( ) => {
    const navNormal = document.querySelector("header .header_zonaNavegacion");
    const navHamb = document.querySelector("header .header_zonaNavegacionHamb")
    if (!navNormal.getAttribute("hidden")){
        console.log("Mostrar nav hamburguer")
        navNormal.setAttribute("hidden", true);
        navNormal.style.display = "none";
        navHamb.removeAttribute ("hidden");
        navHamb.style.display = "block";

    }
}

const cambiarDiseno2 = ( ) => {
    const navNormal = document.querySelector("header .header_zonaNavegacion");
    const navHamb = document.querySelector("header .header_zonaNavegacionHamb")
    if (navNormal.getAttribute("hidden")){
        console.log("Mostrar nav normal")
        navNormal.removeAttribute ("hidden");
        navNormal.style.display = "flex";
        navHamb.setAttribute("hidden", true);

        
    }
}

window.onresize =  () => {
    if(window.innerWidth <= 600){
        cambiarDiseno();
    }
}