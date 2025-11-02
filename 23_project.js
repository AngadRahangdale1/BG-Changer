const buttons= document.querySelectorAll('.button')
const body = document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==="yellowbtn"){
            body.style.backgroundColor="yellow";
        }
         if(e.target.id==="bluebtn"){
            body.style.backgroundColor="blue";
        }
         if(e.target.id==="pinkbtn"){
            body.style.backgroundColor="pink";
        }
         if(e.target.id==="greybtn"){
            body.style.backgroundColor="grey";
        }
    });
});