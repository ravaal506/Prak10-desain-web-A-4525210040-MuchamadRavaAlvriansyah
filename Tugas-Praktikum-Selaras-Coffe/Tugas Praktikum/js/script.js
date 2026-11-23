// 1) Isi modal produk sesuai tombol "Detail" yang diklik (atribut data-*)
const modalProduk = document.getElementById('modalProduk');
modalProduk.addEventListener('show.bs.modal', (event) => {
  const tombol = event.relatedTarget;
  document.getElementById('namaProduk').textContent = tombol.dataset.nama;
  document.getElementById('hargaProduk').textContent = tombol.dataset.harga;
  document.getElementById('deskripsiProduk').textContent = tombol.dataset.deskripsi;
  document.getElementById('visualProduk').style.setProperty('--cup', tombol.dataset.warna);
});

// 2) Validasi form kontak (novalidate + was-validated + invalid-feedback)
const form = document.getElementById('formKontak');
const notif = document.getElementById('notifKirim');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add('was-validated');
    return;
  }
  const nama = document.getElementById('nama').value.trim().replace(/[<>&]/g, '');
  notif.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Terima kasih, ${nama}. Pesan Anda sudah kami terima.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Tutup"></button>
    </div>`;
  form.reset();
  form.classList.remove('was-validated');
});
