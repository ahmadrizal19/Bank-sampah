document.getElementById('showVideoBtn').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
        this.textContent = "Sembunyikan Video Kegiatan"; // Ubah teks tombol
    } else {
        videoContainer.style.display = "none";
        this.textContent = "Tampilkan Video Kegiatan"; // Kembalikan teks tombol
    }
});