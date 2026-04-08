function kirimData() {
    let pilih = document.getElementById("jurusan");
    let hasil = pilih.options[pilih.selectedIndex].text;

    if (pilih.value === "") {
        alert("Silakan pilih jurusan terlebih dahulu!");
    } else {
        document.getElementById("output").value = hasil;
    }
}

function resetData() {
    document.getElementById("jurusan").selectedIndex = 0;
    document.getElementById("output").value = "";
}
