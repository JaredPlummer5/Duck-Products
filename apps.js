let imagesSection = document.querySelectorAll(".Images");




let choosenPic = []
let PicGenerator = function () {
    this.clicks = 0
    this.pic = function () {
        for(let i = 0; i < 3; i++){
            let randomIndex = Math.ceil(Math.random() * 15);
            console.log(randomIndex)
            for(let k = 0; k < imagesSection.length; k++){
                if(imagesSection[randomIndex]){
                    imagesSection[randomIndex].classList.toggle("show");
                }
            }
            //return randomIndex;
        }

    }
}
let PopUpPic = new PicGenerator()
PopUpPic.pic();