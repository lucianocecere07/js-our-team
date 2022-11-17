/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

//-----------------------------ESERCIZIO--------------------------//
//Milestone 0: creazione array di oggetti
let arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

//Milestone 1: stampare su console
for(let i = 0; i < arrayTeam.length; i++){
    let membro = arrayTeam[i];
    stampaArray(membro);
};

//Milestone 2: Stampare informazioni su HTML
for(let i = 0; i < arrayTeam.length; i++){
    let membro = arrayTeam[i];
    //da oggetti in array a stringhe
    let membroDom = JSON.stringify(membro);
    stampaStringaArrayInDOM(membroDom);
};

//------------------------------------------------------------//



//-------------------------FUNZIONI--------------------------//

function stampaArray(arrayTeam) {
    console.log(
        `
        MEMBRO DEL TEAM
        nome: ${arrayTeam.nome}
        ruolo: ${arrayTeam.ruolo}
        foto: ${arrayTeam.foto}
        `
    )
};


function stampaStringaArrayInDOM(arrayTeam) {
    document.getElementById("lista-membri").innerHTML += "<li>" + arrayTeam + "</li>";
};

//----------------------------------------------------------//






