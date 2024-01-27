const character = document.getElementById("character");


let characterX = 0;
let characterY = 0;

const movementSpeed = 5;

function updateCharacterPosition() {
    // Get the offset of the canvas
    const canvasOffset = document.getElementById("gameCanvas").getBoundingClientRect();

    
    characterX = Math.max(canvasOffset.left, Math.min(characterX, canvasOffset.right - character.clientWidth));
    characterY = Math.max(canvasOffset.top, Math.min(characterY, canvasOffset.bottom - character.clientHeight));

    character.style.left = characterX + 'px';
    character.style.top = characterY + 'px';
}
// Event listener for key presses
document.addEventListener("keydown", function (event) {
    // Right arrow key
    if (event.key === "ArrowRight") {
        characterX += movementSpeed;
    }

    // Left arrow key
    else if (event.key === "ArrowLeft") {
        characterX -= movementSpeed;
    }

    // Up arrow key
    else if (event.key === "ArrowUp") {
        characterY -= movementSpeed;
    }

    // Down arrow key
    else if (event.key === "ArrowDown") {
        characterY += movementSpeed;
    }

    // Update the character's position
    updateCharacterPosition();
});


updateCharacterPosition();
