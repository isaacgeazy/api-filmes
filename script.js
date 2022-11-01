var btn = document.getElementById('btnsearch');

btn.addEventListener('click', procurar);

async function procurar() {

    var ul = document.getElementById('conteudo');
    ul.innerHTML = ""

    var search = document.getElementById('inputsearch').value;
    const url = "https://api.tvmaze.com/search/shows?q=" + search
    const response = await fetch(url);
    const result = await response.json();


    result.forEach(element => {
        const image = element.show.image.medium
        const name = element.show.name
        const summary = element.show.summary
        const genres = element.show.genres
        const link = element.show.url
        ul.insertAdjacentHTML('beforeend',
            ` 
<li>
    <div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${summary}</p>
    <p class="card-text">Gêneros: ${genres}</p>
    <a href="${link}" class="btn btn-primary">Saber mais...</a>
  </div>
</div>
</li>
`)
    });

}

addEventListener('DOMContentLoaded', listar)

