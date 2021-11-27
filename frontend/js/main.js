// A global variable to store all data in
let data = {};

async function readJSON() {
  // Read json and put in the data variable
  for (let type of ['filmer', 'shows', 'auditoriums', 'bookings']) {
    data[type] = await JSON._load(type + '.json');
  }
  // Run start function 
  start();
}

// A helper to find things by id (films, shows etc.)
function findById(type, id) {
  return data[type].find(x => x.id === id);

}

async function start() {
  //console.log(findById('auditoriums', 2));
  //console.log(await book(2, [30, 80, 81]));
  //freesats and show number in parameter
  filterfilm();
  displayFilms();
  // myBook();

}

readJSON();

//kod för navbar collapse att stängas efter du klickat på link
$(document).on('click', function () {
  $('.collapse').collapse('hide');
})

function reactOnHashChange() {
  let pageToDisplay = location.hash || 'hem';
  pageToDisplay = pageToDisplay.replace('#', '');
  //If the hash starts with film call the film function with
  //the number after '-' as a parameter
  /*if (pageToDisplay.indexOf('film') === 0) {
    let filmId = +pageToDisplay.split('-')[1];
    film(filmId);
    return;
  }*/
  //Call a function that has the same name as the page to display
  window[pageToDisplay]();
}

//Listens to changes in the last part of the URL, after the #
window.onhashchange = reactOnHashChange;
//And also call reactOnHashChange on initialt page load
reactOnHashChange();

