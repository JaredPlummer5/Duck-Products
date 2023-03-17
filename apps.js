let imagesSection = document.querySelectorAll(".Images");
console.log(imagesSection);
let ImageDiv = document.querySelector("#RegularImagesDiv");
let DisplayDiv = document.querySelector("#DisplayImagesDiv");


let choosenPic = []
let PicGenerator = function () {
    this.clicks = 0
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





