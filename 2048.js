function cambio_color(id) {
    console.log(id)
    casilla = document.getElementById(id)
    casilla.style.backgroundColor = 'red'
    casilla.innerHTML = '<p class="letraTablero">A</p>'
    }