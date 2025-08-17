//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo()
{
    let amigo = document.querySelector('input').value;
    if (amigo === '')
    {
        alert("Coloque um nome valido!");
        return;
    }
    if (lista_amigos.includes(amigo))
    {
        alert("Amigo já adicionado!");
        limparCampo();
        return;
    }
    limparCampo();
    lista_amigos.push(amigo);
    console.log(lista_amigos);
    console.log("Amigo adicionado: " + amigo);
    console.log(lista_amigos.length + " amigos na lista.");
    exibir_texto_na_tela('h2', `${amigo} foi adicionado à lista!`);
    exibir_lista_amigos(amigo);
}

function limparCampo()
{
    document.querySelector('input').value = '';
}

function exibir_mensagem_inicial()
{
    exibir_texto_na_tela('h1', 'Amigo Secreto!');
    exibir_texto_na_tela('h2', 'Digite o nome do amigo que você quer adicionar:');
}

function exibir_texto_na_tela(h1,h2)
{
    let campoTexto = document.querySelector(h1);
    campoTexto.innerHTML = h2;
}

function exibir_lista_amigos() 
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos
    lista_amigos.forEach(amigo => { lista.innerHTML += `<li>${amigo}</li>`; });
}

function exibir_sorteio(amigoSorteado) 
{
    let resultado = document.getElementById('resultado');
    let pessoa = prompt("Digite o nome da pessoa que irá sortear:");
    resultado.innerHTML = `${pessoa}, o amigo secreto é: ${amigoSorteado}!`;
}

function sortearAmigo()
{
    if (lista_amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear!");
        return;
    }
    let amigoSorteado = lista_amigos[Math.floor(Math.random() * lista_amigos.length)];
    console.log("Amigo sorteado: " + amigoSorteado);
    exibir_sorteio(amigoSorteado);
    lista_amigos = lista_amigos.filter(amigo => amigo !== amigoSorteado);
}
let lista_amigos = [];
exibir_mensagem_inicial();