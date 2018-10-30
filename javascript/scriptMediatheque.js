let note = document.querySelector("#note");
let btn = document.querySelector("#btn");
let table = document.querySelector("#table");
let nbObjets = document.querySelector("#nbObjets");

function ajoutNote(){
    let sp = document.createElement("LI");
    sp.textContent = prompt("Ajouter une note");
    if(sp.textContent.length<128){

        note.appendChild(sp);
    }
    else{
        window.alert("128 CARACTERES MAX !!!")
    }
    console.log(note);
}

function tableau(){




}
tableau();

function affichageTab(){
    let thead = document.createElement("THEAD");
    table.appendChild(thead);
    let tr = document.createElement("TR");
    thead.appendChild(tr);
    let th = document.createElement("TH");
    th.appendChild(document.createTextNode("Titre"));
    thead.appendChild(th);
    let th1 = document.createElement("TH");
    th1.appendChild(document.createTextNode("Type"));
    thead.appendChild(th1);
    let th2 = document.createElement("TH");
    th2.appendChild(document.createTextNode("Emprunté"));
    thead.appendChild(th2);
    let th3 = document.createElement("TH");
    th3.appendChild(document.createTextNode("Emprunteur"));
    thead.appendChild(th3);
    let th4 = document.createElement("TH");
    th4.appendChild(document.createTextNode("Date d'emprunt"));
    thead.appendChild(th4);
    let tbody = document.createElement("TBODY");
    table.appendChild(tbody);

    let requestURL = 'http://localhost:3000/Objet';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
        let res = request.response;
        let str = JSON.parse(res);
        console.log(str);

        for(let elem in str){

            let tr = document.createElement("TR");
            tbody.appendChild(tr);
            let td = document.createElement("TD");
            let value = document.createTextNode(str[elem].Titre);
            let td2 = document.createElement("TD");
            let value2 = document.createTextNode(str[elem].Type);
            let td3 = document.createElement("TD");
            let value3 = document.createTextNode("Oui");
            let td4 = document.createElement("TD");
            let value4 = document.createTextNode(str[elem].Emprunt.Utilisateur.Prenom);
            let td5 = document.createElement("TD");
            let value5 = document.createTextNode(str[elem].Emprunt.DateEmprunt);
            td.appendChild(value);
            tr.appendChild(td);

            td2.appendChild(value2);
            tr.appendChild(td2);
            td3.appendChild(value3);
            tr.appendChild(td3);
            td4.appendChild(value4);
            tr.appendChild(td4);
            td5.appendChild(value5);
            tr.appendChild(td5);
        }
    }

}
affichageTab();

function compteurs(){
    let requestURL = 'http://localhost:3000/Objet';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
        let res = request.response;
        let str = JSON.parse();
        
        let count = 0;
        for (let nb in str){
            if(str.hasOwnProperty(nb)){
                ++count;
            }
        }
        nbObjets.appendChild(count);
}
}
compteurs()
    