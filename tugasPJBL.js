function showPage(pageId) {
    let pages = document.querySelectorAll("section");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

function tampilkanData(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let lomba = document.getElementById("lomba").value;
    let hp = document.getElementById("hp").value;

    document.getElementById("hasil").innerHTML = `
        <h3>✅ Berhasil Daftar!</h3>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Kelas:</b> ${kelas}</p>
        <p><b>Lomba:</b> ${lomba}</p>
        <p><b>No HP:</b> ${hp}</p>
    `;
}
