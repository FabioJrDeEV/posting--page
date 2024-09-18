const renderizaTitulo = document.querySelector("#renderiza-titulo");
const renderizaConteudo = document.querySelector("#renderizador-conteudo");
const tituloPost = document.querySelector("#titulo");
const conteudoPost = document.querySelector("#conteudo");

document.querySelector("#formulario").addEventListener("submit", evento => {
    evento.preventDefault();
    const data = {
        title: tituloPost.value,
        body: conteudoPost.value, 
        userId:1
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(reponse => reponse.json()).then(data => {
        renderizaTitulo.innerHTML = data.title
        renderizaConteudo.innerHTML = data.body

    }).catch(error => {
        console.log("Erro ao buscar API", error);
    });
}); 