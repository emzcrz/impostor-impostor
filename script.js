const wordBank = [
  {
    category: "Food",
    real: "Pizza",
    fake: "Burger"
  },
  {
    category: "Food",
    real: "Sushi",
    fake: "Kimbap"
  },
  {
    category: "Food",
    real: "Coffee",
    fake: "Tea"
  },
  {
    category: "Place",
    real: "Beach",
    fake: "Pool"
  },
  {
    category: "Place",
    real: "Airport",
    fake: "Train Station"
  },
  {
    category: "Place",
    real: "Hospital",
    fake: "Clinic"
  },
  {
    category: "Object",
    real: "Phone",
    fake: "Tablet"
  },
  {
    category: "Object",
    real: "Laptop",
    fake: "Computer"
  },
  {
    category: "Object",
    real: "Umbrella",
    fake: "Raincoat"
  },
  {
    category: "Animal",
    real: "Dog",
    fake: "Wolf"
  },
  {
    category: "Animal",
    real: "Cat",
    fake: "Tiger"
  },
  {
    category: "Animal",
    real: "Shark",
    fake: "Dolphin"
  },
  {
    category: "Activity",
    real: "Basketball",
    fake: "Volleyball"
  },
  {
    category: "Activity",
    real: "Swimming",
    fake: "Diving"
  },
  {
    category: "Activity",
    real: "Singing",
    fake: "Dancing"
  }
];

const gameState = {
  playerNames: [],
  players: [],
  impostorCount: 1,
  secretWord: "",
  fakeWord: "",
  category: "",
  impostorWordMode: "none",
  currentPlayerIndex: 0,
  timerDuration: 180,
  timerRemaining: 180,
  timerInterval: null
};

const screens = document.querySelectorAll(".screen");

const setupScreen = document.getElementById("setup-screen");
const passScreen = document.getElementById("pass-screen");
const roleScreen = document.getElementById("role-screen");
const discussionScreen = document.getElementById("discussion-screen");
const resultsScreen = document.getElementById("results-screen");

const playerNameInput = document.getElementById("player-name-input");
const addPlayerBtn = document.getElementById("add-player-btn");
const clearPlayersBtn = document.getElementById("clear-players-btn");
const playerList = document.getElementById("player-list");
const playerCountLabel = document.getElementById("player-count-label");

const impostorCountInput = document.getElementById("impostor-count-input");
const customWordInput = document.getElementById("custom-word-input");
const impostorWordModeSelect = document.getElementById("impostor-word-mode");
const timerSelect = document.getElementById("timer-select");
const errorMessage = document.getElementById("error-message");
const startGameBtn = document.getElementById("start-game-btn");

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

const playAgainBtn = document.getElementById("play-again-btn");
const backToSetupBtn = document.getElementById("back-to-setup-btn");
const newGameBtn = document.getElementById("new-game-btn");

function showScreen(screenId) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
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

function showError(message) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = "";
}

function validateGameSettings() {
  const playerCount = gameState.playerNames.length;
  const impostorCount = Number(impostorCountInput.value);
  const customWord = customWordInput.value.trim();

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
    return "The secret word should be 40 characters or fewer.";
  }

  return null;
}

function getRandomWordData() {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
}

function createCustomWordData(customWord) {
  return {
    category: "Custom",
    real: customWord,
    fake: "Mystery Word"
  };
}

function prepareWords() {
  const customWord = customWordInput.value.trim();

  const wordData = customWord
    ? createCustomWordData(customWord)
    : getRandomWordData();

  gameState.secretWord = wordData.real;
  gameState.fakeWord = wordData.fake;
  gameState.category = wordData.category;
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

  gameState.impostorCount = Number(impostorCountInput.value);
  gameState.impostorWordMode = impostorWordModeSelect.value;
  gameState.timerDuration = Number(timerSelect.value);
  gameState.timerRemaining = gameState.timerDuration;

  prepareWords();

  gameState.players = assignRoles(
    gameState.playerNames,
    gameState.impostorCount
  );

  gameState.currentPlayerIndex = 0;

  stopTimer();
  updateTimerDisplay();

  showPassScreen();
}

function showPassScreen() {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

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

  showScreen("results-screen");
}

function playAgainSamePlayers() {
  if (gameState.playerNames.length < 3) {
    showScreen("setup-screen");
    showError("Add at least 3 players before playing again.");
    return;
  }

  startGame();
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
  gameState.currentPlayerIndex = 0;
  gameState.timerDuration = 180;
  gameState.timerRemaining = 180;

  playerNameInput.value = "";
  impostorCountInput.value = "1";
  customWordInput.value = "";
  impostorWordModeSelect.value = "none";
  timerSelect.value = "180";

  clearError();
  renderPlayerList();
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