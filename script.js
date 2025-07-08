    // script js ini untuk membuat setiap gambar yang ada didalam website ini menjadi clickable
document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.querySelector(".close");
    
        // Saat gambar diklik
        document.querySelectorAll(".product-card img, .galeri-container img, .about-image img, .intro-image img").forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });
    
        // Tutup gambar saat klik tombol close
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    
        // Tutup gambar jika klik di luar gambar
        modal.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    });

    // script ini untuk responsivitas pada layar mobile
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
