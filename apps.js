let imagesSection = document.querySelectorAll(".Images");
console.log(imagesSection);
let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");


let choosenPic = []
let PicGenerator = function () {
    this.clicks = 0;
    //this.filePath = filePath;
    //this.productName = productName;
    this.pic = function () {
        for(let i = 0; i < 3; i++){
            let randomIndex = Math.ceil(Math.random() * 15);

            console.log(randomIndex)
            for(let k = 0; k < imagesSection.length; k++){
                //console.log("You're here");
                if(k === randomIndex){
                    DisplayDiv.append(imagesSection[k]);
                    console.log("this is the class toggle", imagesSection[k]);
                }
            }
            
        }

    }
}
let PopUpPic = new PicGenerator()
PopUpPic.pic();




function RenderPics  (){
    const imagesPath = "./assets";
    const imageNames = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg","bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];
    const images = [];
    //const DisplayDiv = document.querySelector("#DisplayImagesDiv");
    
    for (let i = 0; i < imageNames.length; i++) {
      let imgTag = document.createElement('img');
      let fullImageTagPath = `${imagesPath}/${imageNames[i]}`;
      imgTag.setAttribute("src", fullImageTagPath);
      images.push(imgTag);
      //DisplayDiv.append(imgTag);
    }
    
    console.log(images);
    
    }
    RenderPics ();
    //use the images array to work with the loaded images
    