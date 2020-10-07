



const form = document.querySelector('form');
const mybutton = document.getElementById('mySubmit');
const trendButton = document.getElementById('trending');
mybutton.addEventListener('click', fetchResults);


let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');

const titleOne = document.getElementById('title1');
const titleTwo = document.getElementById('title2');
const titleThree = document.getElementById('title3');
const titleFour = document.getElementById('title4');
const titleFive = document.getElementById('title5');
const titleSix = document.getElementById('title6');






function fetchResults(e) {
   e.preventDefault();

   let searchTerm = document.querySelector('.search-term');
   let search = searchTerm.value
   let url = `https://api.giphy.com/v1/gifs/search?api_key=SYnWAkQp2TB7Y8R5xrb0w0606VnJVYke&q=${search}&limit=10&offset=0&rating=pg-13&lang=en`; 

   fetch(url)
   .then(function(response){
       return response.json();
       
   })
   .then(function (json) {
         


 //! Shortcut Variables for Data/Json info
 let gifOne = json.data[0].images.original.url;
 let gifTwo = json.data[1].images.original.url;
 let gifThree = json.data[2].images.original.url;
 let gifFour = json.data[3].images.original.url;
 let gifFive = json.data[4].images.original.url;
 let gifSix = json.data[5].images.original.url;
 let getTitleOne = json.data[0].title;
 let getTitleTwo = json.data[1].title;
 let getTitleThree = json.data[2].title;
 let getTitleFour = json.data[3].title;
 let getTitleFive = json.data[4].title;
 let getTitleSix = json.data[5].title;

 //! Title Info
 titleOne.innerText = getTitleOne;
 titleTwo.innerText = getTitleTwo;
 titleThree.innerText = getTitleThree;
 titleFour.innerText = getTitleFour;
 titleFive.innerText = getTitleFive;
 titleSix.innerText = getTitleSix;

 //! Images/Gifs
 
 one.src = gifOne;
 two.src = gifTwo;
 three.src = gifThree;
 four.src = gifFour;
 five.src = gifFive;
 six.src = gifSix;
});
        
};


function fetchTrend (e) {
   e.preventDefault(e)

   let urlTrend = 'https://api.giphy.com/v1/gifs/trending?api_key=SYnWAkQp2TB7Y8R5xrb0w0606VnJVYke&limit=6&rating=pg-13';

   fetch(urlTrend)
   .then(function(response){
       return response.json();
       
   })
   .then(function (json) {
         console.log(urlTrend);
         console.log(json.data)
 //    //! Shortcut Variables for Data/Json info
    let gifOne = json.data[0].images.original.url
    let gifTwo = json.data[1].images.original.url
    let gifThree = json.data[2].images.original.url
    let gifFour = json.data[3].images.original.url
    let gifFive = json.data[4].images.original.url
    let gifSix = json.data[5].images.original.url
    let getTitleOne = json.data[0].title
    let getTitleTwo = json.data[1].title
    let getTitleThree = json.data[2].title
    let getTitleFour = json.data[3].title
    let getTitleFive = json.data[4].title
    let getTitleSix = json.data[5].title
// //! Title Info
    titleOne.innerText = getTitleOne
    titleTwo.innerText = getTitleTwo
    titleThree.innerText = getTitleThree
    titleFour.innerText = getTitleFour
    titleFive.innerText = getTitleFive
    titleSix.innerText = getTitleSix

// //! Images/Gifs
   
    one.src = gifOne
    two.src = gifTwo
    three.src = gifThree
    four.src = gifFour
    five.src = gifFive
    six.src = gifSix
         
   })
};

trendButton.addEventListener('click', fetchTrend);

function displayFunc() {
    document.getElementById('display').style.visibility = "";
}

// fetch(urlTrend)
// .then(function(response){
//    return response.json();
  
// })
// .then(function(json){
   
//    fetchTrend(json)
// });

// function fetchTrend(json) {
   

  



   











 
  
