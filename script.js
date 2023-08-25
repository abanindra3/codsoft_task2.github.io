const t20Button = document.getElementById('t20-button');
const odiButton = document.getElementById('odi-button');
const testButton = document.getElementById('test-button');
const iplButton = document.getElementById('ipl-button');
const statsDisplay = document.querySelector('.stats-display');
t20Button.addEventListener('click', () => {
    showStats('T20 Stats will be displayed here.');
  });
  
  odiButton.addEventListener('click', () => {
    showStats('ODI Stats will be displayed here.');
  });
  
  testButton.addEventListener('click', () => {
    showStats('Test Stats will be displayed here.');
  });
  iplButton.addEventListener('click', () => {
    showStats('IPL Stats will be displayed here.');
  });
  
  function showStats(stats) {
    statsDisplay.style.display = 'block';
    statsDisplay.innerHTML = `<p>${stats}</p>`;
  }

const stats = {
  t20: {
    matches: 100,
    runs: 3500,
    average: 52.7,
    strike_rate:138.0,
    centuries:1,
    highest_score:122
  },
  odi: {
    matches: 275,
    runs: 12898,
    average: 57.3,
    strike_rate:93.6,
    centuries:46,
    highest_score:183
  },
  test: {
    matches: 111,
    runs: 8676,
    average: 49.3,
    strike_rate:55.2,
    centuries:29,
    highest_score:254,   
  },
  ipl: {
    matches: 237,
    runs: 7263,
    average: 37.2,
    strike_rate:130.0,
    centuries:7,
    highest_score:113,   
  },
};

t20Button.addEventListener('click', () => {
  showStats('T20');
});

odiButton.addEventListener('click', () => {
  showStats('ODI');
});

testButton.addEventListener('click', () => {
  showStats('Test');
});
iplButton.addEventListener('click', () => {
  showStats('IPL');
});

function showStats(format) {
  statsDisplay.style.display = 'block';
  const formatStats = stats[format.toLowerCase()];

  statsDisplay.innerHTML = `
    <h3>${format} Stats</h3>
    <p>Matches: ${formatStats.matches}</p>
    <p>Runs: ${formatStats.runs}</p>
    <p>Average: ${formatStats.average}</p>
    <p>Matches: ${formatStats.strike_rate}</p>
    <p>Runs: ${formatStats.centuries}</p>
    <p>Average: ${formatStats.highest_score}</p>
  `;
}


const journeySections = document.querySelectorAll('.journey-section');
journeySections.forEach(section => {
  section.addEventListener('click', () => {
    journeySections.forEach(s => s.classList.remove('active'));
    section.classList.add('active');
  });
});



