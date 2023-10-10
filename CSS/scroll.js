
const altura_total = document.documentElement.scrollHeight;
/*obtiene la altura total de un elemento, incluyendo el contenido que no es visible 
debido al desplazamiento vertical. representa la altura completa del contenido html*/

const altura_sin_scroll = document.documentElement.clientHeight;
/*obtiene la altura visible del elemento, es decir, la altura de la ventana del navegador en ese 
momento, excluyendo cualquier contenido fuera de la vista debido al desplazamiento vertical. */
console.log(altura_total-altura_sin_scroll)

const scrollUnit = (altura_total - altura_sin_scroll) / 100;
const rootStyles = document.documentElement.style;
//accedemos a la raiz del html (:root) y nos metemos a los estilos


addEventListener('scroll', () => {
/*scrollY proporciona la cantidad de desplazamiento vertical que ha ocurrido en una página web desde la 
parte superior del documento hasta el final. */
    
    rootStyles.setProperty('--width', scrollY / scrollUnit);
    //seteamos el valor de la variable width con el recorrido
})


window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        window.scrollBy(0, -50);
    } else if (event.key === "ArrowDown") {
        window.scrollBy(0, 50);
    }
});