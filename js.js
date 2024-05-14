function responderDuda(user, report) {
    const pregunta = report.toLowerCase(); // Convertir la pregunta a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas

    // Verificar si la pregunta coincide con alguna consulta predefinida
    if (pregunta.includes("discord")) {
        const respuesta = "Bot: Este es nuestro discord https://discord.gg/x5apSbuGZN";
        const dudaIndex = dudas.findIndex(duda => duda.user === user && duda.report === report);
        if (dudaIndex !== -1) {
            dudas[dudaIndex].respuesta = respuesta;
            localStorage.setItem('dudas', JSON.stringify(dudas));
            displayDudas();
        }
    } else {
        // Si la pregunta no coincide con ninguna consulta predefinida, solicitar una respuesta manual
        const respuesta = prompt("Ingresa tu respuesta:");
        if (respuesta !== null && respuesta.trim() !== "") {
            const dudaIndex = dudas.findIndex(duda => duda.user === user && duda.report === report);
            if (dudaIndex !== -1) {
                dudas[dudaIndex].respuesta = respuesta;
                localStorage.setItem('dudas', JSON.stringify(dudas));
                displayDudas();
            }
        }
    }
}
