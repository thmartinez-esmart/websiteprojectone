function habilitarBoton() {
    document.getElementById('btnTest').disabled = !document.getElementById('gridCheck').checked;
}

// Accede correctamente a jsPDF desde window.jspdf
function capturarDatos() {
    var datos = [];
    datos.push("Correo: " + document.getElementById("inputEmail4").value);
    datos.push("Contraseña: " + document.getElementById("inputPassword4").value);
    datos.push("Nombres: " + document.getElementById("inputAddress").value);
    datos.push("Apellidos: " + document.getElementById("inputAddress2").value);
    datos.push("Ciudad de Residencia: " + document.getElementById("inputCity").value);
    datos.push("Género: " + document.getElementById("inputState").value);
    datos.push("Edad: " + document.getElementById("inputZip").value);
    return datos;
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    var datos = capturarDatos();
    var pdf = new jsPDF();

    // Título centrado
    pdf.setFontSize(18);
    pdf.text("Datos del formulario JobPath", pdf.internal.pageSize.getWidth() / 2, 20, { align: "center" });

    // Mensaje final centrado
    pdf.setFontSize(11);
    pdf.setTextColor(100);
    pdf.text(
        "Al momento de aceptar los términos, aceptas que tus datos se utilicen únicamente para fines académicos, garantizando que la información proporcionada será tratada de manera confidencial, no será compartida con terceros y se empleará exclusivamente con el propósito de análisis, investigación y mejora de los procesos educativos.",
        pdf.internal.pageSize.getWidth() / 2,
        startY + datos.length * 10 + 20,
        { align: "center" }
    );

    pdf.save("documento.pdf");
}