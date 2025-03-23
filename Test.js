function date() {
    var waktu = new Date();
    var tanggal = waktu.getDate();
    var hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var hari = hariIndonesia[waktu.getDay()];
    var bulanIndonesia = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var bulan = bulanIndonesia[waktu.getMonth()];
    var tahun = waktu.getFullYear();
    document.write(hari + ", " +  tanggal + " " + bulan + " " + tahun);
}