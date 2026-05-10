
        let input = document.getElementById("inputTugas");
        let kategori = document.getElementById("kategori");
        let tombol = document.getElementById("btnTambah");
        let list = document.getElementById("listTugas");

        tombol.addEventListener("click", function () {
            let isiTugas = input.value;
            let isiKategori= kategori.value;

            if (isiTugas === "") {
                alert("Tugas tidak boleh kosong!");
                return;
            }

            let item = document.createElement("li");
            item.textContent = isiTugas + " (" + isiKategori + ")";

            let btnHapus = document.createElement("button");
            btnHapus.textContent = "Hapus";

            btnHapus.addEventListener("click", function (event) {
            event.stopPropagation(); 
            item.remove(); // lebih simpel
            });

            item.appendChild(btnHapus);

            item.addEventListener("click", function () {
                item.classList.toggle("selesai");
            });

            list.appendChild(item);
            input.value = "";
        });
