const family = ["Madhulika", "Jaya", "Maanvika", "Archit"];
const listContainer = document.getElementById('family-list');
for (let person of family) {
    let listItem = document.createElement('li');
    listItem.textContent = person;
    listContainer.appendChild(listItem);
}
