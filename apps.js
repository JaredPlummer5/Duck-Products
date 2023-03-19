let imagesSection = document.querySelectorAll(".Images");
//console.log(imagesSection);
let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");

// const imagesPath = "./assets";
// const imageNames = ["bag.jpg", "banana.jpg", "assets/bathroom.jpg"];
// const images = [];

// for (let i = 0; i < imageNames.length; i++) {
//   const image = new Image();
//   image.src = `${imagesPath}/${imageNames[i]}`;
//   images.push(image);
// }

// use the images array to work with the loaded images


let choosenPic = []
let PicGenerator = function () {
    this.timesSeen = 0;
    //this.filePath = this.filePath;
    //this.productName = productName
    this.GetRandomPicIndex = function () {
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.ceil(Math.random() * 18);
            choosenPic.push(randomIndex);
            
        }
    }
  
    this.ifItHasTheSamePicIndex = function (randomIndex) {
        
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
PopUpPic.ifItHasTheSamePicIndex();





