'use strict'

const imagens = [
{
    nome: 'The Mantle - Agalloch',
    url: './img/Agalloch.webp'
},
{
    nome: 'No Stars Upon the Bridge - Hallatar',
    url: './img/Hallatar.webp'
},
{
    nome: "Tonight's Decision - Katatonia",
    url: './img/Katatonia.webp'
},
{
    nome: 'New Moon - Swallow The Sun',
    url: './img/New Moon.webp'
},
{
    nome: 'Ghost Reveries - Opeth',
    url: './img/Opeth.webp'
},
{
    nome: 'Sovran - Draconian',
    url: './img/Sovran.webp'
},
{
    nome: 'Hour of Nightgale - Trees of Eternity',
    url: './img/TOE.webp'
},
{
    nome: 'Fear of Blank Planet - Porcupine Tree',
    url: './img/Porcupine.webp'
},

{
    nome: 'Purgatory Afterglow - Edge of Sanity',
    url: './img/Edge of Sanity.webp'
},
{
    nome: 'Lateratus - Tool',
    url: './img/Lateratus.webp'
},
{
    nome: 'Eternity - Anathema ',
    url: './img/Anathema.webp'
},
{
    nome: " L'efant Sauvage - Gojira",
    url: './img/Gojira.webp'
},
{
    nome: 'Memorial - Soen',
    url: './img/Soen.webp'
},
{
    nome: 'Etemen Aenka - DVNE',
    url: './img/DVNE.webp'
},
{
    nome: ' Pelagial - The Ocean',
    url: './img/Ocean.webp'
},
{
    nome: 'Malina - Leprous',
    url: './img/Leprous.webp'
},
{
    nome: 'Song of the Cranes - In Mourning',
    url: './img/Mourning.webp'
},
{
    nome: 'The Fox and the Bird - Ok, Goodnight',
    url: './img/Ok.webp'
},
{
    nome: "In Contact - Caligula's Horse",
    url: './img/Caligula.webp'
},
{
    nome: "The Sky's Gone Out  - Bauhaus",
    url: './img/Bauhaus.webp'
},
{
    nome: 'Beware The Sword You Cannot See - A Forest of Stars',
    url: './img/Forest of Stars.webp'
},


    // "./img/Agalloch.webp",
    // "./img/Hallatar.webp",
    // "./img/Katatonia.webp",
    // "./img/New Moon.webp",
    // "./img/Opeth.webp",
    // "./img/Sovran.webp",
    // "./img/TOE.webp",
    // "./img/Porcupine.webp",
    // "./img/Edge of Sanity.webp",
    // "./img/Lateratus.webp",
    // "./img/Anathema.webp",
    // "./img/Gojira.webp",
    // "./img/Soen.webp",
    // "./img/DVNE.webp",
    // "./img/Ocean.webp",
    // "./img/Leprous.webp",
    // "./img/Mourning.webp",
    // "./img/Ok.webp",
    // "./img/Caligula.webp",
    // "./img/Bauhaus.webp",
    // "./img/Forest of Stars.webp"
]

function criarImagem(srcImagem) {
    
    const galeria = document.getElementById('galeria')
    const container = document.createElement('div')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    container.appendChild(imagem)
    const legenda = document.createElement('p')
    legenda.textContent = srcImagem.nome
    container.appendChild(legenda)
    galeria.appendChild(container)
}


function carregarImagens(){
    imagens.forEach (criarImagem)
    }


carregarImagens()