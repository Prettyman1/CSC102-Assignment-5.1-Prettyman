
// Array of RedBull flavors
const redbullFlavors = [
    'Original',
    'Sugarfree',
    'Red Bull Zero',
    'BlueBerry',
    'Summer/Winter Edition',
    'Dragon Fruit',
    'Coconut Berry',
    'Peach',
    'Watermelon',
    'Strawberry Apricote',
];

// Function to pick a random RedBull flavor
function pickRandomFlavor() {
    // Generate a random index based on the length of the redbullFlavors array
    const randomIndex = Math.floor(Math.random() * redbullFlavors.length);
    
    // Pick a flavor from the array using the random index
    const chosenFlavor = redbullFlavors[randomIndex];
    
    // Display the result in the result div using innerHTML
    document.getElementById('result').innerHTML = `Today's RedBull flavor is: <strong>${chosenFlavor}</strong>`;
}

// Function that takes a parameter and outputs results
function getFooterText(text) {
    // Return the passed text
    return text;
}

// Adding an event listener to the 'Play Game' button
document.addEventListener('DOMContentLoaded', function() {
    // When the 'playButton' is clicked, call the pickRandomFlavor function
    document.getElementById('playButton').addEventListener('click', pickRandomFlavor);
});

/*
This is the function with the error in it.
// Array of RedBull flavors
const redbullFlavors = [
    'Original',
    'Sugarfree',
    'Red Bull Zero',
    'BlueBerry',
    'Summer/Winter Edition',
    'Dragon Fruit',
    'Coconut Berry',
    'Peach',
    'Watermelon',
    'Strawberry Apricote',
];

// Function to pick a random RedBull flavor
function pickRandomFlavor() {
    // Generate a random index based on the length of the redbullFlavors array
    // Error is in this line of code
    const randomIndex = Math.floor(Math.random() * (redbullFlavors.length + 1));
    
    // Pick a flavor from the array using the random index
    const chosenFlavor = redbullFlavors[randomIndex];
    
    // Display the result in the result div using innerHTML
    document.getElementById('result').innerHTML = `Today's RedBull flavor is: <strong>${chosenFlavor}</strong>`;
}

// Function that takes a parameter and outputs results
function getFooterText(text) {
    // Return the passed text
    return text;
}

// Adding an event listener to the 'Play Game' button
document.addEventListener('DOMContentLoaded', function() {
    // When the 'playButton' is clicked, call the pickRandomFlavor function
    document.getElementById('playButton').addEventListener('click', pickRandomFlavor);
});
*/