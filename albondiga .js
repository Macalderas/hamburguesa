function pabaselbondiga() {
    let div = document.createElement('div');
    div.className = "bolitas";
    return div;
}

function agregarBolitas(cantidad) {
    let container = document.querySelector('.bolitas-container');
    for (let i = 0; i < cantidad; i++) {
        container.appendChild(pabaselbondiga());
    }
}

export {pabaselbondiga};
export {agregarBolitas};