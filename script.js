document.addEventListener("DOMContentLoaded", () => {
    // footer - copyright
    const copyright = document.querySelector(".copyright");
    copyright.innerHTML = `&copy; ${new Date().getFullYear()}`;

    //info
    const info = document.querySelector(".info");
    const infoOverlay = document.querySelector(".infoOverlay");
    const infoContainer = document.querySelector(".infoContainer");
    function showInfo(el) {
        el.classList.add("showInfo");
        el.classList.remove("hideInfo");
    }
    function hideInfo(el) {
        el.classList.remove("showInfo");
        el.classList.add("hideInfo");
    }
    if (info && infoOverlay && infoContainer) {
        info.addEventListener("click", () => {
            showInfo(infoContainer);
            showInfo(infoOverlay);
        });
        infoOverlay.addEventListener("click", () => {
            hideInfo(infoContainer);
            hideInfo(infoOverlay);
        });
    };


    // scroll up
    const scrollUps = document.querySelectorAll(".scrollUp");
    if (scrollUps.length > 0) {
        scrollUps.forEach((scrollUp) => {
            scrollUp.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
    };


    // project images
    const biosensorProjectImgs = document.getElementById("biosensorProjectImgs");
    const exhibitProjectImgs = document.getElementById("exhibitProjectImgs");
    function projectImages(imgsElement, startIndex, endIndex) {
        if (!imgsElement) return;
        for (let i = startIndex; i < endIndex; i++) {
            const imgs = document.createElement("img");
            imgsElement.appendChild(imgs);
            imgs.src = `img${i}.jpg`;
        }
    }
    projectImages(biosensorProjectImgs, 2, 20);
    projectImages(exhibitProjectImgs, 4, 12);



    // project image shuffle
    function imageShuffle(containerId, imgNum, imgShufflePath) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const shuffledImage = document.createElement("img");
        container.appendChild(shuffledImage);
        let usedIndex = [];
        let randomIndex;
        shuffledImage.src = `${imgShufflePath}13.jpg`;
        function shuffle() {
            if (usedIndex.length < imgNum) {
                do {
                    randomIndex = Math.floor(Math.random() * imgNum) + 1;
                } while (usedIndex.includes(randomIndex));
                usedIndex.push(randomIndex);
                shuffledImage.src = `${imgShufflePath}${randomIndex}.jpg`;
            } else {
                usedIndex = [];
            }
        }
        setInterval(shuffle, 2000);
    }
    imageShuffle("biosensorProjectImgShuffle", 19, "biosensorProject/img");

    // image slider
    const exhibitProjectBanner = document.getElementById("exhibitProjectBanner");
    function imageSlider(sliderContainer, totalImages) {
        if (!sliderContainer) return;
        const sliderLeftBtn = sliderContainer.querySelector(".sliderLeftBtn");
        const sliderRightBtn = sliderContainer.querySelector(".sliderRightBtn");
        const imgElement = document.createElement("img");
        sliderContainer.appendChild(imgElement);
        let i = 1;
        imgElement.src = `img${i}.jpg`;
        sliderLeftBtn.addEventListener("click", () => {
            i--;
            if (i < 1) i = totalImages;
            imgElement.src = `img${i}.jpg`;
        });
        sliderRightBtn.addEventListener("click", () => {
            i++;
            if (i > totalImages) i = 1;
            imgElement.src = `img${i}.jpg`;
        });
    }
    imageSlider(exhibitProjectBanner, 3);
});

