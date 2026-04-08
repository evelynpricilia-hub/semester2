// Mengambil element form
const form = document.getElementById('formWarga');

// Event listener ketika form disubmit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah page refresh
    
    // Mengambil nilai dari setiap input
    const namaDepan = document.getElementById('nama_depan').value;
    const namaBelakang = document.getElementById('nama_belakang').value;
    const alamat = document.getElementById('alamat').value;
    const tempatLahir = document.getElementById('tempat_lahir').value;
    const tglLahir = document.getElementById('tgl_lahir').value;
    const agama = document.getElementById('agama').value;
    
    // Mengambil nilai radio button (jenis kelamin)
    const jk = document.querySelector('input[name="jk"]:checked')?.value || 'Tidak dipilih';
    
    // Mengambil nilai checkbox (bahasa asing)
    const bahasa = Array.from(document.querySelectorAll('input[name="bahasa"]:checked'))
        .map(el => el.value)
        .join(', ') || 'Tidak dipilih';
    
    const nik = document.getElementById('nik').value; // Mengambil nilai NIK
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('status').value;
    
    // Membuat pesan hasil
    const pesan = `DATA WARGA BANDUNG\n\n` + // Menampilkan data yang diinputkan dalam format yang rapi
        `Nama: ${namaDepan} ${namaBelakang}\n` +
        `Alamat: ${alamat}\n` +
        `Tempat Lahir: ${tempatLahir}\n` +
        `Tanggal Lahir: ${tglLahir}\n` +
        `Agama: ${agama}\n` +
        `Jenis Kelamin: ${jk}\n` +
        `Bahasa Asing: ${bahasa}\n` +
        `NIK: ${nik}\n` +
        `No. Telepon: ${telepon}\n` +
        `Email: ${email}\n` +
        `Status Pernikahan: ${status}`;
    
    // Menampilkan hasil dengan alert
    alert(pesan);
});
