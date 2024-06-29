let currentIndex = 0;

        function moveSlide(step) {
            const slides = document.querySelectorAll('.carousel-slide img');
            currentIndex = (currentIndex + step + slides.length) % slides.length;
            document.getElementById('carouselSlide').style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        // Auto-slide functionality
        setInterval(() => moveSlide(1), 3000);