var dictionario= new Map();

dictionario.set("e", "enter");
dictionario.set("i","imes");
dictionario.set("a","ai");
dictionario.set("o","ober");
dictionario.set("u","ufat");




function change(){
    var newtext="";

    if(document.getElementById('textfor').value.length<=0){
        alert("Escribe Algo");
    }else{
        document.getElementById("desencriptext").style.backgroundColor="#ffffff"
        veriText(newtext);
        
    }

}
function veriText(newtext){
    var text=new String(document.getElementById('textfor').value);
    
    
    for(i=0;i<text.length;i++){
        if(dictionario.has(text.charAt(i))){        
          newtext+=dictionario.get(text.charAt(i));
          
        }else{
            newtext+=text.charAt(i);
            
        }
         
    }

    document.getElementById('desencriptext').innerHTML=newtext;
}

function verifica(text){
    var con=0;
   for(i=0;i<text.length;i++){
        if(text.charCodeAt(i)>=97 || text.charCodeAt(i)<=122){
           cont=0;
        }else{
              con+=1; 
        }
   }
   return con;
}

