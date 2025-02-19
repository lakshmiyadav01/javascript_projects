const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')


buttons.forEach( function(button){
    button.addEventListener('click', function(e){
     if(e.target.id ==='blue'){
        body.style.backgroundColor = e.target.id;
     }
     else if (e.target.id ==='green'){
        body.style.backgroundColor = e.target.id;
     }
    else if(e.target.id ==='grey'){
        body.style.backgroundColor = e.target.id;
     }
     else if(e.target.id ==='orange'){
        body.style.backgroundColor = e.target.id;
     }
     else if(e.target.id ==='yellow'){
        body.style.backgroundColor = e.target.id;
     }
     else if(e.target.id ==='brown'){
        body.style.backgroundColor = e.target.id;
     }
     
    })
})


