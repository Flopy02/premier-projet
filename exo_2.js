let fruits = ['pomme', 'banane', 'orange', 'fraise', 'mangue'];

// Extraire une portion du tableau de l'indice 1 à l'indice 3 (l'indice de fin n'est pas inclus)
let slicedFruits = fruits.slice(1, 3);

// Trouver l'indice de l'élément 'orange'
let index = fruits.indexOf('orange');

console.log(index); // Affiche: 2
console.log(slicedFruits); // Affiche: ['banane', 'orange']