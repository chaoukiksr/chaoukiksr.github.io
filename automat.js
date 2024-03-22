// appler la faunction automate a chaque click d'une touche de clavier
let input = document.getElementById("input");
let reponse = document.getElementById("reponse");
let body = document.body;


input.addEventListener('keyup',()=>{
   // recuperer la valeur de mot saisie 
   let mot = input.value + ' ';
   // sauvgarder le mot dans un tableau d'indice [0;la taille de mot+1]
   let tableau = mot.split('');
   let i = 0; //indice de premier caractere dans le tableau


   // function de depart
   // function verifier(tableau) {
   //    if (tableau[0] == 'c') {
   //       return Q1(tableau, i + 1)
   //    }
   //    if (tableau[0] == 'b') {
   //       return Q2(tableau, i + 1)
   //    }
   //    return 0
   // }

   // version 2.0
   
   // etat Q1
   // function Q1(tableau, i) {
   //    if (tableau[i] == 'c') {
   //       return Q1(tableau, i + 1);
   //    }
   //    if (tableau[i] == 'b') {
   //       return Q3(tableau, i + 1);
   //    }
   //    return 0;
   // }

   // v 2.0
   Q1 = (tableau, i) =>{
      return (tableau[i] == 'c') ? Q1(tableau, i + 1) : (tableau[i] == 'b') ? Q3(tableau, i + 1) : 0;
   }
   // etat Q2
   // function Q2(tableau, i) {
   //    if (tableau[i] == 'c') {
   //       return Q2(tableau, i + 1);
   //    }
   //    if (tableau[i] == 'b') {
   //       return Q4(tableau, i + 1);
   //    }
   //    return 0;
   // }

   Q2 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q2(tableau, i + 1) : (tableau[i] == 'b') ? Q4(tableau, i + 1) : 0;
   }
   // etat Q3
   // function Q3(tableau, i) {
   //    if (tableau[i] == 'c') {
   //       return Q3(tableau, i + 1);
   //    }
   //    if (tableau[i] == 'b') {
   //       return Q5(tableau, i + 1);
   //    }
   //    return 0;
   // }
   Q3 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q3(tableau, i + 1) : (tableau[i] == 'b') ? Q5(tableau, i + 1) : 0;
   }
   // etat Q4 (etat final)
   // function Q4(tableau, i) {
   //    if (tableau[i] == 'c') {
   //       return Q4(tableau, i + 1);
   //    }
   //    if (tableau[i] == 'b') {
   //       return Q1(tableau, i + 1);
   //    }
   //    //    s'il s'agit de dernier caractere de mot
   //    if (tableau[i] == ' ') {
   //       return 1;
   //    }
   //    return 0
   // }
   Q4 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q4(tableau, i + 1) : (tableau[i] == 'b') ? Q1(tableau, i + 1) : (tableau[i] == ' ') ? 1 : 0;
   }
   // etat Q5 (etat final)
   // function Q5(tableau, i) {
   //    if (tableau[i] == 'c') {
   //       return Q5(tableau, i + 1);
   //    }
   //    if (tableau[i] == 'b') {
   //       return Q1(tableau, i + 1);
   //    }
   //    //    s'il s'agit de dernier caractere de mot
   //    if (tableau[i] == ' ') {
   //       return 1;
   //    }
   //    return 0
   // }
   Q5 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q5(tableau, i + 1) : (tableau[i] == 'b') ? Q1(tableau, i + 1) : (tableau[i] == ' ') ? 1 : 0;
   }
   verifier = (tableau) => {
      return (tableau[0] == 'c') ? Q1(tableau, i + 1) :
         (tableau[0] == 'b') ? Q2(tableau, i + 1) : 0;
   }

   // Verifier l'appartenance de mot
   if (verifier(tableau)) {
      // style a appliquer lorsque le mot appaartien
      reponse.innerHTML = `le mot ${mot} appartien`
      input.classList = "appartient-input"
      body.style.backgroundColor = "lightseagreen"

   } else {
      // style a appliquer lorsque le mot n'appaartien pas
      reponse.innerHTML = `le mot ${mot} n'appartien pas`
      input.classList = "appartientpas-input"
      body.style.backgroundColor = "tomato"
   }
}

)
