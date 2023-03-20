let imagesSection = document.querySelectorAll(".Images");
//console.log(imagesSection);
let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");


let choosenPic = []
let PicGenerator = function () {
    this.timesSeen = 0;
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
            DisplayDiv.append(imagesSection[choosenPic[i]]);
        }
        
        
        
    }
    
}

let PopUpPic = new PicGenerator()
PopUpPic.ifItHasTheSamePicIndexAndRenderPic();



