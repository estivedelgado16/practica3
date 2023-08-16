let d_nac  = parseInt(prompt ("ingrese el día de nacimiento"))
let m_nac = parseInt(prompt ("ingrese el mes de nacimiento"))
let a_nac = parseInt(prompt ("ingrese el año de naciiento"))
let d_act = parseInt(prompt("ingrese el día actual"))
let m_act = parseInt(prompt("ingrese el mes actual"))
let a_act = parseInt(prompt("ingrese el año actual"))

let edad = a_act - a_nac;

if (m_nac < m_act || (m_nac === m_act && d_nac < d_act)) {
    console.log("Tu edad es", edad, "años");
} else {
    console.log("Tu edad es", edad - 1, "años");
}



