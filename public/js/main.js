// Author: Holwn

const topMenu = document.getElementById('hso-top-menu');
const toggleTopMenuIcon = document.getElementById('hso-toggle-top-menu-icon');

document.addEventListener('click', (e) => { 
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hso-top-menu-expanded');
        topMenu.classList.toggle('hidden');
    } else {
        // topMenu.classList.toggle('hidden');
        if (topMenu.classList.contains('hso-top-menu-expanded')) {
            topMenu.classList.remove('hso-top-menu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});