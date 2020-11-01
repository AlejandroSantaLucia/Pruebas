function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var verElemento = document.getElementById(id); //se define la variable "el" igual a nuestro div
    verElemento.style.display = (verElemento.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('detalle');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    }

