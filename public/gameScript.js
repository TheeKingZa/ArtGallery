// Initialize the expected shape before the user clicks
const expectedShapeElement = document.getElementById('expected-shape');
expectedShapeElement.style.backgroundImage = `url('')`;

function resetGame() {
    // Show all shapes
    const allShapes = document.querySelectorAll('.shape');
    allShapes.forEach(shape => {
        shape.style.display = 'inline-block';
        shape.style.backgroundImage = '';
    });

    // Update the expected shape box
    const shapes = ['square', 'circle', 'triangle'];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    const correctShape = shapes[randomIndex];
    expectedShapeElement.style.backgroundImage = `url('${getImageURL(correctShape)}')`;
}

function checkShape(selectedShape) {
    // Remove the "selected" class from all shapes
    const allShapes = document.querySelectorAll('.shape');
    allShapes.forEach(shape => shape.classList.remove('selected'));

    // Show the selected shape
    const selectedElement = document.getElementById(selectedShape);
    selectedElement.classList.add('selected');

    // Change the shapes randomly
    const shapes = ['square', 'circle', 'triangle'];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    const correctShape = shapes[randomIndex];

    // Display the result
    const resultElement = document.getElementById('result');
    if (selectedShape === correctShape) {
        resultElement.innerHTML = 'Correct! You identified the ' + selectedShape + '.';
    } else {
        resultElement.innerHTML = 'Wrong! The correct shape was ' + correctShape + '.';
    }

    // Show only the correct shape with corresponding image
    allShapes.forEach(shape => {
        if (shape.id === correctShape) {
            shape.style.display = 'inline-block';
            shape.style.backgroundImage = `url('${getImageURL(correctShape)}')`;
        } else {
            shape.style.display = 'none';
        }
    });

    // Update the expected shape box
    expectedShapeElement.style.backgroundImage = `url('${getImageURL(correctShape)}')`;

    // Reset the game after a brief delay
    setTimeout(() => {
        resultElement.innerHTML = '';
        resetGame(); // Call the reset function
    }, 2000);
}

function getImageURL(shape) {
    // Provide the actual image URLs for each shape
    switch (shape) {
        case 'square':
            return 'square.jpg';
        case 'circle':
            return 'circle.png';
        case 'triangle':
            return 'triangle.png';
        default:
            return '';
    }
}

// Initial game setup
resetGame();
