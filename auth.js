// auth.js
function checkPassword() {
    const correctPassword = "telkom123"; // Password sesuai permintaan Anda
    
    // Cek apakah sudah login sebelumnya di sesi ini
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        showContent();
        return;
    }

    // Fungsi untuk meminta password
    const passwordInput = prompt("Silahkan masukkan password untuk akses Monitoring:");

    if (passwordInput === correctPassword) {
        sessionStorage.setItem("isLoggedIn", "true");
        showContent();
    } else {
        alert("Password salah atau kosong!");
        window.location.reload(); // Refresh untuk minta lagi
    }
}

function showContent() {
    // Menampilkan kembali elemen yang disembunyikan
    const header = document.getElementById('header-content');
    const main = document.getElementById('main-content');
    
    if(header) header.style.display = 'flex';
    if(main) main.style.display = 'flex';
}

// Jalankan fungsi
checkPassword();