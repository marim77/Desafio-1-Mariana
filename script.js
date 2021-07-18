function salvarForm(){
    if (localStorage.cont) {
       localStorage.cont = Number(localStorage.cont)+1;
    } else {
       localStorage.cont = 1;
    }
    
    lead= document.getElementById('name').value + ' ; ' + document.getElementById('email').value;
    localStorage.setItem("lead "+localStorage.cont,lead);
 }