
# Scrambled Word Game

A fun and interactive word game where players guess the correct word from a scrambled version within a time limit. This project is built with **HTML**, **CSS**, and **JavaScript**, and features a colorful and modern design.

## Features

- **Random Word Scrambling**: Words are randomly selected and scrambled from a predefined list.
- **Hint System**: Each word comes with a hint to help the player.
- **Score Tracking**: Keeps track of the player’s correct guesses.
- **Countdown Timer**: Adds a sense of urgency with a 30-second time limit.
- **Interactive Design**: Styled with a colorful gradient theme and responsive animations.
- **Error Handling**:
  - Ensures input is not empty.
  - Handles scenarios where the word list is exhausted.

## How to Play

1. A scrambled word appears on the screen.
2. Use the hint provided to guess the correct word.
3. Type your guess in the input field and click "Submit".
4. If your guess is correct, your score increases, and a new word appears.
5. If the timer runs out, the game ends.
6. You can restart the game and try to beat your score!

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/scrambled-word-game.git
   ```
2. Navigate to the project directory and open the `index.html` file in your browser.

## Project Structure

```
Scrambled Word Game/
│
├── index.html      # Main HTML file
├── style.css       # CSS for styling
└── script.js       # JavaScript for game logic
```

## Customization

1. **Add Your Words**: You can modify the predefined word list in the `script.js` file. Example:
   ```javascript
   const words = [
     { word: "javascript", hint: "A popular programming language for web development" },
     { word: "developer", hint: "Someone who writes code" }
   ];
   ```
2. **Change the Timer**: Update the `timeLeft` variable in the `script.js` file to set a different countdown duration.

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling and responsive design.
- **JavaScript**: Game logic and interactivity.

## Screenshots

### Game Screen
![Game Screen](https://via.placeholder.com/400x300.png?text=Game+Screen)

### Game Over
![Game Over](https://via.placeholder.com/400x300.png?text=Game+Over)

## Demo

You can view a live demo of the game [here](#).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute it.
