
var web = 1;
var inicio = 2;
var techo = 3;

const cambio = (numero) => {
    switch (numero){
        case 1:
            document.getElementById('inicio').style.display="block";
            document.getElementById('web').style.display="none";
            document.getElementById('techn').style.display="none";
            generarPrincipal();
            break;
        case 2:
            document.getElementById('inicio').style.display="none";
            document.getElementById('web').style.display="block";
            document.getElementById('techn').style.display="none";
            document.getElementById('imagen').style.display="none";
            break;
        case 3:
            document.getElementById('inicio').style.display="none";
            document.getElementById('web').style.display="none";
            document.getElementById('techn').style.display="block";
            generarTecnologias();
            break;
        default:
            break;
    }
}

const generarPrincipal =() =>{
    document.getElementById('inicio').innerHTML =
    `
    <div class="contenido">
            Hi, Im Gerson
        </div>
        <div class="normal">
            A new programmer, web developer<br>
            based in Honduras.
        </div>
        <div class="descripcion">
            About me: <br>
            I like to go running early in the morning <br>
            as it helps keep me fit and energized for the day. <br>
            Swimming is another of my favorite activities, 
            <br>as it relaxes me and allows me to disconnect from everyday stress. <br>
            Also, I love exploring new coffee shops and trying 
            <br>different types of coffee while enjoying a good book 
            <br>or conversation with friends. Lastly, <br>
            music is an important part of my life, and I like to discover
            <br> new artists and styles to enrich my listening experience.<br>
            <button class="contacto">Contact Me!</button>
        </div>
        
        <div class="logos">
             <a href="https://www.instagram.com/gersonl_28/"><i class="fa-brands fa-instagram" ></i></a>
            <a href="https://www.facebook.com/gersonsadic.lorenzogonzalez"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/2001itsmegerson"><i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div></a>
            <img src="./media/IMG_3586.JPG" id="perfil">

    `
}

const generarTecnologias = () => {
    document.getElementById('techn').innerHTML =
    `
    <div class="contenido2"> Technologies that i use:</div>
        <div class="logos2">
            <img src="./media/c.png" height="100px" class="tec">
            <img src="./media/css.png" height="100px" class="tec">
            <img src="./media/html.webp" height="100px" class="tec">
            <img src="./media/js.webp" height="100px" class="tec">
            <img src="./media/mongo.jpeg" height="100px" class="tec">
            <img src="./media/ts.png" height="100px" class="tec">
            <img src="./media/python.png" height="100px" class="tec">
        </div>
    `
}