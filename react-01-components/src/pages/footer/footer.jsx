import "./footer.css"

const desestructuracion = () =>{
    let a = 10;
    let b = 20;
    //pasar el valor de  a -> b y el valor de b -> 
    let temporal = a;
    a = b;
    b = temporal;


    [b,a] = [a,b];

    const gryffindor = ["Harry", "Ron", "Neville", "Hermione" , "Ginny"];
    /* let protagonista;
    let amigo;
    let amiga; */
const [protagonista, amigo, , amiga] = gryffindor;
   /*  protagonista = gryffindor[0];
    amigo = gryffindor[1];
    amiga = gryffindor[3]; */

    //desestructuración en objetos
    const hatSelector = {
        nombre: "Jen",
        color: "canela pasión",
        edad: 26,
        origen: "Hogwarts",
        isMagic: true,
         casas:{
            slytherin : "🐍Astutos y ambiciosos",
            hufflepuff: "🦡 Leales y trabajadores",
            revenclaw: "🦅Listos y curiosos",
            gryffindor: " 🦁 valientes y atrevidos"
        }
    }

    const {edad, nombre, origen:location} = hatSelector;

    console.log(nombre, edad, location);

    //obtener el valor de slytherin hy asignarla a la variable myHouse
    const {casas:{slytherin:myHouse} } = hatSelector;
    console.log(myHouse);

};
desestructuracion();

const semana8Style = {
    fontSize:"2rem", color:"yellow"     
};

const semana8PartyStyle = {
    fontSize:"2rem", color:"red"     
};
const Footer = ({cohorte:ch}) =>{

    return (
        <footer>
            <p style={{fontSize:"2rem", color:"yellow" }}> Cohorte {ch} - 2025</p>
            <p style={ch === 54? semana8Style : semana8PartyStyle }> Semana 8</p>
            <em className="textFooter"
            >Es leviosa no leviosá</em>
        </footer>
    );
}

export {Footer};