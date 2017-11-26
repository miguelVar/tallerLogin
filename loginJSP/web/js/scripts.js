/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function newUser() {
    var contenido = document.getElementById("NewUser");
    contenido.innerHTML = "";

    var formulario = document.createElement("form");

    var title = document.createElement("h5");
    title.appendChild(document.createTextNode("Ingrese los datos del nuevo usuario"));
    formulario.appendChild(title);
    formulario.appendChild(document.createTextNode("Nombre: "));
    var txt = document.createElement("input");
    txt.setAttribute("id", "txtNombre");
    txt.setAttribute("placeholder", "Ingrese el nombre");
    formulario.appendChild(txt);

    formulario.appendChild(document.createTextNode("Email: "));
    txt = document.createElement("input");
    txt.setAttribute("id", "txtNombre");
    txt.setAttribute("type", "email");
    txt.setAttribute("placeholder", "Ingrese el correo electronico");
    formulario.appendChild(txt);


    formulario.appendChild(document.createTextNode("Contraseña: "));
    txt = document.createElement("input");
    txt.setAttribute("id", "txtNombre");
    txt.setAttribute("placeholder", "Ingrese la contraseña");
    txt.setAttribute("type", "password")
    formulario.appendChild(txt);


    formulario.appendChild(document.createTextNode("Confirmar Contraseña: "));
    txt = document.createElement("input");
    txt.setAttribute("id", "txtNombre");
    txt.setAttribute("placeholder", "Ingrese la contraseña");
    txt.setAttribute("type", "password")
    formulario.appendChild(txt);

    var espacio = document.createElement("br");
    formulario.appendChild(espacio);
    var boton = document.createElement("button");
    boton.appendChild(document.createTextNode("Guardar"));
    boton.setAttribute("class", "waves-effect waves-light btn");
    boton.setAttribute("onclick", "msm()");

    formulario.appendChild(boton);
    contenido.appendChild(formulario);

}
function validateUser() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var exp = /@/g;
    var rta = exp.test(email);
    if (rta) {
        var xhr=new XMLHttpRequest();
        xhr.open("GET","ServletValidateUser?id="+pass,true);
        xhr.onreadystatechange=function (){
            if (xhr.readyState===4) {
                alert(xhr.responseText);
            }
        };
        xhr.send(null);
    }else{
        alert("Dirección de correo incorrecta");
    }

}

function msm() {
    alert("bien");
}