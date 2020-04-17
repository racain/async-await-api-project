import 'regenerator-runtime/runtime';
import Axios from 'axios';
import './styles/main.scss';

// Create reference to button element with class "generateBtn" inside index.html/DOM

let generateBtn = document.querySelector('.generateBtn');


/*
  Async function declaration named getData:
    ** 1. returns promise dog.ceo API
    ** 2. variable message is assigned to value extracted from returned resolved promise object
    ** 3. if no errors, the value of message is returned for later use
    ** 4. if error occurs, the error is returned for later use
*/

async function getData() {
  try {
    let response = await Axios.get('https://dog.ceo/api/breeds/image/random')
    let message = response.data.message;
    return message;
  } catch (error) {
    return error;
  }
}

/*
  Function declaration named createImg:
    ** 1. has one parameter
    ** 2. references all elements in index.html with the class "img"
    ** 3. creates array from dom element reference using spread operator
    ** 4. loops through array and checks for specific attributes on each element
    ** 5. assigns value of parameter to targeted attribute on each element 
*/

function createImg(data) {
  const imgEl = document.querySelectorAll('.img');
  let imgElArr = [...imgEl];
  
  imgElArr.forEach(el => {
    if (el.hasAttribute('srcset')) {
      el.setAttribute('srcset', data);
    } else if (el.hasAttribute('src')) {
      el.setAttribute('src', data);
    }
  })
}


/*
  Event listener that is triggered by user:
    ** 1. invokes async getData() function that returns promise
    ** 2. resolved promise value is returned and injected into createImg() function
    ** 3. createImg() function  
*/

generateBtn.addEventListener('click', () => {
  getData()
  .then(data => createImg(data))
  .catch(error => console.log(error));
});