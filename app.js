function cambiarFondo() {
    document.body.style.backgroundColor = getRandomColor();
    var texto = prompt("Ingrese un texto:");
    if (texto.trim() !== '') { // Validación para evitar cadenas vacías
        document.getElementById('textoMostrado').innerText = texto;
        
        // Cambiar tipo de letra según el texto ingresado
        var letras = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia'];
        var letraSeleccionada = letras[Math.floor(Math.random() * letras.length)];
        document.getElementById('textoMostrado').style.fontFamily = letraSeleccionada;
    }
}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function cambiarForma() {
    var formas = ['rectangular', 'redonda', 'ovalada', 'triangular', 'hexagonal', 'cuadrada', 'pentagonal'];
    var formaSeleccionada = formas[Math.floor(Math.random() * formas.length)];
    
    document.getElementById('container').style.borderRadius = formaSeleccionada === 'hexagonal' ? '0' : '50%';
}

document.getElementById('cambiarFondo').addEventListener('click', cambiarFondo);
document.getElementById('cambiarForma').addEventListener('click', cambiarForma);
