'use strict'

const imagens = [
{
    nome: 'The Mantle',
    url: './img/Agalloch.webp'
},
{
    nome: 'Hallatar',
    url: './img/Hallatar.webp'
},
{
    nome: 'Katatonia',
    url: './img/Katatonia.webp'
},
{
    nome: 'New Moon',
    url: './img/New Moon.webp'
},
{
    nome: 'Ghost Reveries Opeth',
    url: './img/Opeth.webp'
},
{
    nome: 'Sovran Draconian',
    url: './img/Sovran.webp'
},
{
    nome: 'Trees of Eternity',
    url: './img/TOE.webp'
},
{
    nome: 'Porcupine Tree',
    url: './img/Porcupine.webp'
},

{
    nome: 'Edge of Sanity',
    url: './img/Edge of Sanity.webp'
},
{
    nome: 'Tool',
    url: './img/Lateratus.webp'
},
{
    nome: 'Anathema',
    url: './img/Anathema.webp'
},
{
    nome: 'Gojira',
    url: './img/Gojira.webp'
},
{
    nome: 'Soen',
    url: './img/Soen.webp'
},
{
    nome: 'DVNE',
    url: './img/DVNE.webp'
},
{
    nome: 'The Ocean',
    url: './img/Ocean.webp'
},
{
    nome: 'Leprous',
    url: './img/Leprous.webp'
},
{
    nome: 'In Mourning',
    url: './img/Mourning.webp'
},
{
    nome: 'The fox and the bird',
    url: './img/Ok.webp'
},
{
    nome: 'Caligula Horse',
    url: './img/Caligula.webp'
},
{
    nome: 'Bauhaus',
    url: './img/Bauhaus.webp'
},
{
    nome: 'A Forest of Stars',
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
    const galeria = document.getElementById ('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)
}
function carregarImagens(){
    imagens.forEach (criarImagem)
    }


carregarImagens()