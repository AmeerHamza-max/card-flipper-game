const Cards = [
    {
        "name": "HTML",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        "name": "CSS",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        "name": "JavaScript",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        "name": "jQuery",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
    },
    {
        "name": "Node.js",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        "name": "Python",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    }
];

// Duplicate cards for memory game
const gamecard = Cards.concat(Cards);

// Function to shuffle the array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

// Shuffle game cards before displaying
let firstCard = null;
let secondCard = null;
let lockBoard = false; // Prevents clicking more than 2 cards at a time
const shuffledCards = shuffleArray(gamecard);

const parentDiv = document.querySelector('#card-section');

// Loop through shuffled cards and create elements
shuffledCards.forEach(card => {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = card.name;
    
    // Create front and back divs for flipping effect
    const front_div = document.createElement('div');
    front_div.classList.add('front-card');  // Correct class name

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');  // Fixed mistake here
    back_div.style.backgroundImage = `url(${card.img})`;

    childDiv.append(front_div);
    childDiv.append(back_div);
    parentDiv.appendChild(childDiv);
});

// ✅ Fixed event listener
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target.closest('.card'); // Ensures only cards are selected

    // ✅ Ensure only `.card` elements are clickable
    if (!curCard || lockBoard || curCard === firstCard || curCard.classList.contains('card-match')) return;

    curCard.classList.add('card-selected');

    if (!firstCard) {
        // ✅ First card selected
        firstCard = curCard;
    } else {
        // ✅ Second card selected
        secondCard = curCard;
        lockBoard = true; // Prevent further clicks

        // ✅ Check for a match
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.classList.add('card-match');
            secondCard.classList.add('card-match');
            resetBoard(); // ✅ Reset selection
        } else {
            // ❌ Not a match, flip cards back
            setTimeout(() => {
                firstCard.classList.remove('card-selected');
                secondCard.classList.remove('card-selected');
                resetBoard();
            }, 1000);
        }
    }
});

// ✅ Reset function to clear selections
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
