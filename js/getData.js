import { API_KEY } from './config.js';

async function getTeams() {
    try {
        const response = await fetch('https://www.balldontlie.io/api/v1/teams');
        const data = await response.json();
        const teams = data.data;

        const list = document.getElementById('teams');
        list.innerHTML = '';
        
        teams.forEach(team => {
            const item = document.createElement('div');
            item.textContent = `${team.full_name} (${team.abbreviation})`;
            list.appendChild(item);
        });
    } catch (error) {
        console.error('Virhe:', error);
    }
}
getTeams();



