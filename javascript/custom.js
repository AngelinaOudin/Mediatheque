
var bod =document.querySelector("#corps");
var nb = document.querySelector("#nb");
var tableau = document.querySelector("#tab");
var occu = document.querySelector("#occurences");

function marge(){
    bod.style.margin = "20px";
    bod.style.padding = "20px";
    bod.style.color = "grey";
}

//marge();

function margeCss(){
    bod.setAttribute("class", "hasJS")
}

//margeCss();

function nbMots(){
    let texte = bod.textContent;
    let tab = texte.split(" ");
    nb.textContent =tab.length;
}

nbMots();

/*function nbMotsAsso(){
    let texte = bod.textContent;
    let tab = texte.split(" ");
    let obj = {};
    tab.forEach(function(elem) {
        if(elem in obj){
            obj[elem] = ++obj[elem];

        } else {
            obj[elem] = 1;
        }
    })
    var res = document.createElement("table");
    document.body.appendChild(res);
    var tr = document.createElement("tr");
    res.appendChild(tr);
    var td = document.createElement("td");
    for (let i = 0; i< let a =keys(obj).length; i++){
        tr.appendChild(td);
    }
}*/

function appelJson(){
    let requestURL = 'http://localhost:3000/Objet';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();




    request.onload = function() {
        let res = request.response;
        let str = JSON.parse(res);
        console.log(str);
    }
}

appelJson();