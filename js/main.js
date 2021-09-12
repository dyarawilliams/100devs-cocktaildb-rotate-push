//Example fetch using cocktailDB API
document.querySelector('button').addEventListener('click', getFetch)

let timeoutID;

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.split(" ").join("%20");
  
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
        console.log(data)

        // let random = Math.floor(Math.random() * data.drinks.length)
        
        function changeInfo(i){
          
          let drinkName = data.drinks[i].strDrink
          let drinkImage = data.drinks[i].strDrinkThumb
          let drinkInstr = data.drinks[i].strInstructions
          if(i >= 0){
            document.querySelector('h2').innerText = drinkName
            document.querySelector('img').src = drinkImage
            document.querySelector('#instr').innerText = drinkInstr

            return setTimeout(function(){
              console.log(drinkName)
              changeInfo(i-1)
            }, 5000)
          }
        }
         changeInfo(data.drinks.length-1)
        
      })
      .catch(err => {
        console.log(`error ${err}`)
        document.querySelector('h3').innerText = 'CHECK DRINK NAME IT IS NOT LISTED' 
      });
    }