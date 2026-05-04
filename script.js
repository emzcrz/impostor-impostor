const wordBank = {
  food: {
    label: "Food",
    words: [
      { real: "Adobo", fake: "Caldereta" },
      { real: "Sinigang", fake: "Tinola" },
      { real: "Lechon", fake: "Inasal" },
      { real: "Pancit", fake: "Sotanghon" },
      { real: "Halo-halo", fake: "Mais con yelo" },
      { real: "Kare-kare", fake: "Mechado" },
      { real: "Lumpia", fake: "Shanghai rolls" },
      { real: "Bibingka", fake: "Puto" },
      { real: "Bicol Express", fake: "Laing" },
      { real: "Tapsilog", fake: "Longsilog" },

      { real: "Burger", fake: "Sandwich" },
      { real: "Pizza", fake: "Flatbread" },
      { real: "Spaghetti", fake: "Carbonara" },
      { real: "Fried chicken", fake: "Roast chicken" },
      { real: "Steak", fake: "Pork chop" },
      { real: "Sushi", fake: "Sashimi" },
      { real: "Ramen", fake: "Udon" },
      { real: "Dumplings", fake: "Siomai" },
      { real: "Hotdog", fake: "Sausage" },
      { real: "Fries", fake: "Onion rings" },

      { real: "Ice cream", fake: "Gelato" },
      { real: "Cake", fake: "Cupcake" },
      { real: "Donut", fake: "Bagel" },
      { real: "Chocolate", fake: "Fudge" },
      { real: "Milk tea", fake: "Iced coffee" },
      { real: "Coffee", fake: "Espresso" },
      { real: "Tea", fake: "Herbal tea" },
      { real: "Juice", fake: "Smoothie" },
      { real: "Soda", fake: "Sparkling water" },
      { real: "Beer", fake: "Cider" },

      { real: "Rice", fake: "Fried rice" },
      { real: "Garlic rice", fake: "Plain rice" },
      { real: "Noodles", fake: "Pasta" },
      { real: "Soup", fake: "Stew" },
      { real: "Salad", fake: "Coleslaw" },
      { real: "Egg", fake: "Omelette" },
      { real: "Bread", fake: "Toast" },
      { real: "Butter", fake: "Margarine" },
      { real: "Cheese", fake: "Cream cheese" },
      { real: "Yogurt", fake: "Custard" },

      { real: "Mango", fake: "Papaya" },
      { real: "Banana", fake: "Plantain" },
      { real: "Pineapple", fake: "Jackfruit" },
      { real: "Coconut", fake: "Nata de coco" },
      { real: "Shrimp", fake: "Prawn" },
      { real: "Crab", fake: "Lobster" },
      { real: "Fish", fake: "Tilapia" },
      { real: "Chicken", fake: "Turkey" },
      { real: "Pork", fake: "Beef" },
      { real: "Tofu", fake: "Tempeh" }
    ]
  },

  animals: {
    label: "Animals",
    words: [
      { real: "Dog", fake: "Wolf" },
      { real: "Cat", fake: "Fox" },
      { real: "Cow", fake: "Carabao" },
      { real: "Horse", fake: "Donkey" },
      { real: "Pig", fake: "Boar" },
      { real: "Goat", fake: "Sheep" },
      { real: "Chicken", fake: "Duck" },
      { real: "Rooster", fake: "Turkey" },
      { real: "Rabbit", fake: "Hare" },
      { real: "Mouse", fake: "Rat" },

      { real: "Lion", fake: "Tiger" },
      { real: "Elephant", fake: "Rhinoceros" },
      { real: "Giraffe", fake: "Camel" },
      { real: "Zebra", fake: "Horse" },
      { real: "Bear", fake: "Panda" },
      { real: "Monkey", fake: "Ape" },
      { real: "Gorilla", fake: "Chimpanzee" },
      { real: "Kangaroo", fake: "Wallaby" },
      { real: "Koala", fake: "Sloth" },
      { real: "Panda", fake: "Polar bear" },

      { real: "Eagle", fake: "Hawk" },
      { real: "Owl", fake: "Falcon" },
      { real: "Parrot", fake: "Cockatoo" },
      { real: "Chicken", fake: "Quail" },
      { real: "Duck", fake: "Goose" },
      { real: "Swan", fake: "Flamingo" },
      { real: "Penguin", fake: "Puffin" },
      { real: "Crow", fake: "Raven" },
      { real: "Sparrow", fake: "Finch" },
      { real: "Peacock", fake: "Turkey" },

      { real: "Shark", fake: "Dolphin" },
      { real: "Whale", fake: "Dolphin" },
      { real: "Octopus", fake: "Squid" },
      { real: "Crab", fake: "Lobster" },
      { real: "Shrimp", fake: "Prawn" },
      { real: "Jellyfish", fake: "Sea anemone" },
      { real: "Starfish", fake: "Sea urchin" },
      { real: "Clownfish", fake: "Goldfish" },
      { real: "Tilapia", fake: "Bangus" },
      { real: "Tuna", fake: "Salmon" },

      { real: "Philippine Eagle", fake: "Harpy Eagle" },
      { real: "Tarsier", fake: "Lemur" },
      { real: "Carabao", fake: "Water buffalo" },
      { real: "Tamaraw", fake: "Anoa" },
      { real: "Philippine Cobra", fake: "King Cobra" },
      { real: "Monitor Lizard", fake: "Komodo Dragon" },
      { real: "Fruit Bat", fake: "Vampire Bat" },
      { real: "Civet", fake: "Ferret" },
      { real: "Gecko", fake: "Chameleon" },
      { real: "Hornbill", fake: "Toucan" }
    ]
  },

  movies_tv: {
    label: "Movies & TV",
    words: [
      { real: "Avengers", fake: "Justice League" },
      { real: "Titanic", fake: "The Notebook" },
      { real: "Harry Potter", fake: "Percy Jackson" },
      { real: "Game of Thrones", fake: "House of the Dragon" },
      { real: "Breaking Bad", fake: "Better Call Saul" },
      { real: "Stranger Things", fake: "Dark" },
      { real: "The Walking Dead", fake: "The Last of Us" },
      { real: "Friends", fake: "How I Met Your Mother" },
      { real: "The Office", fake: "Parks and Recreation" },
      { real: "Money Heist", fake: "Lupin" },

      { real: "Spider-Man", fake: "Superman" },
      { real: "Batman", fake: "Iron Man" },
      { real: "Frozen", fake: "Tangled" },
      { real: "Moana", fake: "Raya and the Last Dragon" },
      { real: "Toy Story", fake: "Cars" },
      { real: "Shrek", fake: "Madagascar" },
      { real: "Jurassic Park", fake: "Jurassic World" },
      { real: "Fast & Furious", fake: "Need for Speed" },
      { real: "Mission: Impossible", fake: "James Bond" },
      { real: "John Wick", fake: "Nobody" },

      { real: "Squid Game", fake: "Alice in Borderland" },
      { real: "Wednesday", fake: "Riverdale" },
      { real: "Euphoria", fake: "Skins" },
      { real: "Loki", fake: "Moon Knight" },
      { real: "WandaVision", fake: "Ms. Marvel" },
      { real: "The Mandalorian", fake: "Obi-Wan Kenobi" },
      { real: "Prison Break", fake: "Ozark" },
      { real: "Grey’s Anatomy", fake: "House MD" },

      { real: "Ang Probinsyano", fake: "Batang Quiapo" },
      { real: "Maria Clara at Ibarra", fake: "Amaya" },
      { real: "Encantadia", fake: "Mulawin" },
      { real: "Darna", fake: "Captain Barbell" },
      { real: "On the Job", fake: "BuyBust" },
      { real: "Heneral Luna", fake: "Goyo" },
      { real: "Hello, Love, Goodbye", fake: "The Hows of Us" },
      { real: "Four Sisters and a Wedding", fake: "Seven Sundays" },
      { real: "Starting Over Again", fake: "One More Chance" },
      { real: "A Very Good Girl", fake: "Un/Happy for You" },

      { real: "Parasite", fake: "Snowpiercer" },
      { real: "Train to Busan", fake: "Alive" },
      { real: "Your Name", fake: "Weathering With You" },
      { real: "Attack on Titan", fake: "Tokyo Ghoul" },
      { real: "Demon Slayer", fake: "Jujutsu Kaisen" },
      { real: "One Piece", fake: "Naruto" },
      { real: "Bleach", fake: "Black Clover" },
      { real: "Death Note", fake: "Code Geass" },
      { real: "Fullmetal Alchemist", fake: "Hunter x Hunter" },
      { real: "Dragon Ball Z", fake: "Dragon Ball Super" },

      { real: "Leonardo DiCaprio", fake: "Brad Pitt" },
      { real: "Tom Cruise", fake: "Keanu Reeves" },
      { real: "Robert Downey Jr.", fake: "Chris Evans" },
      { real: "Chris Hemsworth", fake: "Chris Pratt" },
      { real: "Scarlett Johansson", fake: "Natalie Portman" },
      { real: "Jennifer Lawrence", fake: "Emma Stone" },
      { real: "Dwayne Johnson", fake: "Vin Diesel" },
      { real: "Ryan Reynolds", fake: "Ryan Gosling" },
      { real: "Zendaya", fake: "Bella Thorne" },
      { real: "Timothée Chalamet", fake: "Tom Holland" },

      { real: "Angelina Jolie", fake: "Sandra Bullock" },
      { real: "Meryl Streep", fake: "Helen Mirren" },
      { real: "Johnny Depp", fake: "Orlando Bloom" },
      { real: "Will Smith", fake: "Jamie Foxx" },
      { real: "Morgan Freeman", fake: "Samuel L. Jackson" },
      { real: "Anne Hathaway", fake: "Emily Blunt" },
      { real: "Gal Gadot", fake: "Brie Larson" },
      { real: "Margot Robbie", fake: "Anya Taylor-Joy" },
      { real: "Hugh Jackman", fake: "Christian Bale" },
      { real: "Christian Bale", fake: "Ben Affleck" },

      { real: "Kathryn Bernardo", fake: "Nadine Lustre" },
      { real: "Daniel Padilla", fake: "James Reid" },
      { real: "Alden Richards", fake: "Dingdong Dantes" },
      { real: "Maine Mendoza", fake: "Ryzza Mae Dizon" },
      { real: "Vice Ganda", fake: "Vhong Navarro" },
      { real: "Coco Martin", fake: "Jericho Rosales" },
      { real: "Bea Alonzo", fake: "Angelica Panganiban" },
      { real: "John Lloyd Cruz", fake: "Piolo Pascual" },
      { real: "Liza Soberano", fake: "Julia Barretto" },
      { real: "Enrique Gil", fake: "Joshua Garcia" },

      { real: "Kim Chiu", fake: "Xian Lim" },
      { real: "Paulo Avelino", fake: "Carlo Aquino" },
      { real: "Janella Salvador", fake: "Sue Ramirez" },
      { real: "Joshua Garcia", fake: "Donny Pangilinan" },
      { real: "DonBelle", fake: "FranSeth" },
      { real: "Park Seo-joon", fake: "Lee Min-ho" },
      { real: "Song Hye-kyo", fake: "Jun Ji-hyun" },
      { real: "Gong Yoo", fake: "Hyun Bin" },
      { real: "IU", fake: "Bae Suzy" },
      { real: "Cha Eun-woo", fake: "Rowoon" },

      { real: "Jackie Chan", fake: "Jet Li" },
      { real: "Donnie Yen", fake: "Tony Jaa" },
      { real: "Michelle Yeoh", fake: "Lucy Liu" },
      { real: "Ken Jeong", fake: "Randall Park" },
      { real: "Awkwafina", fake: "Constance Wu" },
      { real: "Dev Patel", fake: "Riz Ahmed" },
      { real: "Zac Efron", fake: "Logan Lerman" },
      { real: "Selena Gomez", fake: "Ariana Grande" },
      { real: "Lady Gaga", fake: "Taylor Swift" },
      { real: "Millie Bobby Brown", fake: "Sadie Sink" }
    ]
  },

  music: {
    label: "Music",
    words: [
      { real: "Tadhana", fake: "Kathang Isip" },
      { real: "Kathang Isip", fake: "Sa Ngalan Ng Pag-ibig" },
      { real: "Buwan", fake: "Araw-Araw" },
      { real: "Araw-Araw", fake: "Pagtingin" },
      { real: "Pagtingin", fake: "Unti-Unti" },
      { real: "Before I Let You Go", fake: "214" },
      { real: "214", fake: "With a Smile" },
      { real: "With a Smile", fake: "Ligaya" },
      { real: "Ligaya", fake: "Alapaap" },
      { real: "Alapaap", fake: "Magasin" },

      { real: "Magasin", fake: "Pare Ko" },
      { real: "Pare Ko", fake: "Ang Huling El Bimbo" },
      { real: "Ang Huling El Bimbo", fake: "Spoliarium" },
      { real: "Spoliarium", fake: "Minsan" },
      { real: "Minsan", fake: "Narda" },
      { real: "Narda", fake: "Jeepney" },
      { real: "Jeepney", fake: "Hari ng Sablay" },
      { real: "Hari ng Sablay", fake: "Discolamon" },
      { real: "Discolamon", fake: "Tagpuan" },
      { real: "Tagpuan", fake: "Ikaw at Ako" },

      { real: "Ikaw at Ako", fake: "Torete" },
      { real: "Torete", fake: "Burnout" },
      { real: "Burnout", fake: "Maybe the Night" },
      { real: "Maybe the Night", fake: "Leaves" },
      { real: "Leaves", fake: "Di Na Muli" },

      { real: "Sarah Geronimo", fake: "Regine Velasquez" },
      { real: "Regine Velasquez", fake: "Lani Misalucha" },
      { real: "Moira Dela Torre", fake: "KZ Tandingan" },
      { real: "KZ Tandingan", fake: "Yeng Constantino" },
      { real: "Yeng Constantino", fake: "Juris" },
      { real: "Ben&Ben", fake: "Munimuni" },
      { real: "IV of Spades", fake: "The Juans" },
      { real: "December Avenue", fake: "This Band" },
      { real: "Parokya ni Edgar", fake: "Kamikazee" },
      { real: "Eraserheads", fake: "Rivermaya" },

      { real: "Rivermaya", fake: "Sandwich" },
      { real: "Gloc-9", fake: "Abra" },
      { real: "Flow G", fake: "Skusta Clee" },
      { real: "Skusta Clee", fake: "Ex Battalion" },
      { real: "Arthur Nery", fake: "Zack Tabudlo" },
      { real: "Zack Tabudlo", fake: "Adie" },
      { real: "Adie", fake: "TJ Monterde" },
      { real: "TJ Monterde", fake: "Jason Marvin" },
      { real: "Gary Valenciano", fake: "Martin Nievera" },
      { real: "Martin Nievera", fake: "Ogie Alcasid" },

      { real: "Ogie Alcasid", fake: "Janno Gibbs" },
      { real: "Vice Ganda", fake: "Vhong Navarro" },
      { real: "James Reid", fake: "Nadine Lustre" },
      { real: "Nadine Lustre", fake: "Liza Soberano" },
      { real: "SB19", fake: "BGYO" }
    ]
  },

  places: {
    label: "Places",
    words: [
      { real: "Eiffel Tower", fake: "Leaning Tower of Pisa" },
      { real: "Statue of Liberty", fake: "Christ the Redeemer" },
      { real: "Great Wall of China", fake: "Forbidden City" },
      { real: "Taj Mahal", fake: "Red Fort" },
      { real: "Colosseum", fake: "Pantheon" },
      { real: "Big Ben", fake: "London Eye" },
      { real: "Sydney Opera House", fake: "Harbour Bridge" },
      { real: "Mount Fuji", fake: "Mount Everest" },
      { real: "Niagara Falls", fake: "Victoria Falls" },
      { real: "Grand Canyon", fake: "Antelope Canyon" },

      { real: "Hollywood Sign", fake: "Walk of Fame" },
      { real: "Times Square", fake: "Central Park" },
      { real: "Golden Gate Bridge", fake: "Brooklyn Bridge" },
      { real: "Burj Khalifa", fake: "Shanghai Tower" },
      { real: "Petra", fake: "Machu Picchu" },
      { real: "Stonehenge", fake: "Easter Island" },
      { real: "Angkor Wat", fake: "Borobudur" },
      { real: "Santorini", fake: "Mykonos" },
      { real: "Bali", fake: "Phuket" },
      { real: "Maldives", fake: "Bora Bora" },

      { real: "Intramuros", fake: "Fort Santiago" },
      { real: "Rizal Park", fake: "Ayala Triangle Gardens" },
      { real: "Boracay", fake: "Siargao" },
      { real: "Siargao", fake: "La Union" },
      { real: "Palawan", fake: "Coron" },
      { real: "Coron", fake: "El Nido" },
      { real: "El Nido", fake: "Honda Bay" },
      { real: "Baguio", fake: "Tagaytay" },
      { real: "Tagaytay", fake: "Antipolo" },
      { real: "Mayon Volcano", fake: "Taal Volcano" },

      { real: "Taal Volcano", fake: "Mount Pinatubo" },
      { real: "Chocolate Hills", fake: "Hundred Islands" },
      { real: "Hundred Islands", fake: "Kalanggaman Island" },
      { real: "Vigan", fake: "Paoay" },
      { real: "Paoay Church", fake: "Miagao Church" },
      { real: "Cebu", fake: "Davao" },
      { real: "Davao", fake: "Cagayan de Oro" },
      { real: "Manila", fake: "Quezon City" },
      { real: "Quezon City", fake: "Makati" },
      { real: "Makati", fake: "Bonifacio Global City" },

      { real: "Bonifacio Global City", fake: "Ortigas" },
      { real: "SM Malls", fake: "Robinson's" },
      { real: "Enchanted Kingdom", fake: "Star City" },
      { real: "Star City", fake: "Sky Ranch" },
      { real: "Subic Bay", fake: "Clark Freeport" },
      { real: "Clark", fake: "Subic" },
      { real: "Puerto Princesa", fake: "Iloilo" },
      { real: "Iloilo", fake: "Bacolod" },
      { real: "Bacolod", fake: "Dumaguete" }
    ]
  }
};

