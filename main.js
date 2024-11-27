import { panArriba } from "./hamburguesa/pan1.js";
import { parqueso } from "./hamburguesa/queso.js";
import { patomate } from "./hamburguesa/tomato.js";
import { pabaselbondiga } from "./albondiga .js";
import { agregarBolitas } from "./albondiga .js";
import { pacebolla } from "./hamburguesa/cebolla.js";
import { pacarne } from "./hamburguesa/carne.js";
import { palechuga } from "./hamburguesa/lechuga.js";
import { pabase } from "./base.js";

let root = document.querySelector("#root");

root.appendChild(panArriba());
root.appendChild(parqueso());
root.appendChild(patomate());

root.appendChild(parqueso());
root.appendChild(parqueso());
root.appendChild(parqueso());

root.appendChild(pacebolla());
root.appendChild(pabaselbondiga());
root.appendChild(pabaselbondiga());
root.appendChild(pabaselbondiga());

root.appendChild(palechuga());
root.appendChild(pacarne());
root.appendChild(pacarne());
root.appendChild(panArriba());
root.appendChild(pabase());
