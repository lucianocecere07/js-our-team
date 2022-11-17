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

//Milestone 1: stampare su console le informazioni dell'array
for (let i = 0; i < arrayTeam.length; i++) {
    let membro = arrayTeam[i];
    stampaArray(membro);
};

//Milestone 2: Stampare le informazioni su HTML

//creo contenitore con id
let contenitore = document.getElementById("contenitore-membri");

for (let i = 0; i < arrayTeam.length; i++) {
    let membro = arrayTeam[i];
    contenitore.innerHTML += getHTMLMember(membro);
};
//------------------------------------------------------------//



//-------------------------FUNZIONI--------------------------//

//stampa in console
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

//funzione valore proprietà membro
function getHTMLMember(member) {
    //variabile con proprietà oggetto
    let result = ` 
    <li> 
    MEMBRO DEL TEAM: 
    <br> nome: ${member.nome} 
    <br> ruolo: ${member.ruolo} 
    <br> foto: ${member.foto}
    </li>
    `;

    return result;
};

//----------------------------------------------------------//
