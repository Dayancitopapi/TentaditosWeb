// Esperamos a que el usuario haga clic en el botón
document.getElementById('botonEnviar').addEventListener('click', function() {
    
    // 1. Configuramos tu número de WhatsApp (sin el +)
    const telefono = "34655656365"; 

    // 2. Obtenemos lo que el usuario escribió en la única pregunta 
    const body = document.body.id;
    const tarta = body
    const sabor = document.getElementById('sabor').value;
    const color = document.getElementById('color').value;
    const nc = document.getElementById('nc').value;
    const fecha = document.getElementById('fecha').value;
    const errornumber = document.getElementById('error-number');

    // 3. Validación: Si el campo está vacío, avisamos y no enviamos nada
    if (nc.trim() === ""){
        errornumber.style.color = "rgb(255, 0, 0)";
    }
    else{
        errornumber.style.color = "rgba(0, 0, 0, 0)";
    }

    if (nc.trim() === ""){
        return;
    }   

    // 4. Formateamos el mensaje para que WhatsApp lo entienda correctamente
    // 'encodeURIComponent' sirve para que los espacios y acentos no rompan el enlace
    const mensajeFinal = encodeURIComponent(
        tarta + "\n" + "\n" + 
        "Sabor del biscocho: " + sabor + "\n" + 
        "Color: " + color + "\n" + 
        "Número de contacto: " + nc + "\n" +
        "Fecha de recogida: " + fecha
    );

    // 5. Construimos la URL de la API de WhatsApp
    const urlWhatsApp = "https://wa.me/" + telefono + "?text=" + mensajeFinal;

    // 6. Abrimos la ventana de WhatsApp (App o Web)
    window.open(urlWhatsApp, '_blank');
});

// Esperamos a que el contenido del DOM esté cargado
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