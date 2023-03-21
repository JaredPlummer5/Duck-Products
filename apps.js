let DisplayDiv = document.querySelector("#DisplayImagesDiv");
let choosenPic = []
let imageNames = []
let images = [];
let timesClickedForTheDiv = 0;
let imageNamesUrl = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
let timesClicked = 0;


let DuckProduct = function (productName, productUrlPath) {
    this.timesClicked = 0;
    this.productName = productName;
    this.productUrlPath = productUrlPath;
    this.timesSeen = 0;
}
function RenderPics() {
    let imagesPath = "./assets";
    for (let i = 0; i < imageNamesUrl.length; i++) {
        let imgTag = document.createElement('img');
        let fullImageTagPath = `${imagesPath}/${imageNamesUrl[i]}`;
        imgTag.setAttribute("src", fullImageTagPath);
        images.push(imgTag);
        
    }
}
RenderPics();
for (let j = 0; j < imageNamesUrl.length; j++) {
    
        let imgTag = images[j];
        let product = new DuckProduct(imageNamesUrl[j].split(".")[0], imgTag);
        imageNames.push(product);
        function PressingTheImageEventListener(){
            product.timesClicked++;
            console.log(`${product.productName} has been clicked ${product.timesClicked} times`);
            
            if (timesClickedForTheDiv >= 25) {
                imgTag.removeEventListener('click', PressingTheImageEventListener);
            }
        }
        imgTag.addEventListener('click', PressingTheImageEventListener);
    
}
console.log(imageNames);
function ifItHasTheSamePicIndexAndRenderPic() {
    DisplayDiv.innerHTML = "";
    // Check if the chosen images are the same and regenerate indices if needed
    while (choosenPic[0] === choosenPic[1] || choosenPic[1] === choosenPic[2] || choosenPic[2] === choosenPic[0]) {
        choosenPic.splice(0, choosenPic.length);
        GetRandomPicIndex();
        //console.log("I'm running");
    }
    // Append the images to the DisplayDiv
    for (let i = 0; i < 3; i++) {
        //console.log(images[choosenPic[i]]);
        DisplayDiv.append(images[choosenPic[i]]);

        // Increment the timesSeen property for the displayed image
        //let TimesPicHaveBeenSeen = imageNames[choosenPic[i]].timesSeen++;
        //console.log(`${imageNames[choosenPic[i]]} has been seen ${TimesPicHaveBeenSeen} times`)
    }
}
function GetRandomPicIndex() {
    choosenPic = [];
    while (choosenPic.length < 3) {
        let randomIndex = Math.ceil(Math.random() * 18);
        //This checks if the randomIndex is already in the choosenPic array. 
        //If it is not already in the array, the code inside the if statement will execute.
        if (!choosenPic.includes(randomIndex)) {
            // .includes() method is used to check if an array includes a certain value, 
            // and returns a boolean value (true or false) 
            // to indicate whether the value is found or not.
            choosenPic.push(randomIndex);
        }
    }
    //console.log(choosenPic);
}
GetRandomPicIndex();
ifItHasTheSamePicIndexAndRenderPic();
function ChoosenPicCounter(e) {
    GetRandomPicIndex();
    let indexForImage1 = choosenPic[0];
    let indexForImage2 = choosenPic[1];
    let indexForImage3 = choosenPic[2];
    ifItHasTheSamePicIndexAndRenderPic(indexForImage1, indexForImage2, indexForImage3);
    timesClickedForTheDiv++;
    if (timesClickedForTheDiv >= 25) {
        DisplayDiv.removeEventListener("click", ChoosenPicCounter);
    }
}

DisplayDiv.addEventListener("click", ChoosenPicCounter);

//use the images array to work with the loaded images