const gameState = {
  playerNames: [],
  players: [],
  impostorCount: 1,

  secretWord: "",
  fakeWord: "",
  category: "",

  impostorWordMode: "none",

  customWordPool: [],
  usedWords: [],
  isCustomWordGame: false,

  roundNumber: 0,
  currentPlayerIndex: 0,

  timerDuration: 0,
  timerRemaining: 0,
  timerInterval: null
};

const screens = document.querySelectorAll(".screen");

const playerNameInput = document.getElementById("player-name-input");
const addPlayerBtn = document.getElementById("add-player-btn");
const clearPlayersBtn = document.getElementById("clear-players-btn");
const playerList = document.getElementById("player-list");
const playerCountLabel = document.getElementById("player-count-label");

const impostorCountInput = document.getElementById("impostor-count-input");
const customWordInput = document.getElementById("custom-word-input");
const customWordListInput = document.getElementById("custom-word-list-input");
const impostorWordModeSelect = document.getElementById("impostor-word-mode");
const timerSelect = document.getElementById("timer-select");
const categoryCheckboxes = document.querySelectorAll('input[name="word-category"]');
const errorMessage = document.getElementById("error-message");
const startGameBtn = document.getElementById("start-game-btn");

const roundLabel = document.getElementById("round-label");
const passMessage = document.getElementById("pass-message");
const revealRoleBtn = document.getElementById("reveal-role-btn");

