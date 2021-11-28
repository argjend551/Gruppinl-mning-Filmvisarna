//Content for the films view
function filmer(id) {
  let film = data.filmer.find(x => x.id === id);
 
  $('main').html(`
  <div id="filmContainer">
  <p><iframe width="560" height="315" src="https://www.youtube.com/embed/${film.youtubeTrailers}?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe></p>
   <img classname='poster' src="${film.images}"></img> <h3><br> Titel: ${film.title} <br></h3>  <p>Produktionsland: ${film.productionCountries} <br> Produktionsår: ${film.productionYear} <br> 
Längd: ${film.length}<br> Genre: ${film.genre} <br> Åldersgräns: ${film.ageRestrictions}
  <br> Distributör: ${film.distributor}<br> Språk: ${film.language}<br> Textning: ${film.subtitles} <br>
     Regissör: ${film.director}<br> Skådespelare: ${film.actors} <br> Handling: ${film.description}
     Recensioner: ${film.reviews[0].source}<br>
      ${film.reviews[0].quote}<br> ${film.reviews[0].stars}<br> ${film.reviews[0].max}</div>



   <div id="span3">





     <table class="table">
          <thead>
               <tr>
                    <th scope="col">Film</th>
                    <th scope="col">Datum</th>
                    <th scope="col">Salong</th>

               </tr>
          </thead>
          <tbody>
               <th class="film"></th>
               <th class="datum"></th>
               <th class="salong"></th>

          </tbody>
     </table>


</div>


 <div id="cinema">
          <div class="screen"></div>

          <div class="col-12 col-sm-6 col-lg-3">
               <div class="row1"></div>
               <div class="row2"></div>
               <div class="row3"></div>
               <div class="row4"></div>
               <div class="row5"></div>
               <div class="row6"></div>
               <div class="row7"></div>
               <div class="row8"></div>
          </div>
          <button class="book">Book</button>

     </div>





    `);
  console.log(film.title);
  findByfilm('shows', film.title);

}
