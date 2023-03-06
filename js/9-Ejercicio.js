let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
if (text.charAt(i,1) === "a" || text.charAt(i,1) === "e" || text.charAt(i,1) === "i" || text.charAt(i,1) === "o" || text.charAt(i,1) === "u") {
document.write(text.charAt(i,1);
}
}