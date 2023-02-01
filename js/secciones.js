function accionFlecha(id_flecha_hide, id_flecha_show, id_seccion, accion) {

    if(accion == "show"){
        console.log("Mostrar la seccion "+id_seccion);
        document.getElementById(id_flecha_show).style.display = "none";
        document.getElementById(id_seccion).style.display = "block";
        document.getElementById(id_flecha_hide).style.display = "flex";
    }
    else
    {
        console.log("Esconder la seccion "+id_seccion);
        document.getElementById(id_flecha_hide).style.display = "none";
        document.getElementById(id_seccion).style.display = "none";
        document.getElementById(id_flecha_show).style.display = "flex";
    }
}

let formacionShow = document.getElementById("formacion_show");
let formacionHide = document.getElementById("formacion_hide");

let experienciaShow = document.getElementById("experiencia_show");
let experienciaHide = document.getElementById("experiencia_hide");

let habilidadesShow = document.getElementById("habilidades_show");
let habilidadesHide = document.getElementById("habilidades_hide");

let idiomasShow = document.getElementById("idiomas_show");
let idiomasHide = document.getElementById("idiomas_hide");

formacionShow.addEventListener("click", function(){
    accionFlecha("formacion_show", "formacion_hide", "formacion_body", "hide");
});
formacionHide.addEventListener("click", function(){
    accionFlecha("formacion_show", "formacion_hide", "formacion_body", "show");
});

experienciaShow.addEventListener("click", function(){
    accionFlecha("experiencia_show", "experiencia_hide", "experiencia_body", "hide");
});
experienciaHide.addEventListener("click", function(){
    accionFlecha("experiencia_show", "experiencia_hide", "experiencia_body", "show");
});

habilidadesShow.addEventListener("click", function(){
    accionFlecha("habilidades_show", "habilidades_hide", "habilidades_body", "hide");
});
habilidadesHide.addEventListener("click", function(){
    accionFlecha("habilidades_show", "habilidades_hide", "habilidades_body", "show");
});

idiomasShow.addEventListener("click", function(){
    accionFlecha("idiomas_show", "idiomas_hide", "idiomas_body", "hide");
});
idiomasHide.addEventListener("click", function(){
    accionFlecha("idiomas_show", "idiomas_hide", "idiomas_body", "show");
});