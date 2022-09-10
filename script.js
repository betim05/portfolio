const hamBtn = document.querySelector('#ham-btn');
addEventListener('load', makeMenuIcon);

function makeMenuIcon() {
    hamBtn.classList.add('collapsed');
}