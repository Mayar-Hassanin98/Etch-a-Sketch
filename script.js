
let container = document.getElementById("container");
let clear = document.getElementById("clear");
let random = document.getElementById("random");
let color = document.getElementById("color");
let size = document.getElementById("size");
let erase=document.getElementById("erase");

color.addEventListener('click', blackClick);
random.addEventListener('click', randomClick);
clear.addEventListener('click', clearClick);
size.addEventListener('click', changeClick);
erase.addEventListener('click',eraseClick);



createGridBoxes(16);

let flag=0;//whether in blackmode or erasemode.
function blackClick(){
    random = false;
    flag=1
  }
  function randomClick(){
    random =true;
  }
  
  function clearClick(){
    clearGrid();
    createGridBoxes(16);

  }
  
  function changeClick(){
    clearGrid();
    size = prompt("Enter size you want (one number only):", "e.g. 25");
    createGridBoxes(size);
    
    
  }
  function eraseClick(){
    random = false;
    flag=0
  }

function createGridBoxes(box){
    for (i = 0; i < box * box; i++){
        let square = document.createElement("div");
        square.style.width = 500/box +"px";
        square.style.height = 500/box + "px";
        square.style.display = "inline-block";
        square.style.outline = "1px solid rgba(0, 0, 0, .2)";
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
    
}

function changeColor(){
    if(random){
      color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
      this.style.backgroundColor =color;
    }
    else  { if(flag)
            this.style.backgroundColor ='black';
        else  this.style.backgroundColor ='white';
    }
  }
  
  function clearGrid(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
  }
  
  