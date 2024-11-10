document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled");
});


        
        window.onscroll = function () {
            const scrollTopBtn = document.getElementById("scrollTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        document.getElementById("scrollTopBtn").addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        
        let currentIndex = 0;
        const images = document.querySelectorAll("#carouselImages img");

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? "block" : "none";
            });
        }

        function startCarousel() {
            showImage(currentIndex);
            currentIndex = (currentIndex + 1) % images.length;
            setTimeout(startCarousel, 3000);
        }

        startCarousel();
    