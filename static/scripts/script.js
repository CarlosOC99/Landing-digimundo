var header = document.getElementById('header');
window.addEventListener('scroll', ()=>{
    var scroll= window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#032531'
    } else{
        header.style.backgroundColor = 'transparent'
    }
})

function ch(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}



function numb(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8) {
        return true;
    }

    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function mostrar1() {
    document.getElementById('texto1').style.visibility="visible";
    document.getElementById('texto2').style.visibility="hidden";
    document.getElementById('texto3').style.visibility="hidden";
    document.getElementById('texto4').style.visibility="hidden";

    document.getElementById("elementoS").style.textShadow = "2px 2px 5px #ffffff";
    document.getElementById("elementoS").style.textDecoration = "underline";
    document.getElementById("elementoS").style.textDecorationStyle = "double";
}

function mostrar2() {
    document.getElementById('texto1').style.visibility="hidden";
    document.getElementById('texto2').style.visibility="visible";
    document.getElementById('texto3').style.visibility="hidden";
    document.getElementById('texto4').style.visibility="hidden";

    document.getElementById("elementoS2").style.textShadow = "2px 2px 5px #ffffff";
    document.getElementById("elementoS2").style.textDecoration = "underline";
    document.getElementById("elementoS2").style.textDecorationStyle = "double";
}

function mostrar3() {
    document.getElementById('texto1').style.visibility="hidden";
    document.getElementById('texto2').style.visibility="hidden";
    document.getElementById('texto3').style.visibility="visible";
    document.getElementById('texto4').style.visibility="hidden";

    document.getElementById("elementoS3").style.textShadow = "2px 2px 5px #ffffff";
    document.getElementById("elementoS3").style.textDecoration = "underline";
    document.getElementById("elementoS3").style.textDecorationStyle = "double";
}

function mostrar4() {
    document.getElementById('texto1').style.visibility="hidden";
    document.getElementById('texto2').style.visibility="hidden";
    document.getElementById('texto3').style.visibility="hidden";
    document.getElementById('texto4').style.visibility="visible";

    document.getElementById("elementoS4").style.textShadow = "2px 2px 5px #ffffff";
    document.getElementById("elementoS4").style.textDecoration = "underline";
    document.getElementById("elementoS4").style.textDecorationStyle = "double";
}