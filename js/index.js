const erreur = 'veuillez assigner une tache!';
   var  input = document.getElementById('valeur'),
        eror = 'veuillez ajouter une tache!';


    //    //--creation des elements--
    //         const div1 = document.createElement('div'),
    //         div2 = document.createElement('div'),
    //         div3 = document.createElement('div'),
    //         div4 = document.createElement('div'),
    //         general = document.createElement('div');
    //         champ = document.createElement('span'),
    //         check1 = document.createElement('button');
    //         btn2 = document.createElement('button'),
    //         mot1 = document.createElement('span');
    //         image1 = document.createElement('img');
    //         image2 = document.createElement('input');
        
    
           
    //     //--attribution des styles--
    //         div1.className = 'modal_content';
    //         div2.className = 'item';
    //         // div2.style = "{width:550px}";
    //         div3.style = "{margin:0;width:350px;text-align:left;line-height:49px }";
    //         div3.type = 'text';
    //         div3.style = "{word-wrap:wrap; }"
    //         div3.style.color = "white";
    //         btn2.className = 'btn edit_btn';
    //         btn2.style.marginRight = "13px";
    //         check1.className = 'btn edit_btn'
    //         mot1.className = 'style2';
    //         div4.style.float = "right";
    //         div4.style.marginRight = "10px";
            

   
    


            // div3.style.float = "left";
            // img = document.getElementsByName("img");
            // image2.style = "{height:20px}";
            

            // mot1.textContent = "faire";
            // image1.src= 'img/remove.ico';
            // image2.type = 'checkbox';

        
        
        
        // //--action d'inserer les elements dans le DOM--

         
        //    div2.appendChild(div3);
        //    div2.appendChild(div4);
        //    div4.appendChild(check1);
        //    div4.appendChild(btn2);
        //    div1.appendChild(div2);
        //    check1.appendChild(image1);
        //    btn2.appendChild(image2);
        //    document.querySelector('.input_div').parentNode.appendChild(general);


//--integration des script--

var scrpt = document.createElement('script');
scrpt.src = '../JS/todo.js';
var bd = document.getElementsByTagName('body');
bd[0].appendChild(scrpt);
