document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { nom: "Projet 1", description: "Description du projet 1", image: "https://via.placeholder.com/150", url: "#" },
        { nom: "Projet 2", description: "Description du projet 2", image: "https://via.placeholder.com/150", url: "#" }
    ];
    const container = document.getElementById('projets-container');
    projects.forEach(projet => {
        const projetCard = document.createElement('div');
        projetCard.className = 'project-card';
        projetCard.innerHTML = `
            <img src="${projet.image}" alt="${projet.nom}">
            <h2>${projet.nom}</h2>
            <p>${projet.description}</p>
            <a href="${projet.url}">Voir le projet</a>
        `;
        container.appendChild(projetCard);
    });
});
