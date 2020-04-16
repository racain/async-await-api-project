import 'regenerator-runtime/runtime';
import Axios from 'axios';
import './styles/main.scss';

let generateBtn = document.querySelector('.generateBtn');

async function getData() {
  const imageEl = document.querySelector('.dog-img');

  try {
    let response = await Axios.get('https://dog.ceo/api/breeds/image/random');
    imageEl.setAttribute('src', response.data.message);
  } catch (error) {
    console.log(error);
  }
}


generateBtn.addEventListener('click', e => {
  getData();
});