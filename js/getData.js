import { rapidAPI_KEY } from './config.js';

async function getData() {
    const APIurl = 'https://nba-api-free-data.p.rapidapi.com/nba-atlantic-team-list';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': rapidAPI_KEY,
            'X-RapidAPI-Host': 'nba-api-free-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(APIurl, options);
        const data = await response.json();
        const teams = data.response.teamList;

        const list = document.getElementById('teams-list');
        list.innerHTML = ''; // tyhjennetään vanhat

        teams.forEach(team => {
            const item = document.createElement('li');
            item.innerHTML = `
                <img src="${team.logo}" alt="${team.name}" width="50" style="vertical-align:middle; margin-right:10px;">
                <strong>${team.name}</strong> (${team.abbrev})
            `;
            list.appendChild(item);
        });
    } catch (error) {
        console.error('Virhe:', error);
    }
}

getData();
