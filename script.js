function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "" || clave == "") {
        alert("¡Poné el usuario y la clave primero!");
    } else {
        window.location.href = "planificacion.html";
    }
}

function limpiarLogin() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

function afiliarUsuario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    
    if (nombre == "" || apellido == "") {
        alert("Faltan datos para afiliar");
    } else {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("email").value = "";
        
        document.getElementById("resultado-afiliacion").textContent = "USUARIO AFILIADO: " + nombre.toUpperCase();
    }
}

function cotizarViaje() {
    var destino = document.getElementById("destino").value;
    var tipoViaje = document.getElementById("tipo-viaje").value;
    var dias = parseInt(document.getElementById("dias").value);
    var presupuestoDiario = parseInt(document.getElementById("presupuesto-diario").value);

    if (isNaN(dias) || isNaN(presupuestoDiario)) {
        alert("¡Completa los días y el presupuesto con números!");
        return;
    }

    var gastoTotal = presupuestoDiario * dias;
    var recomendacionLugar = "";
    
    if (tipoViaje == "Fiesta") { recomendacionLugar = "Ibiza o Miami"; }
    if (tipoViaje == "Relax") { recomendacionLugar = "Maldivas"; }
    if (tipoViaje == "Playa") { recomendacionLugar = "Cancún"; }
    if (tipoViaje == "Cultural") { recomendacionLugar = "Roma"; }
    if (tipoViaje == "Aventura") { recomendacionLugar = "Patagonia"; }

    localStorage.setItem("dest", destino);
    localStorage.setItem("tipo", tipoViaje);
    localStorage.setItem("cantDias", dias);
    localStorage.setItem("total", gastoTotal);
    localStorage.setItem("recom", recomendacionLugar);

    window.location.href = "resultado.html";
}

function volverAtras() {
    window.location.href = "planificacion.html";
}