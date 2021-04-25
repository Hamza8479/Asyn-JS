//         const second = () => {
//            setTimeout( ()=>{
//             console.log('Async Hey there!');
//            },2000)
//         }
// const first = () => {
// console.log('Hey there!');
// second();
// console.log('The End'); 
// }

// first();

// CallBack 

// function getRecipe(){
// setTimeout( () => {
// const recipeId = [12,34,465,56];
// console.log(recipeId);

// setTimeout( (id) =>{
// const recipe = {
//     title:'Fresh Tomato Pasta',
//     publisher:'Hamza'
// };
// console.log(`${id}: ${recipe.title} published by ${recipe.publisher}`);

// setTimeout(publisher => {
//     const recipe ={
//         title:'Italian Pizza',
//         publisher:'Hamza'
//     };
//     console.log(`${publisher} has another item which is ${recipe.title}`);
// },1500,recipe.publisher);

// },1000,recipeId[2]);

// },1500);
// }
// getRecipe();

// Promises

// const getIds = new Promise( (resolve, reject) =>{
//     setTimeout(() =>{
//        resolve([234,234,675,342]);
//        //reject([10,20,30,5]);
//     },1500)
//    });
   
//    const getRecipe = recId =>{
//        return new Promise((resolve, reject)  =>{
//            setTimeout(Id =>{
//            const recipe ={
//             title:'Italian Pizza',
//             publisher:'Hamza'
//         };
//         resolve(`${Id}: ${recipe.title}`);
//        },1500,recId);
//        });
//    };
   
//    const getRelated = publisher =>{
//        return new Promise((resolve, reject) =>{
//            setTimeout(pub =>{
//                const recipe = {
//                    title:'PIzza',
//                    publisher:'Hamza'
//                };
//                resolve(`${pub}: ${recipe.title}`);
//            },1500, publisher);
//        });
//    };
   
   // fulfilled
//    getIds.then(Ids =>{
//        console.log(Ids);
//        return getRecipe(Ids[2]);
//    })
//    .then(recipe =>{
//    console.log(recipe);
//    return getRelated('Hamza');
//    })
//    .then(recipe =>{
//        console.log(recipe);
//    })
//    // reject state
//    .catch(error =>{
//        console.log('Error!!!');
//    });

//  consume Promise
// async function getRecipeAW(){
//     const Ids = await getIds;
//     console.log(Ids);

//     const recipe = await getRecipe(Ids[2]);
//     console.log(recipe);

//     const related = await getRelated('Hamza');
//     console.log(related);

//     return recipe;
// }

// getRecipeAW().then(result => console.log(`${result} is the best ever!`));



// fetch('https://www.metaweather.com/api/location/2487956/').then( (apiData) =>{
//     const data = JSON.parse(apiData);
//     console.log(data);
// })
// // .then( (actualData) =>{
// //     console.log(actualData);
// // })
// .catch(err => console.log(err));

// to make requests to diff domains cross origin resource sharing (CORS) was developed 
// have to impelement CORS on our server for requesting API

function getWeather(woeid){
    // const userLocation = "pakistan";
    const url = fetch(
      `https://covid-193.p.rapidapi.com/history?country=${woeid}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "1f98988481mshaf71d0b16041b35p14a73cjsn1e20a5387d6d",
        },
      }
    )
      .then((response) => {
         // console.log(response);
         return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
}

getWeather("pakistan");
getWeather("China");


async function getWeatherAW(woeid){
  try{
    const result =await fetch(
      `https://covid-193.p.rapidapi.com/history?country=${woeid}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "1f98988481mshaf71d0b16041b35p14a73cjsn1e20a5387d6d",
        },
      }
      
    )
    const data = await result.json();
    const today = data.response[0];
    console.log(`${today.day} In ${today.continent} country ${today.country} active corona cases are ${today.cases.active} and new are ${today.cases.new}`);
    return data;
  } catch(err){
    console.log(err);
  }
}

getWeatherAW("pakistan");
let dataChina;
getWeatherAW("China").then(data =>{
  dataChina = data;
  console.log(dataChina);
});