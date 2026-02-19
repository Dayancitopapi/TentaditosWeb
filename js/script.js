// 1. Buscamos los elementos por su ID
const pisos = document.getElementById('pisos');
const tipo = document.getElementById('tipo');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const tamaño = document.getElementById('tamaño')
const tamaño2 = document.getElementById('tamaño2')
const tamaño3 = document.getElementById('tamaño3')
const errornumber = document.getElementById('error-number');
const telefono = "34655656365"; 
const color = document.getElementById('color');
const precio = document.getElementById('precio');

document.addEventListener('DOMContentLoaded', () => {
    contarPisos();
});

// 2. Escuchamos el evento 'change' (cambio de selección)
pisos.addEventListener('change', function() {
    contarPisos();
    calcularPrecio();
});

function contarPisos() {
    if (pisos.value >= '2') {
        t2.style.display = 'block';
        tamaño2.value = 12;
    } else {
        t2.style.display = 'none';  // Ocultar si vuelve a 'basico'
        tamaño2.value = ""
    }

    if (pisos.value === '3') {
        t3.style.display = 'block'; // Mostrar
        tamaño3.value = 12;
    } else {
        t3.style.display = 'none';  // Ocultar si vuelve a 'basico'
        tamaño3.value = ""
    }
};


tamaño.addEventListener('change', function() {
    calcularPrecio();
});

tamaño2.addEventListener('change', function() {
    calcularPrecio();
});

tamaño3.addEventListener('change', function() {
    calcularPrecio();
});

function calcularPrecio() {
    // 3. Si el valor seleccionado es 'premium' (la segunda opción)
    

    let a = Number(tamaño.value) + Number(tamaño2.value) + Number(tamaño3.value)
    let p = 0
    let descuento = 500
    if (a === 12) {
        p = 500;
    } else if (a === 17) {
        p = 1500;
    } else if (a === 22) {
        p = 2500;
    } else if (a === 24) {
        p = 1000;
    } else if (a === 29) {
        p = 2000;
    } else if (a === 34) {
        p = 3000;
    } else if (a === 36) {
        p = 1500;
    } else if (a === 39) {
        p = 4000;
    } else if (a === 41) {
        p = 2500;
    } else if (a === 44) {
        p = 5000;
    } else if (a === 46) {
        p = 3500;
    } else if (a === 51) {
        p = 4500;
    } else if (a === 56) {
        p = 5500;
    } else if (a === 61) {
        p = 6500;
    } else if (a === 66) {
        p = 7500;
    }

    if (p >= 4000) {
        p = p - descuento;
    }

    precio.innerText = p + "$";
}

tipo.addEventListener('change', function() {

    if (tipo.value === 'nata') {
        blanco.style.display = 'block';
        chocolate.style.display = 'block';
        rojo.style.display = 'block';
        rosa.style.display = 'block';
        morado.style.display = 'block';
        azul.style.display = 'block';
        verde.style.display = 'block';
        amarillo.style.display = 'block';
        naranja.style.display = 'block';
        gris.style.display = 'block';
        color.value = "blanco";
    } else if (tipo.value === 'mousse') {
        blanco.style.display = 'none';
        chocolate.style.display = 'block';
        rojo.style.display = 'block';
        rosa.style.display = 'block';
        morado.style.display = 'block';
        azul.style.display = 'block';
        verde.style.display = 'block';
        amarillo.style.display = 'block';
        naranja.style.display = 'block';
        gris.style.display = 'block';
        color.value = "chocolate";
    } else if (tipo.value === 'chocolate') {
        blanco.style.display = 'none';
        chocolate.style.display = 'block';
        rojo.style.display = 'none';
        rosa.style.display = 'none';
        morado.style.display = 'none';
        azul.style.display = 'none';
        verde.style.display = 'none';
        amarillo.style.display = 'none';
        naranja.style.display = 'none';
        gris.style.display = 'none';
        color.value = "chocolate";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obtener la fecha actual del sistema
    const fecha = new Date();
    
    // 2. SUMAR UN DÍA: Usamos el método setDate
    // getDate() obtiene el día del mes (1-31) y le sumamos 1
    fecha.setDate(fecha.getDate() + 1);
    
    // 3. Formatear la fecha a YYYY-MM-DD
    // Usamos 'sv-SE' como ya hacías, que es un truco excelente para el formato ISO
    const mañana = fecha.toLocaleDateString('sv-SE');
    
    // 4. Referenciar el input del formulario
    const inputFecha = document.getElementById('fecha');
    
    // 5. Aplicar la restricción: el mínimo será "mañana"
    inputFecha.min = mañana;
    
    // 6. Establecer 'mañana' como valor predeterminado
    inputFecha.value = mañana;
});

// Esperamos a que el usuario haga clic en el botón
document.getElementById('botonEnviar').addEventListener('click', function() {
    contarPisos();
    // 2. Obtenemos lo que el usuario escribió en la única pregunta 
    const pisos = document.getElementById('pisos').value;
    const tamaño = document.getElementById('tamaño').value;
    let tamaño2 = document.getElementById('tamaño2').value;
    let tamaño3 = document.getElementById('tamaño3').value;
    const relleno = document.getElementById('relleno').value;
    const tipo = document.getElementById('tipo').value;
    const sabor = document.getElementById('sabor').value;
    const color = document.getElementById('color').value;
    let mensaje = document.getElementById('mensaje').value;
    const nc = document.getElementById('nc').value;
    const fecha = document.getElementById('fecha').value;
    
       
    // 3. Validación: Si el campo está vacío, avisamos y no enviamos nada
    if (nc.trim() === ""){
        errornumber.style.color = "rgb(255, 0, 0)";
        return;
    }
    else{
        errornumber.style.color = "rgba(0, 0, 0, 0)";
    }

    if (mensaje.trim() === ""){
        mensaje = "Ninguno";
    }

    // 4. Formateamos el mensaje para que WhatsApp lo entienda correctamente
    // 'encodeURIComponent' sirve para que los espacios y acentos no rompan el enlace
    const mensajeFinal = encodeURIComponent(
        "Tarta personalizada" + "\n" + "\n" +
        "Pisos: " + pisos + "\n" + 
        "Tamaño(cm): " + tamaño + "-" + tamaño2 + "-" + tamaño3 + "\n" + 
        "Sabor del biscocho: " + sabor + "\n" + 
        "Sabor del relleno: " + relleno + "\n" + 
        "Tipo de cobertura: " + tipo + "\n" + 
        "color de la cobertura: " + color + "\n" + 
        "Mensaje personalizado: " + mensaje + "\n" +
        "Número de contacto: " + nc + "\n" +
        "Fecha de envío: " + fecha
    );

    // 5. Construimos la URL de la API de WhatsApp
    const urlWhatsApp = "https://wa.me/" + telefono + "?text=" + mensajeFinal;

    // 6. Abrimos la ventana de WhatsApp (App o Web)
    window.open(urlWhatsApp, '_blank');
});