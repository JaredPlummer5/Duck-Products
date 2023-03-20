let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");

timesClicked = 0;
let choosenPic = []
let DuckProduct = function () {
    this.RenderPics = function () {
        this.imagesPath = "./assets";
        this.imageNames = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
        this.images = [];
        this.timesSeen = 0;

        for (let i = 0; i < this.imageNames.length; i++) {
            let imgTag = document.createElement('img');
            let fullImageTagPath = `${this.imagesPath}/${this.imageNames[i]}`;
            imgTag.setAttribute("src", fullImageTagPath);
            this.images.push(imgTag);

        }


    }
    this.GetRandomPicIndex = function () {
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


    this.ifItHasTheSamePicIndexAndRenderPic = function (randomIndex) {
        
        DisplayDiv.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            if (choosenPic[0] == choosenPic[1] || choosenPic[1] == choosenPic[2] || choosenPic[2] == choosenPic[0]) {
                choosenPic.splice(0, choosenPic.length);
                this.GetRandomPicIndex(randomIndex);
                console.log(choosenPic);
            }
            DisplayDiv.append(this.images[choosenPic[i]]);
            console.log(this.timesSeen);
            this.timesSeen++
        }
       
        
        }
        
        
    }
    


let PopUpPic = new DuckProduct()
PopUpPic.GetRandomPicIndex();
PopUpPic.RenderPics();
PopUpPic.ifItHasTheSamePicIndexAndRenderPic();

function ChoosenPicCounter(e) {
    e.target;
    PopUpPic.GetRandomPicIndex();
    PopUpPic.RenderPics();
    PopUpPic.ifItHasTheSamePicIndexAndRenderPic();
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



DisplayDiv.addEventListener("click", ChoosenPicCounter);



    
    



    //use the images array to work with the loaded images