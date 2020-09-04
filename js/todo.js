

//-- ouvrir le mopdal-- 
document.getElementById("open").addEventListener('click' , function() {
    document.querySelector('.dialog').style.display = 'flex';
});
document.querySelector(".style_input").addEventListener('focus' , function() {
    document.querySelector('.dialog').style.display = 'flex'; 
})


//--fermer le modal--
document.querySelector('.close').addEventListener('click' , function() {
    document.querySelector('.dialog').style.display = 'none';
    document.querySelector('.erreur').innerHTML = " ";
});


//--suppresion des elements cliquer
document.querySelector('img').addEventListener('.button' , function() {
    div1.remove();
},false);





// class manipulable



//--button submit du modal--
document.querySelector('.button').addEventListener('click' , function() {

    
    const val = document.getElementById("valeur").value;

    if(!val){
        document.querySelector('.erreur').style.color= 'red';
        document.querySelector('.erreur').innerHTML = eror;
    }
    else{

        // if(localStorage.length<=0){

        // }
    
        document.querySelector('.dialog').style.display = 'none';
        document.querySelector('.erreur').innerHTML = " ";





        class item{

            constructor(item_name){
                this.creatediv(item_name);
            }
            creatediv(item_name){
                let inpute = document.createElement('input');
                inpute.value = item_name;
                inpute.disable = true;
                inpute.classList.add('item_input');
                inpute.type = "text";
        
                let inbox = document.createElement('div');
                inbox.classList.add('item');
        
                let editbtn = document.createElement('button');
                editbtn.classList.add('edit_btn');
                let check = document.createElement('input');
                check.type = 'checkbox';
                check.style.height = '15px';
                editbtn.appendChild(check);
        
        
        
                let removbtn = document.createElement('button');
                let image1 = document.createElement('img');
                removbtn.classList.add('remove_btn');
                image1.src= 'img/remove.ico';
                removbtn.appendChild(image1);
                
        
              
                
        
                inbox.appendChild(inpute);
        
                inbox.appendChild(editbtn);
                inbox.appendChild(removbtn);
                document.querySelector('.input_div').parentNode.appendChild(inbox);
        
                editbtn.addEventListener('click' , function edit(input) {
                    input.disabled = !input.disabled
                },false);
        
                removbtn.addEventListener('click' , function (){
                    document.querySelector('.input_div').parentNode.removeChild(inbox);
                },false);
                
                  
                
        
                
                
        
        
            }
        
        }
        new item(val);
        
    }

});



