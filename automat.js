// Ce programme verifier l'appartenance des mot 
// fournis par l'utilisateur à un langage definie par :c(b|c)*
// il s'agit d'un automate à état finis detirminist
let input = document.getElementById("input");
let reponse = document.getElementById("reponse");
let body = document.body;


input.addEventListener('keyup',()=>{
   // recuperer la valeur de mot saisie 
   let mot = input.value + ' ';
   // sauvgarder le mot dans un tableau d'indice [0;la taille de mot+1]
   let tableau = mot.split('');
   let i = 0; //indice de premier caractere dans le tableau

   // etat Q1

   const Q1 = (tableau, i) =>{
      return (tableau[i] == 'c') ? Q1(tableau, i + 1) : (tableau[i] == 'b') ? Q3(tableau, i + 1) : 0;
   }
   // etat Q2

   const Q2 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q2(tableau, i + 1) : (tableau[i] == 'b') ? Q4(tableau, i + 1) : 0;
   }
   // etat Q3

   const Q3 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q3(tableau, i + 1) : (tableau[i] == 'b') ? Q5(tableau, i + 1) : 0;
   }
   // etat Q4 (etat final)

   const Q4 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q4(tableau, i + 1) : (tableau[i] == 'b') ? Q1(tableau, i + 1) : (tableau[i] == ' ') ? 1 : 0;
   }
   // etat Q5 (etat final)
   
   const Q5 = (tableau, i) => {
      return (tableau[i] == 'c') ? Q5(tableau, i + 1) : (tableau[i] == 'b') ? Q1(tableau, i + 1) : (tableau[i] == ' ') ? 1 : 0;
   }
   const verifier = (tableau) => {
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
