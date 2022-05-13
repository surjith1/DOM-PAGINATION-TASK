let container =document.createElement("main");
container.className="container-fluid";
let h1Tag =document.createElement("h1");
h1Tag.className="h1 text-center";
h1Tag.setAttribute("title","h1tag");
h1Tag.setAttribute("id","title");
h1Tag.innerHTML="Pagination using Dom Implementation";
let p =document.createElement("p");
p.innerHTML="pagination helps the user to navigate and see the text wilth elegant way.";
p.id="description";
let div = document.createElement("div");
div.className = "table-responsive";
let table = document.createElement("table");
table.className = "table table-bordered";
table.id="table";
let tableHead = document.createElement("thead");
let tr = document.createElement("tr");
let thId = thtd("th", "Id");
let thName = thtd("th", "Name");
let thMail = thtd("th", "Email");
tableHead.append(tr);
tr.append(thId, thName, thMail);
let rows="";
let wrapDiv="";

let tbody = document.createElement("tbody");
//let rows = tbodyRow("tr","td","1","Lura Senger","Xander_Collier@yahoo.com");
let page = pageButtons("section","div","button","Previous","1","2","3","4","5","Next");
table.append(tableHead, tbody);
div.append(table);
container.append(h1Tag,p,div);
document.body.append(container,wrapDiv);




function thtd(tagName, value) {
    let thTag = document.createElement(tagName);
    thTag.innerHTML = value;
    return thTag;
}
function tbodyRow (trTag,tdTag,idValue,nameValue,emailValue){
    let tr = document.createElement(trTag);
    let td1 = document.createElement(tdTag);
    td1.innerHTML = idValue;
    let td2 = document.createElement(tdTag);
    td2.innerHTML = nameValue;
    let td3 = document.createElement(tdTag);
    td3.innerHTML = emailValue;
    tr.append(td1,td2,td3);
    tbody.append(tr);
    return tr;
}
function pageButtons (wraperTag,innerDivTag,btnTag,valueprev,value1,value2,value3,value4,value5,valuenext) {
    wrapDiv=document.createElement(wraperTag);
    wrapDiv.className="pagination-wrapp";
    let innerDiv=document.createElement(innerDivTag);
    innerDiv.className="page-inner-wrapp d-flex justify-content-center gap-3";
    innerDiv.setAttribute("id","buttons")
    let btnprev= document.createElement(btnTag);
    btnprev.className="btn btn-primary";
    btnprev.innerHTML=valueprev;

    let btn1= document.createElement(btnTag);
    btn1.className="btn btn-primary";
    btn1.innerHTML=value1;
    let btn2= document.createElement(btnTag);
    btn2.className="btn btn-primary";
    btn2.innerHTML=value2;

    let btn3= document.createElement(btnTag);
    btn3.className="btn btn-primary";
    btn3.innerHTML=value3;
    let btn4= document.createElement(btnTag);
    btn4.className="btn btn-primary";
    btn4.innerHTML=value4;
    let btn5= document.createElement(btnTag);
    btn5.className="btn btn-primary";
    btn5.innerHTML=value5;
    let btnnext= document.createElement(btnTag);
    btnnext.className="btn btn-primary";
    btnnext.innerHTML=valuenext;

    innerDiv.append(btnprev,btn1,btn2,btn3,btn4,btn5,btnnext);
    wrapDiv.append(innerDiv)
    return wrapDiv;
}

let req = new XMLHttpRequest;
req.open("GET", "./pagination.json",true);
req.send();
req.onload = ()=> {
    let data = JSON.parse(req.response);
    for( i =0 ; i< data.length;i++) {
        //rows = console.log(`id=${data[i].id} and Name = ${data[i].name} and Email = ${data[i].email}`);
        rows =  tbodyRow("tr","td",data[i].id,data[i].name,data[i].email); 
    }
   

}

