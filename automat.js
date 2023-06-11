// appler la faunction automate a chaque click d'une touche de clavier
document.getElementById("input").onkeyup = function automat(){
// recuperer la valeur de mot saisie 
let mot = document.getElementById("input").value + ' ';
// sauvgarder le mot dans un tableau d'indice [0;la taille de mot+1]
let tableau = mot.split('');
let i=0; //indice de premier caractere dans le tableau


// function de depart
function verifier(tableau){
    if(tableau[0]=='c'){
        return Q1(tableau,i+1)
    }
    if(tableau[0]=='b'){
        return Q2(tableau,i+1)
    }
    return 0
}


// Verifier l'appartenance de mot
if(verifier(tableau)){
   // style a appliquer lorsque le mot appaartien
    document.getElementById("reponse").innerHTML = `le mot ${mot} appartien`
    document.getElementById("input").classList = "appartient-input"
    document.getElementById("body").style.backgroundColor = "lightseagreen"

}else{
   // style a appliquer lorsque le mot n'appaartien pas
    document.getElementById("reponse").innerHTML = `le mot ${mot} n'appartien pas`
    document.getElementById("input").classList = "appartientpas-input"
    document.getElementById("body").style.backgroundColor = "tomato"
}
// etat Q1
function Q1(tableau,i){
   if(tableau[i]=='c'){
    return Q1(tableau,i+1);
   }
   if(tableau[i]=='b'){
    return Q3(tableau,i+1);
   }
   return 0;
}
// etat Q2
function Q2(tableau,i){
   if(tableau[i]=='c'){
    return Q2(tableau,i+1);
   }
   if(tableau[i]=='b'){
    return Q4(tableau,i+1);
   }
   return 0;
}
// etat Q3
function Q3(tableau,i){
   if(tableau[i]=='c'){
    return Q3(tableau,i+1);
   }
   if(tableau[i]=='b'){
    return Q5(tableau,i+1);
   }
   return 0;
} 
// etat Q4 (etat final)
function Q4(tableau,i){
   if(tableau[i]=='c'){
    return Q4(tableau,i+1);
   }
   if(tableau[i]=='b'){
    return Q1(tableau,i+1);
   }
//    s'il s'agit de dernier caractere de mot
   if(tableau[i]==' '){
       return 1;
    }
        return 0
}
// etat Q5 (etat final)
function Q5(tableau,i){
   if(tableau[i]=='c'){
    return Q5(tableau,i+1);
   }
   if(tableau[i]=='b'){
    return Q1(tableau,i+1);
   }
//    s'il s'agit de dernier caractere de mot
   if(tableau[i]==' '){
    return 1;
   }
   return 0
}
}