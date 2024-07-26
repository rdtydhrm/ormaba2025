export default function getMentor(group) {
    // "Mulawarman", "Purnawarman", "Ratu_Shima", "Jayabaya", "Kertanegara", "Hayam_Wuruk", "Gajayana", "Udayana"
    switch (group) {
        case "Mulawarman":
            return mentor1
        case "Purnawarman":
            return mentor2
        case "Ratu_Shima":
            return mentor3
        case "Jayabaya":
            return mentor4
        case "Kertanegara":
            return mentor5
        case "Hayam_Wuruk":
            return mentor6
        case "Gajayana":
            return mentor7
        case "Udayana":
            return mentor8
        default:
            return "Kosong"
    }
}

const mentor1 = {
    nama: 'Meisya',
    fakultas: '-',
    jurusan: '-',
    nomor: '-',
    instagram: '-',
    image: '/mentor1.jpg',
}

const mentor2 = {
    nama: 'Gusti Ayu Putu Madhu Sudhani',
    fakultas: 'Fakultas Ilmu Administrasi',
    jurusan: 'Administrasi Publik',
    nomor: '081399965115',
    instagram: '@putz.sh',
    image: '/mentor2.jpg',
}

const mentor3 = {
    nama: 'Dea Laurentina',
    fakultas: 'Fakultas Pertanian',
    jurusan: 'Agribisnis',
    nomor: '085258161555',
    instagram: '@dealaurrennt_',
    image: '/mentor3.jpg',
}

const mentor4 = {
    nama: 'Ida Ayu Putu Wulan Maharani',
    fakultas: 'Fakultas Ilmu Sosial dan Ilmu Politik',
    jurusan: 'Ilmu Komunikasi',
    nomor: '081999112478',
    instagram: '@dayuwulanm',
    image: '/mentor4.jpg',
}

const mentor5 = {
    nama: 'Ni Luh Sari Nadi',
    fakultas: 'Fakultas Vokasi',
    jurusan: 'Manajemen Perhotelan',
    nomor: '08873570269',
    instagram: '@sariiinadiii_',
    image: '/mentor5.jpg',
}

const mentor6 = {
    nama: 'Putu Sri Adhi Darsana',
    fakultas: 'Fakultas Teknik',
    jurusan: 'Teknik Sipil',
    nomor: '082113167442',
    instagram: '@adhi_darsana19',
    image: '/mentor6.jpg',
}

const mentor7 = {
    nama: 'I Gede Bagus Kusumayudha Aryantha W.',
    fakultas: 'Fakultas Teknik',
    jurusan: 'Teknik Pengairan',
    nomor: '087861685666',
    instagram: '@bagus_kusumayudha',
    image: '/mentor7.jpg',
}

const mentor8 = {
    nama: 'Kardiantono',
    fakultas: 'Fakultas Pertanian',
    jurusan: 'Agroteknologi',
    nomor: '085287237377',
    instagram: '@kardiantamber',
    image: '/mentor8.jpg',
}

