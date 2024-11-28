function pabaselbondiga() {
    let container = document.createElement('div');
    container.className = "bolitas-container"; 

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.className = "bolitas";
        container.appendChild(div);
    }

    return container;
}

export {pabaselbondiga};
