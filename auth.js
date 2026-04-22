// auth.js
function checkPassword() {
    // Password yang Anda tentukan
    const correctPassword = "telkom123";
    
    // Mengambil status login dari session storage agar tidak terus meminta input saat refresh
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        document.getElementById('main-content').style.display = 'flex';
        document.getElementById('header-content').style.display = 'flex';
        return;
    }

    const passwordInput = prompt("Masukkan Password Akses Monitoring:");

    if (passwordInput === correctPassword) {
        // Simpan status login selama tab browser masih terbuka
        sessionStorage.setItem("isLoggedIn", "true");
        document.getElementById('main-content').style.display = 'flex';
        document.getElementById('header-content').style.display = 'flex';
    } else {
        alert("Password salah! Akses ditolak.");
        // Redirect ke halaman lain atau biarkan kosong
        window.location.reload(); 
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = checkPassword;