const roleCard = document.getElementById("role-card");
const rolePlayerName = document.getElementById("role-player-name");
const roleMessage = document.getElementById("role-message");
const wordMessage = document.getElementById("word-message");
const roleHint = document.getElementById("role-hint");
const nextPlayerBtn = document.getElementById("next-player-btn");

const timerBox = document.getElementById("timer-box");
const timerDisplay = document.getElementById("timer-display");
const startTimerBtn = document.getElementById("start-timer-btn");
const pauseTimerBtn = document.getElementById("pause-timer-btn");
const resetTimerBtn = document.getElementById("reset-timer-btn");

const revealResultsBtn = document.getElementById("reveal-results-btn");
const impostorResultsList = document.getElementById("impostor-results-list");
const resultWord = document.getElementById("result-word");
const fakeWordResultCard = document.getElementById("fake-word-result-card");
const resultFakeWord = document.getElementById("result-fake-word");

const wordPoolCard = document.getElementById("word-pool-card");
const wordPoolProgress = document.getElementById("word-pool-progress");
const usedWordsList = document.getElementById("used-words-list");

const playAgainBtn = document.getElementById("play-again-btn");
const backToSetupBtn = document.getElementById("back-to-setup-btn");
const newGameBtn = document.getElementById("new-game-btn");

