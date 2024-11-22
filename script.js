const apikey = 'cfcd17d7';
const frmPesquisa = document.querySelector("form");
frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == ""){
        return alert("Preencha o campo");
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";
    if (json.Response=='False'){
        return alert("Nenhum filme foi encontrado");
    }

    json.Search.forEach(element => {

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`
        lista.appendChild(item);
    });
}