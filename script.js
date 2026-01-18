
let jumlahpeserta = 0;
let maxpeserta = 50;

    function formisi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let nomorhp = document.getElementById("nomorhp").value;
    let kategori = document.getElementById("kategori").value;

     if (nama === "") {
        alert("Nama Lengkap Harus di Isi");
        return false;
    }

     if (email === "") {
        alert("Email Harus di Isi");
        return false;
    }
    
    if (nomorhp === "") {
        alert("Nomor HP Harus di Isi");
        return false;  
    }

      if (kategori === "") {
        alert("Kategori di Isi");
        return false;  
    }

        if (isNaN(nomorhp)) {
        alert("Nomor HP Harus Menggunakan Angka");
        return false;
    }
    
        if (!email.includes("@")) {
        alert("Email Harus Mengandung '@'");
        return false;
    }

    if (jumlahpeserta >= maxpeserta) {
        alert("Peserta Sudah Penuh")
        return false;
    }
    // buat hitung jumlah psesrta yang sudah daftar

        jumlahpeserta = jumlahpeserta + 1; 
        document.getElementById("hitung").innerText = jumlahpeserta
        
    // List dari siapa aja yang daftar
        document.getElementById("daftarpeserta").innerHTML =
        document.getElementById("daftarpeserta").innerHTML +
        "<li>" + nama + " - " + kategori + "</li>";

    return false;

}
