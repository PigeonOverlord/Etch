const container = document.querySelector("#container");
const div = document.createElement("div");

function createDivs (num){
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add('div')

      }
}

