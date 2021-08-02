
function openCar(evt, carro) {

    var i, tabcontent, tablinks;


//Obtendo e ocultando todos os elementos da classe "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

//Obtendo todos os elementos da classe "tablinks" e removendo a classe ativa
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active");
    }

//Mostra a guia atual e adiciona uma classe "ativa" ao botão que abriu a guia
    document.getElementById(carro).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity(evt, cidade) {

    var i, tabcontent2, tablinks2;


//Obtendo e ocultando todos os elementos da classe "tabcontent2"
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }

//Obtendo todos os elementos da classe "tablinks" e removendo a classe ativa
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace("active");
    }

//Mostra a guia atual e adiciona uma classe "ativa" ao botão que abriu a guia
    document.getElementById(cidade).style.display = "block";
    evt.currentTarget.className += " active";
}
