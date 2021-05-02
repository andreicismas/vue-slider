const app = new Vue({
    el: "#root_app",
    data: {
        arrowsChecked: addEventListener("keydown", function (checked) {
            if (checked.key == "ArrowRight") {
                app.rightClick();
            } else if (checked.key == "ArrowLeft") {
                app.leftClick();
            }
        }),
        myImages: [
            "https://picsum.photos/600/500",
            "https://picsum.photos/id/237/600/500",
            "https://picsum.photos/id/25/600/500",
            "https://picsum.photos/seed/picsum/600/500",
            "https://picsum.photos/id/24/600/500",
            "https://picsum.photos/600/500?grayscale",
            "https://picsum.photos/id/100/600/500",
            "https://picsum.photos/id/252/600/500",
            "https://picsum.photos/id/263/600/500",
            "https://picsum.photos/id/261/600/500",
            "https://picsum.photos/id/214/600/500",
        ],

        imageCounter: 0,
        counter: null,

    },
    methods: {

        autoSlide() {
            this.imageCounter += 1;
            if (this.imageCounter % 2 !== 0) {
                this.counter = setInterval(this.rightClick, 2000);
            } else {
                clearInterval(this.counter)
            }

        },


        dotCecked(element) {
            this.imageCounter = element;
        },

        leftClick() {
            this.imageCounter--;
            if (this.imageCounter < 0) {
                this.imageCounter = this.myImages.length - 1;
            }
        },


        rightClick() {
            this.imageCounter++;
            if (this.imageCounter > this.myImages.length - 1) {
                this.imageCounter = 0;
            }

        },





    },
})