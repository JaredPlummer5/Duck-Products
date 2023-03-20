let DisplayDiv = document.querySelector("#DisplayImagesDiv");

timesClicked = 0;
let choosenPic = []

let imageNames = []
let images = [];


let DuckProduct = function (productName, productUrlPath, timesClicked, timesSeen) {
    this.timesClicked = 0;
    this.timesSeen = 0;
    this.productName = productName;
    this.productUrlPath = productUrlPath;
    
}


function RenderPics () {
    let imagesPath = "./assets";
    
    let imageNamesUrl = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
    for (let i = 0; i < imageNamesUrl.length; i++) {
        let imgTag = document.createElement('img');
        let fullImageTagPath = `${imagesPath}/${imageNamesUrl[i]}`;
        imgTag.setAttribute("src", fullImageTagPath);
        images.push(imgTag);
        
        
    }
    
    
}
RenderPics();
    GetRandomPicIndex = function () {
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
    }


   


function ifItHasTheSamePicIndexAndRenderPic (randomIndex) {

    DisplayDiv.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        if (choosenPic[0] == choosenPic[1] || choosenPic[1] == choosenPic[2] || choosenPic[2] == choosenPic[0]) {
            choosenPic.splice(0, choosenPic.length);
            GetRandomPicIndex(randomIndex);
            console.log(choosenPic);
        }
        DisplayDiv.append(images[choosenPic[i]]);
        this.timesSeen++;
       
    }


}
function GetRandomPicIndex () {
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
}

ifItHasTheSamePicIndexAndRenderPic ();
GetRandomPicIndex();

for (let j = 0; j < imageNames.length; j++) {
    let bag = new DuckProduct(imageNames[j].split(".")[0], images[j], 0, 0);
    imageNames.push(bag);
}
console.log(images);

function ChoosenPicCounter(e) {
    e.target;
    timesClicked++;
    //console.log(timesClicked)
    if (e.target.nodeName !== "IMG") {
        timesClicked--;
        alert("please click on a Picture")
    }
    if (timesClicked >= 25) {
        DisplayDiv.removeEventListener("click", ChoosenPicCounter);

    }
    
    
}


let PopUpPic = new PicGenerator()
PopUpPic.ifItHasTheSamePicIndexAndRenderPic();

DisplayDiv.addEventListener("click", ChoosenPicCounter);








    //use the images array to work with the loaded images