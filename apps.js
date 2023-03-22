
//Selects the div element with the ID "DisplayImagesDiv" from the HTML document
let DisplayDiv = document.querySelector("#DisplayImagesDiv");
//Variables are initialized to store data, such as the chosen pictures, product objects, images, and the number of times the div is clicked.
let choosenPic = []
let productObjects = []
let images = [];
let timesClickedForTheDiv = 0;

// An array productObjectsUrl contains the file names of the images.
let productObjectsUrl = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];


//DuckProduct constructor function is defined. It takes two arguments: productName and productUrlPath. The created object will store the number of times it has been clicked, the product name, the image URL path, and the number of times it has been seen.

let DuckProduct = function (productName, productUrlPath) {
    this.timesClicked = 0;
    this.productName = productName;
    this.productUrlPath = productUrlPath;
    this.timesSeen = 0;
}


//The CreateingImgTags function creates an array of img elements based on the file names in the productObjectsUrl array.
function CreateingImgTags() {
    let imagesPath = "./assets";
    for (let i = 0; i < productObjectsUrl.length; i++) {
        let imgTag = document.createElement('img');
        let fullImageTagPath = `${imagesPath}/${productObjectsUrl[i]}`;
        imgTag.setAttribute("src", fullImageTagPath);
        images.push(imgTag);

    }
}

// function to populate the images array.
CreateingImgTags();


function PressingTheImageEventListener(product, event) {
    //The PressingTheImageEventListener function increases the timesClicked property of the passed product object when an image is clicked. 
    product.timesClicked++;
    console.log(`${product.productName} has been clicked ${product.timesClicked} times`);

    //Stores the updated productObjects array in local storage
    localStorage.setItem("productObjects", JSON.stringify(productObjects));

    //If the timesClickedForTheDiv reaches 25, it removes the click event listener
    if (timesClickedForTheDiv >= 25) { 
        event.target.removeEventListener('click', PressingTheImageEventListener.bind(null, product));
    }
}

// The localStorageFunction function... 

function localStorageFunction() {
    // checks if there's any saved data in local storage
    if (localStorage.getItem("productObjects")) {
        // If there is, it initializes the productObjects array with the saved data
        productObjects = JSON.parse(localStorage.getItem("productObjects"));
    } else {
        // Otherwise, it creates new DuckProduct objects and populates the productObjects array
        for (let j = 0; j < productObjectsUrl.length; j++) {
            let imgTag = images[j];
            let product = new DuckProduct(productObjectsUrl[j].split(".")[0], imgTag);
            productObjects.push(product);
        }
    }
    // In both cases, it adds a click event listener for each image in the images array using the PressingTheImageEventListener function
    for (let j = 0; j < productObjectsUrl.length; j++) {
        let imgTag = images[j];
        let product = productObjects[j];
        imgTag.addEventListener('click', PressingTheImageEventListener.bind(null, product));
    }
}
//Calls the localStorageFunction to set up the productObjects array and event listeners.
localStorageFunction();

let previousSetIndexes = [];//new variable previousSetIndexes to store the indices of the previous set of images.

//The ChoosenPicCounter function is an event listener for when an image is clicked. It regenerates the set of images, increments the timesClickedForTheDiv counter, and removes the event listener after 25 clicks. It then shows a button to view the results.

function GetRandomPicIndex() {//function to check if the generated random index is not in the previousSetIndexes array
    choosenPic = [];
    while (choosenPic.length < 3) {
        let randomIndex = Math.floor(Math.random() * 19);;
        // Check if the randomIndex is already in the choosenPic array and not in the previousSetIndexes array.
        if (!choosenPic.includes(randomIndex) && !previousSetIndexes.includes(randomIndex)) {
            choosenPic.push(randomIndex);
        }
    }
    return choosenPic;
}

//this function creates an unordered list with the results of the voting game (number of times each image was seen and clicked) and displays it in the DisplayDiv. It also initializes the myCanvas element to create a bar chart using the Chart.js library.

function ifItHasTheSamePicIndexAndRenderPic() {
    DisplayDiv.innerHTML = "";
    // Check if the chosen images are the same and regenerate indices if needed
    while (choosenPic[0] === choosenPic[1] || choosenPic[1] === choosenPic[2] || choosenPic[2] === choosenPic[0]) {
        choosenPic.splice(0, choosenPic.length);
        GetRandomPicIndex();
    }
    // Append the images to the DisplayDiv
    for (let i = 0; i < 3; i++) {
        DisplayDiv.append(images[choosenPic[i]]);
        productObjects[choosenPic[i]].timesSeen++;
    }
    // Update previousSetIndexes with the current set of indices
    previousSetIndexes = choosenPic.slice();
}


GetRandomPicIndex();
ifItHasTheSamePicIndexAndRenderPic();

//Attaches the ChoosenPicCounter event listener to the DisplayDiv. An only runs the functions if the users click a picture
function ChoosenPicCounter(event) {
    // Only execute the function when an image is clicked
    if (event.target.tagName === "IMG") {
        GetRandomPicIndex();
        ifItHasTheSamePicIndexAndRenderPic();
        timesClickedForTheDiv++;
        if (timesClickedForTheDiv > 25) {
            DisplayDiv.removeEventListener("click", ChoosenPicCounter);
            DisplayDiv.innerHTML = '';
            let ViewResultsBtn = document.querySelector("#SubBtn");
            ViewResultsBtn.addEventListener("click", ResultsList);
        }
    }
}


//The ResultsList function creates an unordered 
//list with the results of the voting game (number of times each image was seen and clicked) 
//and displays it in the DisplayDiv. It also initializes the myCanvas element 
//to create a bar chart using the Chart.js library.
function ResultsList() {


    let ResultsContainer = document.createElement("ul");
    for (let i = 0; i < productObjects.length; i++) {
        let ListItems = document.createElement("li");
        ListItems.innerHTML = `${productObjects[i].productName} has been seen ${productObjects[i].timesSeen} times and has been clicked ${productObjects[i].timesClicked} times`;
        ResultsContainer.append(ListItems);
    }
    DisplayDiv.innerHTML = "";
    DisplayDiv.append(ResultsContainer);
    
    const ctx = document.getElementById('myCanvas');



    let ClicksArray = productObjects.map(image => image.timesClicked);
    let ViewsArray = productObjects.map(image => image.timesSeen);
    let NamesArray = productObjects.map(names => names.productName);
    console.log("This maps an array from your objects' property of the amout of time each picture was clicked", ClicksArray);
    console.log("This maps an array from your objects' property of the amout of time each picture was seen", ViewsArray);
    console.log("This maps an array from your objects' property name", NamesArray);



    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: NamesArray,
            datasets: [{
                label: '# of Views',
                data: ViewsArray,
                borderWidth: 1
            }, {
                label: '# of Clicks',
                data: ClicksArray,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

DisplayDiv.addEventListener("click", ChoosenPicCounter);





///////////// Local Storage /////////






