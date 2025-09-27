// Ambil elemen penting
const form = document.getElementById("form-peralatan");
const tabelBody = document.querySelector("#tabelPeralatan tbody");

// Event listener form tambah peralatan
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil nilai input
  const kode = document.getElementById("kode").value;
  const nama = document.getElementById("nama").value;
  const kategori = document.getElementById("kategori").value;
  const stok = document.getElementById("stok").value;

  // Buat baris baru
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${kode}</td>
    <td>${nama}</td>
    <td>${kategori}</td>
    <td>${stok}</td>
    <td><button class="btn btn-danger hapus">Hapus</button></td>
  `;

  // Tambahkan ke tabel
  tabelBody.appendChild(tr);

  // Reset form
  form.reset();
});

// Event listener hapus (gunakan event delegation)
tabelBody.addEventListener("click", function(e) {
  if (e.target.classList.contains("hapus")) {
    e.target.parentElement.parentElement.remove();
  }
});
