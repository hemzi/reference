// TODO: handle end of data
// TODO: error handling

const limit = 20;
let page = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`;

// ui elements
const list = document.querySelector("#list");
const container = document.querySelector(".container");

// fetch data from api
const getData = async (url, page = 0) => {
  console.log(url, page);
  const response = await fetch(url + page);
  const data = await response.json();
  return data.results;
};

// update the list
const updateList = (data) => {
  data.forEach((item) => {
    list.innerHTML += `<li>${item.name}</li>`;
  });
};

// scrolling to end of page will fetch new data to append to list
// REFERENCE: https://youtu.be/V9CY0F4Wc7M
const scrollEvent = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    page += limit;
    getData(url, page).then((data) => updateList(data));
  }
};

window.addEventListener("scroll", () => scrollEvent());

// initial load
getData(url).then((data) => updateList(data));
