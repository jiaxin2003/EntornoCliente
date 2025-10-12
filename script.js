//Ejemplos de arrays
let nombres=[OscillatorNode, Juan];
console.log(nombres[0]);
console.log(nombres[1]);

let [nombre1,nombre2]=[Jiaxin, Juan];
console.log(nombre1);
console.log(nombre2);

//Con typeof se puede saber el tipo de dato
console.log(typeof "nombre1");
console.log(typeof 2302);

/*Ejemplos de objetos*/
let persona={
    nombre:"Jiaxin",
    apellido:"Juan",
    edad:22
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

//Objeto dentro de otro objeto
let persona2={
    nombreCompleto:{nombre:"Jiaxin", apellido:"Juan"},
    edad:22
}
console.log(persona);
console.log(persona.nombreCompleto);
console.log(persona.edad);


//El $ en JS para que en html se pueda llamar a la variable
let nombre$="Jiaxin";

/*declarado aqui se llama asi en html
script>document.write(nombre$);</script>*/


