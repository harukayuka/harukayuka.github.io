// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Memberi efek animasi saat item muncul di layar
    const semuaKarya = document.querySelectorAll('.karya');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Hentikan pengamatan setelah animasi berjalan
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Animasi berjalan saat 10% item terlihat
    });

    semuaKarya.forEach(karya => {
        // Sembunyikan item pada awalnya
        karya.style.opacity = '0';
        karya.style.transform = 'translateY(20px)';
        karya.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Mulai amati item
        observer.observe(karya);
    });

    // Menambahkan pesan di console browser untuk memastikan script berjalan
    console.log("Museum Kata Digital berhasil dimuat!");

});