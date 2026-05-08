//Daniel Correa Abril 1023083176

// variables
const salario_minimo = 1750905;
const subsidio_transporte = 249095; 
const uvt = 52.37;

// Tarifas de ARL (IBC)
const riesgo_uno_minimo = 0.00522; 
const riesgo_dos_bajo = 0.01044;
const riesgo_tres_medio = 0.02436;
const riesgo_cuatro_alto = 0.04350;
const riesgo_cinco_maximo = 0.06960;

// datos que el usuario ingresa   
let nombreCompleto = "";
let edad = 0;
let tipo_de_documento = "";
let numero_de_documento = "";
let salario = 0;
let comisiones = 0;
let total_horas_extra = 0;
let riesgo_elegido = 0;

    // Validación de perfil
    if (edad < 18) {
        console.log("No es posible continuar: El usuario es menor de edad.");
        alert("No es posible continuar: El usuario es menor de edad.");
        return; 
    }

    if (edad < 25) {
        console.log("Usuario beneficiario por cotizante. No continuará.");
        alert("Usuario beneficiario por cotizante. No continuará.");
        return;
    }

    // Calcular El Total Devengado
    let totalDevengado = salario + comisiones + total_horas_extra;

    // Cálculo del IBC 
    let ibc = totalDevengado * 0.70;

    // Salud y pensión
    let salud = ibc * 0.04;
    let pension = ibc * 0.04;

    // Fondo solidaridad pensional 
    let fondoSolidaridad = (ibc >= (4 * salario_minimo)) ? (ibc * 0.01) : 0;

    // Cálculo de ARL según nivel 
    let pagoARL = 0;
    if (riesgo_elegido == "1") { pagoARL = ibc * riesgo_uno_minimo; }
    if (riesgo_elegido == "2") { pagoARL = ibc * riesgo_dos_bajo; }
    if (riesgo_elegido == "3") { pagoARL = ibc * riesgo_tres_medio; }
    if (riesgo_elegido == "4") { pagoARL = ibc * riesgo_cuatro_alto; }
    if (riesgo_elegido == "5") { pagoARL = ibc * riesgo_cinco_maximo; }

    // Auxilio de transporte (Solo si gana <= 2 salarios mínimos)
    let auxTransporteReal = 0;
    if (salario <= (2 * salario_minimo)) {
        auxTransporteReal = subsidio_transporte;
    }

 