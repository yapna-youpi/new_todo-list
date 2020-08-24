   const erreur = 'veuillez assigner une tache!';
   var  input = document.getElementById('valeur'),
        eror = 'veuillez remplir le champ!';

//--creation des elements html--
const div1 = document.createElement('div'),
      div2 = document.createElement('div'),
      champ = document.createElement('input'),
      btn1 = document.createElement('button'),
      btn2 = document.createElement('button');
      mot1 = document.createElement('span');
      image1 = document.createElement('img');

//--attribution des styles--
div1.class = 'modal_content';
div2.class = 'item';
champ.type = 'text';
champ.className = 'item_input';
champ.placeholder= 'a faire...';
champ.getCom
btn1.innerHTML = 'faire';
btn1.className = 'edit_btn';
btn1.className = 'btn';
btn2.className = 'remove_btn';
btn2.className = 'btn';
mot1.class = 'style2';
image1.src= 'img/remove.ico';        
champ.innerText='moi je suis beau';

//--action d'inserer les elements dans le DOM--
   btn1.appendChild(mot1);
   btn2.appendChild(image1);
   div2.appendChild(champ);
   div2.appendChild(btn1);
   div2.appendChild(btn2);
   div1.appendChild(div2);

  
  
   
   
   
   


      
      



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
});

//--button submit du modal--
document.querySelector('.button').addEventListener('click' , function() {

    
    const val = document.getElementById("valeur").value;

    if(!val){
        document.querySelector('.erreur').style.color= 'red';
        document.querySelector('.erreur').innerHTML = eror;
    }else{
        document.querySelector('.dialog').style.display = 'none';
        document.querySelector('li').appendChild(div1);
        }
      
    
    

})

