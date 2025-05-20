
let filmes = [
  { titulo: "A Origem", genero: "Ficção Científica 🚀" },
  { titulo: "O Poderoso Chefão", genero: "Drama/Crime 🎩" },
  { titulo: "Interestelar", genero: "Ficção Científica 🌌" },
  { titulo: "Forrest Gump", genero: "Drama 🏃‍♂️" },
  { titulo: "Os Vingadores", genero: "Ação 🦸‍♂️" },
  { titulo: "O Rei Leão", genero: "Animação 🦁" },
  { titulo: "Parasita", genero: "Suspense 🕵️‍♂️" },
  { titulo: "Cidade de Deus", genero: "Drama/Crime 🔫" }
];

let jogos = [
  { titulo: "The Legend of Zelda: Breath of the Wild", genero: "Aventura 🗡️" },
  { titulo: "Minecraft", genero: "Sandbox ⛏️" },
  { titulo: "God of War", genero: "Ação 🎮" },
  { titulo: "Mario Kart 8 Deluxe", genero: "Corrida 🏎️" },
  { titulo: "Among Us", genero: "Party Game 👽" },
  { titulo: "The Witcher 3", genero: "RPG ⚔️" },
  { titulo: "Free fire", genero: "Battle Royale 🔫" },
  { titulo: "Stardew Valley", genero: "Simulação 🌾" }
];

let filmeAtual = null;
let jogoAtual = null;
let botaoFilme, botaoJogo;

function setup() {
  createCanvas(400, 500);
  textAlign(CENTER, CENTER);
  textSize(20);
  filmeAtual = recomendarFilme();
  jogoAtual = recomendarJogo();

  botaoFilme = createButton('🎬 Recomendar outro filme');
  botaoFilme.position(width / 2 - botaoFilme.width / 2, height - 110);
  botaoFilme.mousePressed(() => {
    filmeAtual = recomendarFilme();
  });

  botaoJogo = createButton('🎮 Recomendar outro jogo');
  botaoJogo.position(width / 2 - botaoJogo.width / 2, height - 60);
  botaoJogo.mousePressed(() => {
    jogoAtual = recomendarJogo();
  });
}

function draw() {
  background(240, 244, 255);

  // Emojis decorativos
  textSize(32);
  text("🍿🎲 Recomendador 🎲🍿", width / 2, 40);

  // Filme
  textSize(20);
  fill(20, 70, 120);
  text("🎬 Filme indicado:", width / 2, 100);
  if (filmeAtual) {
    textSize(22);
    fill(30, 120, 40);
    text(filmeAtual.titulo, width / 2, 140);
    textSize(16);
    fill(60, 60, 60);
    text(filmeAtual.genero, width / 2, 170);
  }

  // Divisor bonito
  textSize(24);
  fill(150, 150, 210);
  text("✨", width / 2, 220);

  // Jogo
  textSize(20);
  fill(120, 60, 20);
  text("🎮 Jogo recomendado:", width / 2, 270);
  if (jogoAtual) {
    textSize(22);
    fill(180, 80, 40);
    text(jogoAtual.titulo, width / 2, 310);
    textSize(16);
    fill(60, 60, 60);
    text(jogoAtual.genero, width / 2, 340);
  }
}

function recomendarFilme() {
  let indice = floor(random(filmes.length));
  return filmes[indice];
}

function recomendarJogo() {
  let indice = floor(random(jogos.length));
  return jogos[indice];
}
