// TODO: SWITCH 1 7
export default function getMentor(group) {
    switch (group) {
        case "Kelompok 7":
            return mentor1
        case "Kelompok 2":
            return mentor2
        case "Kelompok 3":
            return mentor3
        case "Kelompok 4":
            return mentor4
        case "Kelompok 5":
            return mentor5
        case "Kelompok 6":
            return mentor6
        case "Kelompok 1":
            return mentor7
        case "Kelompok 8":
            return mentor8
        default:
            return "error"
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

