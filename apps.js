let imagesSection = document.querySelectorAll(".Images");
//console.log(imagesSection);
let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");


let choosenPic = []
let PicGenerator = function () {
    this.timesSeen = 0;
    this.RenderPics = function () {
        //const DisplayDiv = document.querySelector("#DisplayImagesDiv");
        this.imagesPath = "./assets";
        this.imageNames = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
        this.images = [];

        for (let i = 0; i < this.imageNames.length; i++) {
            let imgTag = document.createElement('img');
            let fullImageTagPath = `${this.imagesPath}/${this.imageNames[i]}`;
            imgTag.setAttribute("src", fullImageTagPath);
            this.images.push(imgTag);
            //DisplayDiv.append(imgTag);
        }

        console.log(this.images);

    }
    this.GetRandomPicIndex = function () {
        while (choosenPic.length < 3) {
            let randomIndex = Math.ceil(Math.random() * 18);
            //This checks if the randomIndex is already in the choosenPic array. 
            //If it is not already in the array, the code inside the if statement will execute.
            if (!choosenPic.includes(randomIndex)) {
                // .includes() method is used to check if an array includes a certain value, 
                // and returns a boolean value (true or false) 
                // to indicate whether the value is found or not.
                console.log(choosenPic.includes(randomIndex))

                choosenPic.push(randomIndex);
            }
        }
    }


    this.ifItHasTheSamePicIndexAndRenderPic = function (randomIndex) {

        for (let i = 0; i < 3; i++) {
            if (choosenPic[0] == choosenPic[1] || choosenPic[1] == choosenPic[2] || choosenPic[2] == choosenPic[0]) {
                choosenPic.splice(0, choosenPic.length);
                this.GetRandomPicIndex(randomIndex);
                console.log(choosenPic);
            }
            DisplayDiv.append(this.images[choosenPic[i]]);
        }



    }

}

let PopUpPic = new PicGenerator()
PopUpPic.RenderPics();
PopUpPic.ifItHasTheSamePicIndexAndRenderPic();



    //use the images array to work with the loaded images
