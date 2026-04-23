// Fungsi utama untuk navigasi antar halaman
function goToPage(targetPageId) {
    // Ambil semua section halaman
    const pages = document.querySelectorAll('.page-section');
    
    // Sembunyikan halaman yang sedang aktif dengan efek fade out
    pages.forEach(page => {
        if (page.classList.contains('active-page')) {
            page.style.opacity = '0';
            setTimeout(() => {
                page.classList.remove('active-page');
                page.classList.add('hidden');
                
                // Tampilkan halaman target setelah halaman lama hilang
                const targetPage = document.getElementById(targetPageId);
                targetPage.classList.remove('hidden');
                
                // Beri sedikit jeda agar browser memproses penghapusan class 'hidden'
                // sebelum menjalankan animasi 'active-page'
                setTimeout(() => {
                    targetPage.classList.add('active-page');
                }, 50);
                
            }, 300); // 300ms sesuai durasi transisi CSS
        }
    });

    // Scroll otomatis ke atas layar
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk klik kupon
function redeemCoupon(couponName) {
    alert(`Yeay! Kamu memilih: ${couponName}\nJangan lupa screenshot dan kirim ke aku ya! ❤️`);
}

function clickme() {
    window.open("https://love.tsonit.com/justfornana", "_blank");

}
// Tambahkan event listener saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Contoh: Klik tombol play di Home akan membawa ke halaman 'about'
    const playButton = document.querySelector('.bg-[#1db954]');
    if (playButton) {
        playButton.addEventListener('click', (e) => {
            e.preventDefault();
            goToPage('about-section'); // Sesuaikan ID-nya
        });
    }
});

// Update fungsi redeem agar lebih interaktif (opsional)
function redeemCoupon(couponName) {
    // Selain alert, kamu bisa tambahkan suara "ding" agar makin seru
    alert(`Yeay! Kamu memilih: ${couponName}\nJangan lupa screenshot dan kirim ke aku ya! ❤️`);
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    if (audio) {
        // Coba putar otomatis saat halaman dimuat (meski kemungkinan besar diblokir browser)
        audio.play().catch(() => {
            console.log("Autoplay diblokir oleh browser. Menunggu interaksi klik dari user...");
        });

        // Fungsi untuk memutar audio pada klik pertama di manapun
        const startAudioOnFirstInteraction = () => {
            if (audio.paused) {
                audio.play();
            }
            // Setelah berhasil memutar, matikan pendeteksi klik ini agar tidak memberatkan website
            document.removeEventListener('click', startAudioOnFirstInteraction);
        };

        // Pasang pendeteksi klik ke seluruh halaman
        document.addEventListener('click', startAudioOnFirstInteraction);
    }
});