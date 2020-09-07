
var invalid_stock = false;
var i;
const stock1 = document.getElementById('stock1');
const stock2 = document.getElementById('stock2');
const stock3 = document.getElementById('stock3');
const stock4 = document.getElementById('stock4');
const stock5 = document.getElementById('stock5');
const stock6 = document.getElementById('stock6');
const stock7 = document.getElementById('stock7');
const stock8 = document.getElementById('stock8');
const stock9 = document.getElementById('stock9');
const stock10 = document.getElementById('stock10');
var stock_array = [stock1,stock2,stock3,stock4,stock5,stock6,stock7,stock8,stock9,stock10];
const errorElement = document.getElementById('error');
const num_portfolios = document.getElementById('num_portfolios'); 
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
var my_func = function(event) {
    var messages = [];
    for(i =1;i<11;i++){
    if( (format.test(stock_array[i-1].value)) == true){
      invalid_stock = true;
      messages.push("Stock " + (i+1) + " Contains an illegal character");  
    }
    if(stock_array[i-1].value.length>8){
        invalid_stock = true;
       messages.push("Stock " + (i+1) + " Contains too many characters");
      
      }
     if(num_portfolios.value < 4){
       messages.push("Number of simulations should be larger than 3");  
      invalid_stock = true;
     }
  }
  if(invalid_stock){
       event.preventDefault();
      errorElement.innerText = messages.join('\n ');
  }
 

   
};

// your form
var form = document.getElementById("form");

// attach event listener
form.addEventListener("submit", my_func, true);


