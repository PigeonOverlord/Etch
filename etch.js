const container = document.querySelector("#container");
const div = document.createElement("div");
const slideValue = document.querySelector("#slideValue")
const slider = document.querySelector("#slider")
var numpo = 0;

slider.oninput = function() {
    slideValue.innerHTML = this.value + " x " + this.value;
    console.log(this.value);
    return this.value;
  } 


function createDivs (num){
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // sets grid column width
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`; // sets gride rows length
        num = num * num; // sets grid size
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add('gridBlock');
        

      }
}
