document.getElementById("filtroEstado").addEventListener("input", function() {
    var filtro = this.value.toUpperCase();
    var options = document.getElementById("estado").options;

    for (var i = 0; i < options.length; i++) {
        var estado = options[i].text.toUpperCase();
        if (estado.indexOf(filtro) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
});