function showScreen(screenId) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function showError(message) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = "";
}

function addPlayer() {
  const name = playerNameInput.value.trim();

  if (!name) {
    showError("Enter a player name first.");
    return;
  }

  const alreadyExists = gameState.playerNames.some(playerName => {
    return playerName.toLowerCase() === name.toLowerCase();
  });

  if (alreadyExists) {
    showError("That player name already exists.");
    return;
  }

  gameState.playerNames.push(name);
  playerNameInput.value = "";
  clearError();
  renderPlayerList();
}

function removePlayer(indexToRemove) {
  gameState.playerNames = gameState.playerNames.filter((_, index) => {
    return index !== indexToRemove;
  });

  renderPlayerList();
}

function clearPlayers() {
  gameState.playerNames = [];
  renderPlayerList();
  clearError();
}

function renderPlayerList() {
  playerList.innerHTML = "";

  gameState.playerNames.forEach((name, index) => {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "player-name";
    nameSpan.textContent = `${index + 1}. ${name}`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-player-btn";
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      removePlayer(index);
    });

    li.appendChild(nameSpan);
    li.appendChild(removeBtn);
    playerList.appendChild(li);
  });

  const count = gameState.playerNames.length;
  playerCountLabel.textContent = `${count} ${count === 1 ? "player" : "players"}`;
}

