
var button = document.querySelector(".buttons");
var btn = document.querySelectorAll("span");
var value = document.getElementById("value");
var darkLight = document.querySelector(".darkLight");
var body = document.querySelector("body");

for(let i=0; i<btn.length;i++) {
    btn[i].addEventListener("click" , function(){

        if(this.innerHTML=="="){

            value.innerHTML = eval(value.innerHTML);

        }
        else{
            if (this.innerHTML == "Clear") {
                value.innerHTML = "" ;
            }else{

                value.innerHTML += this.innerHTML ; 

            }
        }
        
    })
    
}

darkLight.onclick = function(){

    body.classList.toggle("dark");
    
}