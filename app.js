window.onload = function() {
  
  document.getElementById("searchForm").addEventListener("submit", function(e) {
    const number = document.getElementById("number").value;
    const output = document.getElementById("output");
    let result = '';
    const xhr = new XMLHttpRequest();


    //xhr.open('GET','data.txt',true);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function() {
      if (this.status === 200) {    
        const response = JSON.parse(this.responseText);
        //console.log(response.value.joke);
        //output.innerHTML = '<p>${response.value.joke}</p>'
        
        if (response.type === 'success' && number != '' ) {
          response.value.forEach(function(joke){

            result +=`<div class="alert alert-info">${joke.joke}</div>`;
            
          });
        } else{
          result +='<div class="alet alert-danger mt-2">Something wrong</div>'
        }
        
        output.innerHTML = result;

      }
    };
    xhr.send();
    e.preventDefault();
  });

};