function getSelectedCategoryKeys() {
  return Array.from(categoryCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
}

function getRandomWordDataFromSelectedCategories() {
  const selectedCategoryKeys = getSelectedCategoryKeys();
  const availableWords = [];

  selectedCategoryKeys.forEach(categoryKey => {
    const category = wordBank[categoryKey];

    if (!category) {
      return;
    }

    category.words.forEach(word => {
      availableWords.push({
        category: category.label,
        real: word.real,
        fake: word.fake
      });
    });
  });

  if (availableWords.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableWords.length);
  return availableWords[randomIndex];
}

function getCustomWordListFromInput() {
  const rawText = customWordListInput.value.trim();

  if (!rawText) {
    return [];
  }

  const words = rawText
    .split("\n")
    .map(word => word.trim())
    .filter(word => word.length > 0);

  const uniqueWords = [];

  words.forEach(word => {
    const alreadyExists = uniqueWords.some(existingWord => {
      return existingWord.toLowerCase() === word.toLowerCase();
    });

    if (!alreadyExists) {
      uniqueWords.push(word);
    }
  });

  return uniqueWords;
}

function getRandomWordData() {
  return getRandomWordDataFromSelectedCategories();
}

function createCustomWordData(customWord) {
  return {
    category: "Custom",
    real: customWord,
    fake: "Mystery Word"
  };
}

function getRandomWordFromCustomPool() {
  const randomIndex = Math.floor(Math.random() * gameState.customWordPool.length);
  const selectedWord = gameState.customWordPool[randomIndex];

  gameState.customWordPool.splice(randomIndex, 1);
  gameState.usedWords.push(selectedWord);

  return selectedWord;
}

function hasCustomWordsRemaining() {
  return gameState.customWordPool.length > 0;
}

function resetCustomWordGame() {
  gameState.customWordPool = [];
  gameState.usedWords = [];
  gameState.isCustomWordGame = false;
}

function rotatePlayerOrder(playerNames, roundNumber) {
  if (playerNames.length === 0) {
    return [];
  }

  const startIndex = roundNumber % playerNames.length;

  return [
    ...playerNames.slice(startIndex),
    ...playerNames.slice(0, startIndex)
  ];
}

function validateGameSettings() {
  const playerCount = gameState.playerNames.length;
  const impostorCount = Number(impostorCountInput.value);
  const customWord = customWordInput.value.trim();
  const customWordList = getCustomWordListFromInput();
  const selectedCategoryKeys = getSelectedCategoryKeys();

  if (playerCount < 3) {
    return "You need at least 3 players.";
  }

  if (!Number.isInteger(impostorCount) || impostorCount < 1) {
    return "You need at least 1 impostor.";
  }

  if (impostorCount >= playerCount) {
    return "The number of impostors must be fewer than the number of players.";
  }

  if (customWord.length > 40) {
    return "The single round word should be 40 characters or fewer.";
  }

  const hasTooLongCustomWord = customWordList.some(word => {
    return word.length > 40;
  });

  if (hasTooLongCustomWord) {
    return "Each custom word should be 40 characters or fewer.";
  }

  if (
    customWordList.length === 0 &&
    customWord.length === 0 &&
    selectedCategoryKeys.length === 0
  ) {
    return "Select at least one random word category, or enter a single round word/custom word game list.";
  }

  return null;
}

function prepareWords() {
  if (gameState.isCustomWordGame) {
    const selectedWord = getRandomWordFromCustomPool();

    gameState.secretWord = selectedWord;
    gameState.fakeWord = "Mystery Word";
    gameState.category = "Custom";

    return true;
  }

  const customWord = customWordInput.value.trim();

  const wordData = customWord
    ? createCustomWordData(customWord)
    : getRandomWordData();

  if (!wordData) {
    showError("No words available from the selected categories.");
    return false;
  }

  gameState.secretWord = wordData.real;
  gameState.fakeWord = wordData.fake;
  gameState.category = wordData.category;

  return true;
}

function assignRoles(playerNames, impostorCount) {
  const players = playerNames.map(name => {
    return {
      name,
      role: "crewmate"
    };
  });

  const chosenIndexes = new Set();

  while (chosenIndexes.size < impostorCount) {
    const randomIndex = Math.floor(Math.random() * players.length);
    chosenIndexes.add(randomIndex);
  }

  chosenIndexes.forEach(index => {
    players[index].role = "impostor";
  });

  return players;
}

function startGame() {
  const error = validateGameSettings();

  if (error) {
    showError(error);
    return;
  }

  clearError();

  const customWordList = getCustomWordListFromInput();

  gameState.impostorCount = Number(impostorCountInput.value);
  gameState.impostorWordMode = impostorWordModeSelect.value;
  gameState.timerDuration = Number(timerSelect.value);
  gameState.timerRemaining = gameState.timerDuration;

  if (customWordList.length > 0) {
    gameState.customWordPool = [...customWordList];
    gameState.usedWords = [];
    gameState.isCustomWordGame = true;
  } else {
    resetCustomWordGame();
  }

  gameState.roundNumber = 0;

  const wordsPrepared = prepareWords();

  if (!wordsPrepared) {
    return;
  }

  const rotatedPlayerNames = rotatePlayerOrder(
    gameState.playerNames,
    gameState.roundNumber
  );

  gameState.players = assignRoles(
    rotatedPlayerNames,
    gameState.impostorCount
  );

  gameState.currentPlayerIndex = 0;

  stopTimer();
  updateTimerDisplay();

  showPassScreen();
}

function startNextRound() {
  if (gameState.isCustomWordGame && !hasCustomWordsRemaining()) {
    showGameFinished();
    return;
  }

  gameState.roundNumber++;

  const wordsPrepared = prepareWords();

  if (!wordsPrepared) {
    return;
  }

  const rotatedPlayerNames = rotatePlayerOrder(
    gameState.playerNames,
    gameState.roundNumber
  );

  gameState.players = assignRoles(
    rotatedPlayerNames,
    gameState.impostorCount
  );

  gameState.currentPlayerIndex = 0;
  gameState.timerRemaining = gameState.timerDuration;

  stopTimer();
  updateTimerDisplay();

  showPassScreen();
}

function showGameFinished() {
  stopTimer();

  impostorResultsList.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = "All custom words have been used.";
  impostorResultsList.appendChild(li);

  resultWord.textContent = "Game Complete";

  fakeWordResultCard.classList.add("hidden");
  resultFakeWord.textContent = "";

  renderWordPoolProgress();

  playAgainBtn.textContent = "Game Complete";
  playAgainBtn.disabled = true;

  showScreen("results-screen");
}

function showPassScreen() {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  roundLabel.textContent = `Round ${gameState.roundNumber + 1}`;
  passMessage.textContent = `Pass the phone to ${currentPlayer.name}.`;

  showScreen("pass-screen");
}

function showRoleScreen() {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  rolePlayerName.textContent = currentPlayer.name;

  roleCard.classList.remove("impostor", "crewmate");

  if (currentPlayer.role === "impostor") {
    roleCard.classList.add("impostor");
    showImpostorRole();
  } else {
    roleCard.classList.add("crewmate");
    showCrewmateRole();
  }

  showScreen("role-screen");
}

function showCrewmateRole() {
  roleMessage.textContent = "You are NOT the impostor.";
  wordMessage.textContent = gameState.secretWord;
  roleHint.textContent = `Category: ${gameState.category}`;
}

function showImpostorRole() {
  roleMessage.textContent = "You are the IMPOSTOR.";

  if (gameState.impostorWordMode === "fake") {
    wordMessage.textContent = gameState.fakeWord;
    roleHint.textContent = "This may not be the real word. Blend in carefully.";
    return;
  }

  if (gameState.impostorWordMode === "category") {
    wordMessage.textContent = gameState.category;
    roleHint.textContent = "You only know the category. Guess the real word.";
    return;
  }

  wordMessage.textContent = "???";
  roleHint.textContent = "You do not know the secret word. Try to blend in.";
}

function goToNextPlayer() {
  gameState.currentPlayerIndex++;

  if (gameState.currentPlayerIndex >= gameState.players.length) {
    showDiscussionScreen();
    return;
  }

  showPassScreen();
}

function showDiscussionScreen() {
  setupTimerUI();
  showScreen("discussion-screen");
}

function setupTimerUI() {
  stopTimer();

  gameState.timerDuration = Number(timerSelect.value);
  gameState.timerRemaining = gameState.timerDuration;

  if (gameState.timerDuration <= 0) {
    timerBox.classList.add("hidden");
  } else {
    timerBox.classList.remove("hidden");
    updateTimerDisplay();
  }
}

function startTimer() {
  if (gameState.timerDuration <= 0) {
    return;
  }

  if (gameState.timerInterval !== null) {
    return;
  }

  gameState.timerInterval = setInterval(() => {
    gameState.timerRemaining--;

    if (gameState.timerRemaining <= 0) {
      gameState.timerRemaining = 0;
      updateTimerDisplay();
      stopTimer();
      alert("Time is up!");
      return;
    }

    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  stopTimer();
}

function resetTimer() {
  stopTimer();
  gameState.timerRemaining = gameState.timerDuration;
  updateTimerDisplay();
}

function stopTimer() {
  if (gameState.timerInterval !== null) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(gameState.timerRemaining / 60);
  const seconds = gameState.timerRemaining % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function renderWordPoolProgress() {
  if (!gameState.isCustomWordGame) {
    wordPoolCard.classList.add("hidden");
    return;
  }

  wordPoolCard.classList.remove("hidden");

  const usedCount = gameState.usedWords.length;
  const remainingCount = gameState.customWordPool.length;
  const totalCount = usedCount + remainingCount;

  wordPoolProgress.textContent =
    `${usedCount} of ${totalCount} words used. ${remainingCount} remaining.`;

  usedWordsList.innerHTML = "";

  gameState.usedWords.forEach((word, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${word}`;
    usedWordsList.appendChild(li);
  });
}

function showResults() {
  stopTimer();

  impostorResultsList.innerHTML = "";

  const impostors = gameState.players.filter(player => {
    return player.role === "impostor";
  });

  impostors.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player.name;
    impostorResultsList.appendChild(li);
  });

  resultWord.textContent = gameState.secretWord;

  if (gameState.impostorWordMode === "fake") {
    fakeWordResultCard.classList.remove("hidden");
    resultFakeWord.textContent = gameState.fakeWord;
  } else {
    fakeWordResultCard.classList.add("hidden");
    resultFakeWord.textContent = "";
  }

  renderWordPoolProgress();

  if (gameState.isCustomWordGame && !hasCustomWordsRemaining()) {
    playAgainBtn.textContent = "Game Complete";
    playAgainBtn.disabled = true;
  } else {
    playAgainBtn.textContent = "Next Round";
    playAgainBtn.disabled = false;
  }

  showScreen("results-screen");
}

function playAgainSamePlayers() {
  if (gameState.playerNames.length < 3) {
    showScreen("setup-screen");
    showError("Add at least 3 players before playing again.");
    return;
  }

  startNextRound();
}

function resetCategoryCheckboxes() {
  categoryCheckboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}

function backToSetup() {
  stopTimer();
  showScreen("setup-screen");
}

function newGame() {
  stopTimer();

  gameState.playerNames = [];
  gameState.players = [];
  gameState.impostorCount = 1;

  gameState.secretWord = "";
  gameState.fakeWord = "";
  gameState.category = "";

  gameState.impostorWordMode = "none";

  gameState.customWordPool = [];
  gameState.usedWords = [];
  gameState.isCustomWordGame = false;

  gameState.roundNumber = 0;
  gameState.currentPlayerIndex = 0;

  gameState.timerDuration = 0;
  gameState.timerRemaining = 0;

  playerNameInput.value = "";
  impostorCountInput.value = "1";
  customWordInput.value = "";
  customWordListInput.value = "";
  impostorWordModeSelect.value = "none";
  timerSelect.value = "0";

  resetCategoryCheckboxes();

  playAgainBtn.disabled = false;
  playAgainBtn.textContent = "Next Round";

  wordPoolCard.classList.add("hidden");

  clearError();
  renderPlayerList();
  updateTimerDisplay();
  showScreen("setup-screen");
}

addPlayerBtn.addEventListener("click", addPlayer);

playerNameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addPlayer();
  }
});

clearPlayersBtn.addEventListener("click", clearPlayers);
startGameBtn.addEventListener("click", startGame);

revealRoleBtn.addEventListener("click", showRoleScreen);
nextPlayerBtn.addEventListener("click", goToNextPlayer);

startTimerBtn.addEventListener("click", startTimer);
pauseTimerBtn.addEventListener("click", pauseTimer);
resetTimerBtn.addEventListener("click", resetTimer);

revealResultsBtn.addEventListener("click", showResults);

playAgainBtn.addEventListener("click", playAgainSamePlayers);
backToSetupBtn.addEventListener("click", backToSetup);
newGameBtn.addEventListener("click", newGame);

renderPlayerList();
updateTimerDisplay();