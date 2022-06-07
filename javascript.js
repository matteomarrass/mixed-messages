const messages = [
  `Qual è il colmo per uno scrittore?
  Non avere voce in capitolo!`,
  `Qual è il colmo dei colmi?
  Un muto che dice ad un sordo che il cieco li stava spiando!`,
  `Qual è il colmo per un computer?
  Non avere un programma per la serata.`,
];
const random = Math.floor(Math.random() * messages.length);
const randomMessage = messages[random];
const clickMessage = function () {
  document.getElementById("text").innerHTML = randomMessage;
  return randomMessage;
};
