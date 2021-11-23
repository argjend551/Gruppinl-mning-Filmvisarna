import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Hem");
  }

  async getHtmlHeader() {
    return `
    <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xm12NSa8jsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aeVkbNka9HM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AkdXuDAP2Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BIhNsAtPbPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Sy8nPI85Ih4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yEmcEuS6xm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <br><br>
</div>
</div>
<div>
    <h1>Hem</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae quibusdam, tempore ullam ratione ipsum <br> quaerat repellendus mollitia totam veritatis asperiores dolor odit iste consequatur repudiandae? Nisi, ipsum quasi! Eos.
    </p></div>
    `;
  }

  async getHtml() {
    return `
    
<div>
    <h1>Hem</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae quibusdam, tempore ullam ratione ipsum <br> quaerat repellendus mollitia totam veritatis asperiores dolor odit iste consequatur repudiandae? Nisi, ipsum quasi! Eos.
    </p></div>
    `;
  }
}
