# The Memoire Game

The Memoire Game is a fun and interactive memory game where players match pairs of cards. Test your memory skills and enjoy the challenge!

## Features
- **Interactive Gameplay**: Flip cards to reveal their images and find matching pairs.
- **Randomized Board**: Cards are shuffled every time the game starts.
- **Win Screen**: Celebrate your victory with a congratulatory message.
- **Replay and Exit Options**: Easily restart the game or return to the main menu.

## How to Play
1. Open the `index.html` file in your browser.
2. Click the "Start Game" button to begin.
3. Flip two cards by clicking on them.
4. If the cards match, they remain flipped. If not, they will flip back after a short delay.
5. Match all pairs to win the game!

## File Structure
- **index.html**: The main menu of the game.
- **game.html**: The game board where the gameplay happens.
- **styles.css**: Contains the styling for the game.
- **script.js**: Contains the logic for the game.

## Technologies Used
- **HTML**: For structuring the game.
- **CSS**: For styling the game.
- **JavaScript**: For game logic and interactivity.

## How to Run
1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Enjoy the game!

## How it works?
- Simple HTML makes up the bones of the entire project. 
- game.html contains a Div which acts as the game board, containing 16 cards (8 pairs) of emojies
- CSS (styles.css) allows for the animated background, the buttons to animate when hovered, and the cards to appear on the website (without which, they wouldnt show), and to flip the cards before hand, so the cards dont show any of it's data to the player before being clicked on
- Using script.js, we can put in the logic of that once a card is clicked, it is to be flipped, and be comapared with another flipped card. Along with taking measures to prevent any bugs which may appear during a game
- Script.js also allows for Sound effects (Found in /sounds) to be played, change the color of matched cards, and outputting a Win message
