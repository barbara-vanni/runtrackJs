document.getElementById('filterButton').addEventListener('click', filterPokemon);

function filterPokemon() {
    const formData = new FormData(document.getElementById('filter'));
    const id = formData.get('id');
    const nom = formData.get('nom');
    const type = formData.get('type');

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const filteredPokemon = data.filter(pokemon => {
                return (!id || pokemon.id === id) &&
                       (!nom || pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) &&
                       (!type || pokemon.type.includes(type));
            });

            showResult(filteredPokemon);
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error));
}

function showResult(ListPokemon) {
    const ListPokemonDiv = document.getElementById('ListPokemon');
    ListPokemonDiv.innerHTML = '';

    if (ListPokemon.length === 0) {
        ListPokemonDiv.textContent = 'Aucun Pokémon trouvé.';
    } else {
        const ul = document.createElement('ul');
        ListPokemon.forEach(pokemon => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${pokemon.name.english}</strong> -------- Type: <strong style="color: black;">${pokemon.type.join(', ')}</strong>`;
            ul.appendChild(li);
        });
        ListPokemonDiv.appendChild(ul);
    }
}