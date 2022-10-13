const container = document.querySelector("#container");
const div = document.createElement("div");

function createDivs (num){
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add('div');
        

      }
}

