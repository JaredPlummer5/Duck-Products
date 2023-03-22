let DisplayDiv = document.querySelector("#DisplayImagesDiv");
let choosenPic = [];
let productObjects = [];
let images = [];
let timesClickedForTheDiv = 0;
let productObjectsUrl = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
let timesClicked = 0;


let DuckProduct = function (productName, productUrlPath) {
    this.timesClicked = 0;
    this.productName = productName;
    this.productUrlPath = productUrlPath;
    this.timesSeen = 0;
}


function CreatingImageTags() {
    let imagesPath = "./assets";
    for (let i = 0; i < productObjectsUrl.length; i++) {
        let imgTag = document.createElement('img');
        let fullImageTagPath = `${imagesPath}/${productObjectsUrl[i]}`;
        imgTag.setAttribute("src", fullImageTagPath);
        images.push(imgTag);

    }
}
CreatingImageTags();



if (localStorage["productObjects"]) {
    let GetObjectArray = localStorage.getItem('productObjects');
    productObjects = JSON.parse(GetObjectArray);
} else {
    for (let j = 0; j < productObjectsUrl.length; j++) {
        let imgTag = productObjectsUrl[j];
        console.log(imgTag);
        let product = new DuckProduct(productObjectsUrl[j].split(".")[0], imgTag);
        productObjects.push(product);
    }


}


DisplayDiv.addEventListener('click', PressingTheImageEventListener);
function PressingTheImageEventListener(e) {
    let imagesPath = "./assets";
    if (timesClickedForTheDiv >= 25) {
        DisplayDiv.removeEventListener('click', PressingTheImageEventListener);
    }
    if (e.target.nodeName === "IMG") {
        e.target.getAttribute('src');
        for (let i = 0; i < productObjects.length; i++) {
            //console.log(e.target.getAttribute('src'),`${imagesPath}/${productObjectsUrl[i]}`);
            if (e.target.getAttribute('src') == `${imagesPath}/${productObjectsUrl[i]}`) {
                //console.log(productObjects[i]);
                productObjects[i].timesClicked++;
            }
        }
    }


    localStorage.setItem('productObjects', JSON.stringify(productObjects));

    //console.log(`${product.productName} has been clicked ${product.timesClicked} times`);

}
console.log(productObjects);


let previousSetIndexes = [];//new variable previousSetIndexes to store the indices of the previous set of images.


function GetRandomPicIndex() {//function to check if the generated random index is not in the previousSetIndexes array
    choosenPic = [];
    while (choosenPic.length < 3) {
        let randomIndex = Math.floor(Math.random() * 19);
        // Check if the randomIndex is already in the choosenPic array and not in the previousSetIndexes array.
        if (!choosenPic.includes(randomIndex) && !previousSetIndexes.includes(randomIndex)) {
            choosenPic.push(randomIndex);
        }
    }
    return choosenPic;
}


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
    localStorage.setItem('productObjects', JSON.stringify(productObjects));
    // Update previousSetIndexes with the current set of indices
    previousSetIndexes = choosenPic.slice();
}


GetRandomPicIndex();
ifItHasTheSamePicIndexAndRenderPic();


function ChoosenPicCounter() {
    GetRandomPicIndex();
    ifItHasTheSamePicIndexAndRenderPic();
    timesClickedForTheDiv++;
    if (timesClickedForTheDiv > 25) {
        DisplayDiv.removeEventListener("click", ChoosenPicCounter);

        let ViewResultsBtn = document.querySelector("#SubBtn");
        ViewResultsBtn.addEventListener("click", ResultsList);
    }
}
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
    //console.log("This maps an array from your objects' property of the amout of time each picture was clicked", ClicksArray);
    //console.log("This maps an array from your objects' property of the amout of time each picture was seen", ViewsArray);
    //console.log("This maps an array from your objects' property name", NamesArray);



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
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



DisplayDiv.addEventListener("click", ChoosenPicCounter);


//tryAgainBtn.removeEventListener("click", e);


// //////////// Local Storage//////////////
// let productObjectsItemStringifed = JSON.stringify(productObjects);

// let productObjectsItem = localStorage.setItem('productObjects', productObjectsItemStringifed);

// let gettingProductObjects = localStorage.getItem("productObjects")


// let productObjectsParsed = JSON.parse(gettingProductObjects);
// console.log(productObjectsParsed)




