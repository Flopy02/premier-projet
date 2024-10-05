// Création de l'objet student
const student = {
    name: "Marie",
    age: 21,
    courses: [] // Tableau vide
};

// Ajout des éléments au tableau 'courses' avec la méthode push
student.courses.push("Math", "Physics", "Chemistry");

// Utilisation de la méthode indexOf pour trouver l'index de "Physics"
const physicsIndex = student.courses.indexOf("Physics");
console.log("Index de Physics : ", physicsIndex);

// Utilisation de la méthode slice pour créer un nouveau tableau avec les deux premiers éléments
const firstTwoCourses = student.courses.slice(0, 2);
console.log("Les deux premiers cours : ", firstTwoCourses);

// Affichage de l'objet student et des résultats dans la console
console.log("Objet student : ", student);
