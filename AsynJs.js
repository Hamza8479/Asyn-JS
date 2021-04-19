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

const getIds = new Promise( (resolve, reject) =>{
    setTimeout(() =>{
       resolve([234,234,675,342]);
       //reject([10,20,30,5]);
    },1500)
   });
   
   const getRecipe = recId =>{
       return new Promise((resolve, reject)  =>{
           setTimeout(Id =>{
           const recipe ={
            title:'Italian Pizza',
            publisher:'Hamza'
        };
        resolve(`${Id}: ${recipe.title}`);
       },1500,recId);
       });
   };
   
   const getRelated = publisher =>{
       return new Promise((resolve, reject) =>{
           setTimeout(pub =>{
               const recipe = {
                   title:'PIzza',
                   publisher:'Hamza'
               };
               resolve(`${pub}: ${recipe.title}`);
           },1500, publisher);
       });
   };
   
   // fulfilled
   getIds.then(Ids =>{
       console.log(Ids);
       return getRecipe(Ids[2]);
   })
   .then(recipe =>{
   console.log(recipe);
   return getRelated('Hamza');
   })
   .then(recipe =>{
       console.log(recipe);
   })
   // reject state
   .catch(error =>{
       console.log('Error!!!');
   });