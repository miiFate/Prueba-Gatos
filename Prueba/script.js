class ImagenClick{
    constructor(imagen,nombre,identificador){
        this.imagen = imagen;
        this.nombre = nombre;
        this.identificador = identificador;
    }
    ImagenContador(){
        var img = document.getElementById("lugar").createElement("img");
        img.src = this.imagen;
        img.id = this.nombre;
        img.onclick = this.Contar;
        var txt = document.getElementById("lugar").createElement("p");
        txt.innerHTML = "CLicks";
        txt.id = 'tuxt';
        var cont = document.getElementById("tuxt").createElement("span");
        var span = document.getElementsByTagName("span");
        span.id = this.identificador;
        span.innerHTML = 0;
        var contador = document.getElementById(this.identificador);
    }
    Contar(){
        this.contador++
        document.getElementById(this.identificador) = contador;
        
    }
}
window.onload = function() {
    var gatituuu = new ImagenClick("que-prefieres-gato-o-perro-240755.jpg","misifu","gato1");
    gatituuu.ImagenContador();
}

//    <img id="gato1" onclick="clickImg()" src="que-prefieres-gato-o-perro-240755.jpg"/>
//    <p>Clicks <span id="clicks">0</span></p>
//    <img id ="gato 2" onclick="clickImg()" src="343708521cd2b12898adfbfb0c4fcbe2b5355efc_hq.jpg"/>
//    <p>Clicks <span id="click">0</span></p>
//    <img id ="gato 3" onclick="clickImg()" src="hqdefault.jpg"/>
//    <p>Clicks <span id="click">0</span></p>
//    <img id ="gato 4" onclick="clickImg()" src="37d04beba0abebc0212070df35c511e9.jpeg"/>
//    <p>Clicks <span id="click">0</span></p>
//    <img id ="gato 5" onclick="clickImg()" src="wW_JJKSA_400x400.png"/>
//    <p>Clicks <span id="click">0</span></p>
//
