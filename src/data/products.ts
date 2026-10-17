export interface AFCProduct {
  id: string;
  name: string;
  japaneseName: string;
  category: 'cellular' | 'immunity' | 'brain-vision' | 'skincare';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  bpomNumber: string;
  halalStatus: string;
  mimsListed: boolean;
  boxContents: string;
  officialPrice: number; // in IDR
  bv: number; // Nilai Bonus (BV)
  patents: {
    number: string;
    title: string;
    description: string;
  }[];
  keyIngredients: string[];
  mainBenefits: string[];
  consumptionGuide: {
    timing: string;
    method: string;
    dosage: string;
  };
  suitableFor: string[];
}

export const AFC_PRODUCTS: AFCProduct[] = [
  {
    id: 'subarashi-classic',
    name: '1 Box SUBARASHI',
    japaneseName: 'SOP SUBARASHI マリンプラセンタ',
    category: 'cellular',
    categoryLabel: 'Regenerasi Sel & Pembuluh Darah',
    tagline: 'Inovasi Marine Placenta Oncorhynchus Keta Salmon Asli Hokkaido',
    description: 'SOP Subarashi memadukan Marine Placenta (Salmon Ovary Peptide) dari Hokkaido, Sardine Peptide, dan Fruitflow Vegan Peptide. Teruji secara klinis merangsang stem cell alami tubuh, memperlancar aliran darah perifer, serta meregenerasi sel-sel organ yang mengalami degenerasi.',
    image: '/src/assets/images/subarashi_classic_blue_1792238608206.jpg',
    bpomNumber: 'BPOM RI ML 830531010224',
    halalStatus: 'Halal Certified (Japan & MUI Recognized)',
    mimsListed: true,
    boxContents: '1 Box isi 28 sachet powder (@3.5g)',
    officialPrice: 1800000,
    bv: 75,
    patents: [
      {
        number: 'JP-3946238',
        title: 'Cell Regeneration Effect',
        description: 'Membantu meregenerasi sel-sel tubuh yang rusak dan mengaktifkan stem cell alami.'
      },
      {
        number: 'JP-3946239',
        title: 'Improvement of Peripheral Blood Circulation',
        description: 'Membantu melancarkan sirkulasi peredaran darah mikro hingga ke ujung saraf.'
      },
      {
        number: 'JP-4221841',
        title: 'Anti-Hypertensive Agent',
        description: 'Membantu menstabilkan dan menjaga tekanan darah normal tubuh.'
      },
      {
        number: 'JP-5456480',
        title: 'Inhibiting Blood Clot (Anti-Thrombosis)',
        description: 'Membantu mencegah pembekuan dan penggumpalan darah pemicu stroke & serangan jantung.'
      }
    ],
    keyIngredients: [
      'Marine Placenta (Salmon Ovary Peptide Oncorhynchus Keta)',
      'Sardine Peptide (Oligopeptide bioaktif laut)',
      'Fruitflow (Vegan Peptide Ekstrak Biji Tomat Inggris)',
      'Glutathione (Master of Antioxidants)',
      'Collagen Peptides laut dalam',
      'Chondroitin, Elastin, & Hyaluronic Acid'
    ],
    mainBenefits: [
      'Merangsang peremajaan & regenerasi sel tubuh secara menyeluruh',
      'Membantu pencegahan penyumbatan pembuluh darah & stroke',
      'Membantu stabilitas tekanan darah dan kesehatan kardiovaskular',
      'Mendukung perbaikan jaringan pankreas pada penderita diabetes',
      'Meningkatkan vitalitas fisik, mengurangi kelelahan kronis'
    ],
    consumptionGuide: {
      timing: 'Pagi hari (bangun tidur) atau sore sebelum makan',
      method: 'Tuang bubuk di bawah lidah (Sublingual) sedikit demi sedikit, biarkan larut alami oleh air liur, lalu minum 1 gelas air hangat.',
      dosage: '1 - 2 sachet per hari untuk pemeliharaan, 2 - 4 sachet per hari untuk terapi intensif'
    },
    suitableFor: [
      'Masalah jantung, stroke, & hipertensi',
      'Penderita diabetes & gangguan gula darah',
      'Pemulihan pasca operasi atau sakit kronis',
      'Pria/wanita usia 30+ yang ingin awet muda & sel tubuh prima'
    ]
  },
  {
    id: 'subarashi-gold',
    name: '1x SUBARASHI GOLD (Versi 2.0)',
    japaneseName: 'SOP SUBARASHI 素晴らしい 2.0 VERSION',
    category: 'cellular',
    categoryLabel: 'Formula Emas 2.0 Terbaru',
    tagline: 'Penyempurnaan Formula Peptida Generasi 2.0 dengan Bioavailabilitas Lebih Tinggi',
    description: 'Subarashi Gold Versi 2.0 adalah formulasi termutakhir dari AFC Japan dengan konsentrasi Salmon Ovary Peptide yang ditingkatkan serta absorpsi seluler yang lebih cepat untuk pemulihan dan proteksi kardiovaskular maksimal.',
    image: '/src/assets/images/subarashi_gold_v2_1792238606686.jpg',
    bpomNumber: 'BPOM RI ML 830531010224',
    halalStatus: 'Halal Certified (Japan & MUI Recognized)',
    mimsListed: true,
    boxContents: '1 Box isi 28 sachet powder (@3.5g)',
    officialPrice: 2000000,
    bv: 75,
    patents: [
      {
        number: 'JP-3946238',
        title: 'Enhanced Cell Regeneration',
        description: 'Membantu regenerasi sel organ vital secara lebih intensif.'
      },
      {
        number: 'JP-3946239',
        title: 'Micro-Vascular Circulation Improvement',
        description: 'Memperbaiki elastisitas dan kelancaran aliran darah mikro.'
      },
      {
        number: 'JP-4221841',
        title: 'Cardiovascular Support & Blood Pressure Stabilization',
        description: 'Menjaga elastisitas dinding arteri dan tekanan darah stabil.'
      }
    ],
    keyIngredients: [
      'Concentrated Marine Placenta Hokkaido',
      'Double Sardine Peptide Complex',
      'Fruitflow II Enhanced Extract',
      'Marine Elastin & Nano Collagen',
      'Pure L-Glutathione Kohjin Japan'
    ],
    mainBenefits: [
      'Formula 2.0 dengan daya serap seluler lebih cepat',
      'Mempercepat pemulihan organ pasca sakit atau kelelahan kronis',
      'Optimalisasi sirkulasi oksigen dan nutrisi ke seluruh organ tubuh',
      'Mendukung perbaikan kelenturan pembuluh darah'
    ],
    consumptionGuide: {
      timing: 'Pagi hari saat perut kosong bangun tidur',
      method: 'Konsumsi secara sublingual di bawah lidah secara bertahap.',
      dosage: '1 - 2 sachet per hari'
    },
    suitableFor: [
      'Kebutuhan terapi pemulihan yang lebih cepat',
      'Pria/wanita yang memiliki mobilitas dan stres fisik tinggi',
      'Menjaga kesehatan jantung dan pembuluh darah jangka panjang'
    ]
  },
  {
    id: 'utsukushhii-gold-v2',
    name: 'UTSUKUSHHII GOLD Versi 2.0',
    japaneseName: 'UTSUKUSHHII 美しさ 2.0 VERSION',
    category: 'immunity',
    categoryLabel: 'Imunitas Tubuh & Kesehatan Usus 2.0',
    tagline: 'Kombinasi DNA Salmon Milt, Takara Kombu Fucoidan & Triple Probiotik 1 Triliun',
    description: 'Utsukushhii Gold Versi 2.0 dalam kemasan eksklusif burgundy-emas diformulasikan untuk memperkuat imunitas level tertinggi (aktivasi sel pembunuh alami / NK Cells), meremajakan saluran cerna, membersihkan plak usus besar, serta mencerahkan dan meremajakan kulit dari dalam.',
    image: '/src/assets/images/utsukushhii_gold_v2_1792238607260.jpg',
    bpomNumber: 'BPOM RI ML 867031008219',
    halalStatus: 'Halal Certified (Japan & MUI Recognized)',
    mimsListed: true,
    boxContents: '1 Box isi 28 sachet powder (@2.5g)',
    officialPrice: 1850000,
    bv: 75,
    patents: [
      {
        number: 'JP-3029961',
        title: 'Anti-Tumor Agent',
        description: 'Membantu menekan pertumbuhan sel tumor dan sel abnormal dalam tubuh.'
      },
      {
        number: 'JP-3272023',
        title: 'Immune-Activating Properties',
        description: 'Meningkatkan aktivitas sel darah putih dan Natural Killer (NK) Cells melawan infeksi patogen.'
      },
      {
        number: 'JP-2712000',
        title: 'Therapeutic Agent on Hepatitis C',
        description: 'Membantu perbaikan fungsi organ hati dari kerusakan akibat virus dan toksin.'
      },
      {
        number: 'JP-3837588',
        title: 'Suppression of Toxic Substance & Gut Detox',
        description: 'Membersihkan racun dan plak kotoran di dinding usus besar.'
      }
    ],
    keyIngredients: [
      'Salmon DNA Milt (Nukleotida Murni)',
      'Takara Kombu Fucoidan Asli Jepang',
      'Triple Probiotics (1 Triliun Bakteri Baik Tahan Asam)',
      'Resveratrol & Grape Seed Extract',
      'Fish Collagen & L-Glutathione',
      'Kiwifruit Seed Extract'
    ],
    mainBenefits: [
      'Meningkatkan daya tahan tubuh melawan virus dan infeksi',
      'Membantu pencegahan dan terapi pendukung tumor/kista',
      'Menyehatkan mikroflora usus dan meredakan GERD/maag kronis',
      'Detoksifikasi saluran pencernaan dari penumpukan racun',
      'Mencerahkan kulit, mengurangi jerawat, dan meratakan tekstur wajah'
    ],
    consumptionGuide: {
      timing: 'Siang hari setelah makan atau malam sebelum tidur',
      method: 'Taburkan langsung di bawah lidah secara perlahan atau larutkan ke dalam 50ml air suhu ruang.',
      dosage: '1 sachet per hari untuk daya tahan tubuh, 2 - 3 sachet per hari untuk terapi intensif'
    },
    suitableFor: [
      'Orang yang sering sakit atau daya tahan tubuh drop',
      'Penderita GERD, maag, sembelit, atau radang usus',
      'Pasien tumor, kista, miom, atau pemulihan kemoterapi',
      'Ingin kulit bersih berseri, glowing alami dari dalam'
    ]
  },
  {
    id: 'hikari',
    name: '1 Box HIKARI',
    japaneseName: 'HIKARI ひかり Made in Japan',
    category: 'brain-vision',
    categoryLabel: 'Kesehatan Mata & Fungsi Kognitif',
    tagline: 'Nutrisi Peptida Vegan Pertama di Indonesia untuk Ketajaman Mata & Otak',
    description: '1 Box Hikari hadir dalam kemasan elegan champagne floral dengan kandungan Marigold Peptide (Lutein & Zeaxanthin), Spearmint Peptide terstandarisasi Neumentix™, dan Mango Leaf Peptide Zynamite®. Melindungi retina dari sinar biru gawai dan meningkatkan konsentrasi otak.',
    image: '/src/assets/images/hikari_box_official_1792238607756.jpg',
    bpomNumber: 'BPOM RI ML 867031001224',
    halalStatus: 'Halal Certified (100% Plant-Based Vegan)',
    mimsListed: true,
    boxContents: '1 Box isi 30 sachet powder berry taste',
    officialPrice: 1800000,
    bv: 75,
    patents: [
      {
        number: 'US-9226944',
        title: 'Cognitive Function & Memory Enhancement',
        description: 'Meningkatkan daya ingat jangka pendek dan fokus kerja otak.'
      },
      {
        number: 'JP-6272580',
        title: 'Retinal Protection from High-Energy Blue Light',
        description: 'Melindungi sel fotoreseptor retina mata dari kerusakan radiasi layar gawai.'
      },
      {
        number: 'EP-2900244',
        title: 'Neuroprotection & Visual Acuity Improvement',
        description: 'Mempertahankan ketajaman visual dan mencegah degenerasi makula terkait usia.'
      }
    ],
    keyIngredients: [
      'Marigold Peptide Extract (Lutein & Zeaxanthin)',
      'Spearmint Peptide (Neumentix™ Formula)',
      'Mango Leaf Peptide (Zynamite®)',
      'Blueberry & Acerola Extract (Vitamin C Alami)',
      'Inulin Prebiotic & L-Cysteine'
    ],
    mainBenefits: [
      'Meredakan mata kering, buram, dan lelah akibat radiasi layar',
      'Melindungi retina mata dari risiko penurunan ketajaman visual',
      'Meningkatkan konsentrasi, daya ingat, dan kejernihan berpikir',
      'Membantu anak-anak dalam proses belajar dan lansia dari pikun'
    ],
    consumptionGuide: {
      timing: 'Pagi hari sebelum beraktivitas atau bekerja',
      method: 'Ditaruh di bawah lidah atau dilarutkan dalam 50ml air dingin segar.',
      dosage: '1 sachet per hari untuk pencegahan, 2 sachet untuk terapi mata lelah'
    },
    suitableFor: [
      'Pekerja kantoran, programmer, dan gamer yang menatap layar berjam-jam',
      'Pelajar & mahasiswa yang butuh fokus tinggi',
      'Penderita mata minus, silinder, floaters, atau rabun',
      'Lansia yang mengalami penurunan daya ingat'
    ]
  },
  {
    id: 'sensei-suru',
    name: '1x Serum SENSEI SURU (ID)',
    japaneseName: '宣誓する Sensei Suru Nano-Peptide',
    category: 'skincare',
    categoryLabel: 'Serum Regeneratif 35 ml',
    tagline: 'Serum Regeneratif Pertama di Dunia dengan Marine Placenta, Salmon DNA & EGF Nobel 1986',
    description: 'Serum Sensei Suru (ID) hadir dalam kemasan botol kaca cobalt blue 35 ml eksklusif dari Jepang. Menggabungkan Marine Placenta, Salmon DNA, 53 Asam Amino Esensial, dan EGF (Epidermal Growth Factor). Meraih penghargaan Grand Gold Quality Award dari Monde Selection.',
    image: '/src/assets/images/sensei_suru_blue_bottle_1792238591438.jpg',
    bpomNumber: 'BPOM RI NA 22202000005',
    halalStatus: 'Telah teruji klinis dan bersertifikasi aman BPOM RI',
    mimsListed: false,
    boxContents: '1 Botol Kaca Cobalt Blue Dropper 35 ml',
    officialPrice: 3500000,
    bv: 150,
    patents: [
      {
        number: 'JP-3946238',
        title: 'Dermal Cellular Regeneration',
        description: 'Memicu pembentukan fibroblas kolagen baru pada jaringan kulit.'
      },
      {
        number: 'Nobel-1986',
        title: 'EGF (Epidermal Growth Factor) Technology',
        description: 'Formula peremajaan sel kulit berbasis penemuan peraih Nobel Kedokteran 1986.'
      },
      {
        number: 'JP-5942419',
        title: 'Dark Spot & Melanin Depigmentation',
        description: 'Menghambat pembentukan pigmen gelap flek hitam melasma dan bekas luka.'
      }
    ],
    keyIngredients: [
      'Marine Placenta (Salmon Ovary Peptide)',
      'Salmon Milt DNA (Deep Cellular Repair)',
      '53 Asam Amino Esensial & EGF Peptide',
      'Ceramide Complex (Skin Barrier Repair)',
      'Hyaluronic Acid 3 Ukuran Molekul',
      'Ekstrak Bunga Sakura & Anggur Hitam Jepang'
    ],
    mainBenefits: [
      'Menyamarkan kerutan halus dan garis senyum dalam hitungan minggu',
      'Membantu memudarkan flek hitam melasma yang membandel',
      'Mengencangkan kulit wajah yang mulai kendur',
      'Memperbaiki tekstur bopeng / bekas jerawat serta mengecilkan pori-pori',
      'Memberikan efek kulit glowing kenyal ala wanita Jepang tanpa pengelupasan agresif'
    ],
    consumptionGuide: {
      timing: 'Gunakan 2x sehari: pagi hari setelah cuci muka dan malam sebelum tidur',
      method: 'Teteskan 3-4 tetes serum ke telapak tangan, aplikasikan merata ke wajah dan leher sambil ditepuk-tepuk lembut hingga meresap sempurna.',
      dosage: '3-4 tetes per aplikasi'
    },
    suitableFor: [
      'Pria dan wanita usia 25+ yang ingin mencegah tanda penuaan dini',
      'Pemilik keluhan flek hitam, noda penuaan, dan warna kulit tidak merata',
      'Kulit kendur, kerutan di area mata dan dahi',
      'Kulit sensitif yang butuh perbaikan skin barrier mendalam'
    ]
  }
];

export const AFC_STATS = [
  { value: '1969', label: 'Tahun Berdiri', sub: 'Pabrik Farmasi AFC-HD AMS Life Science Co., Ltd. Shizuoka Jepang' },
  { value: '2927', label: 'JASDAQ Stock Code', sub: 'Perusahaan publik terdaftar di Bursa Efek Tokyo Jepang' },
  { value: '100%', label: 'Made in Japan', sub: 'Diimpor utuh langsung dari fasilitas pabrik berstandar GMP' },
  { value: '8+', label: 'Hak Paten Fungsi', sub: 'Telah teruji klinis dan dipatenkan secara resmi di Jepang & Internasional' },
];

export const AFC_CERTIFICATIONS = [
  {
    name: 'BPOM RI Resmi',
    code: 'ML 830531010224 / ML 867031008219 / ML 867031001224 / NA 22202000005',
    desc: 'Lolos uji keamanan pangan dan zat terlarang dari Badan Pengawas Obat dan Makanan Republik Indonesia.'
  },
  {
    name: 'Sertifikasi Halal',
    code: 'Japan Halal Association (JHA) & MUI Recognized',
    desc: 'Bahan baku suplemen tidak mengandung babi dan diproses sesuai syariat pangan halal internasional.'
  },
  {
    name: 'MIMS Listing',
    code: 'Monthly Index of Medical Specialities',
    desc: 'Tercatat dalam referensi resmi kedokteran dan farmasi internasional sebagai suplemen yang direkomendasikan medis.'
  },
  {
    name: 'Monde Selection',
    code: 'Grand Gold & Gold Quality Awards',
    desc: 'Pengakuan internasional atas kualitas formulasi, kemurnian bahan baku, dan keunggulan rasa dari Institut Kualitas Eropa.'
  },
  {
    name: 'GMP & ISO 9001',
    code: 'Good Manufacturing Practice',
    desc: 'Diproduksi di fasilitas steril bebas kontaminasi logam berat, radiasi nuklir, dan pestisida berbahaya.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Bapak Hendra Wijaya',
    age: '54 tahun',
    city: 'Surabaya',
    condition: 'Pemulihan Pasca Stroke Ringan & Tekanan Darah Tinggi',
    product: 'SOP Subarashi',
    comment: 'Setelah mengonsumsi SOP Subarashi 2 sachet per hari selama 2 bulan, tangan kanan saya yang sebelumnya kaku dan kebas mulai bisa digerakkan dengan lancar. Tekanan darah yang tadinya 160/100 kini stabil di 125/80. Produk resmi Jepang ini sangat luar biasa.',
    verifiedBuyer: true
  },
  {
    name: 'Ibu Ratna Susanti',
    age: '46 tahun',
    city: 'Jakarta Barat',
    condition: 'GERD Kronis & Lambung Sensitif',
    product: 'Utsukushhii Gold Version 2.0',
    comment: 'Sudah 3 tahun menderita asam lambung akut sampai sering sesak dan mual tiap malam. Rutin minum Utsukushhii Gold pagi dan malam, dalam 3 minggu perut terasa sangat nyaman, tidak begah lagi, dan kulit wajah saya juga terlihat jauh lebih segar dan tidak kusam.',
    verifiedBuyer: true
  },
  {
    name: 'dr. Satrio Pratama, Sp.PD (Review Mitra)',
    age: '42 tahun',
    city: 'Bandung',
    condition: 'Praktisi Medis & Edukator Kesehatan',
    product: 'SOP Subarashi & Hikari',
    comment: 'Yang membuat saya percaya dengan AFC adalah adanya Hak Paten Fungsi yang nyata (Bukan sekadar paten merk dagang) serta pencantuman di MIMS. Pasien lansia yang saya dampingi menunjukkan perbaikan sirkulasi darah dan saturasi oksigen yang lebih stabil.',
    verifiedBuyer: true
  },
  {
    name: 'Amanda Kusuma',
    age: '33 tahun',
    city: 'Medan',
    condition: 'Mata Lelah Digital & Flek Wajah Pasca Melahirkan',
    product: 'Hikari + Sensei Suru Serum',
    comment: 'Pekerjaan saya menatap laptop 10 jam sehari. Minum Hikari membuat mata tidak cepat merah dan sakit kepala berkurang drastis. Serum Sensei Suru juga ampuh memudarkan flek hitam di pipi setelah rutin 1 bulan pemakaian. Sangat worth it!',
    verifiedBuyer: true
  }
];

export const FAQS = [
  {
    q: 'Apakah produk AFC aman dikonsumsi jangka panjang?',
    a: 'Sangat aman. Produk AFC terbuat dari 100% bahan alami (bukan obat kimia sintetis) dan diproduksi oleh AFC-HD AMS Life Science Co., Ltd. Jepang yang telah berpengalaman sejak 1969. Telah lulus uji bebas zat berbahaya, logam berat, dan radiasi nuklir, serta terdaftar resmi di BPOM RI.'
  },
  {
    q: 'Mengapa SOP Subarashi dan Utsukushhii disarankan ditaruh di bawah lidah (Sublingual)?',
    a: 'Di bawah lidah manusia terdapat banyak pembuluh darah kapiler halus (mukosa sublingual). Dengan menaruh bubuk di bawah lidah, peptida bioaktif langsung diserap ke dalam aliran darah tanpa harus melewati asam lambung yang keras, sehingga efektivitas penyerapan (bioavailabilitas) menjadi berlipat ganda.'
  },
  {
    q: 'Apakah penderita maag / GERD aman mengonsumsi produk ini?',
    a: 'Aman. Khusus untuk penderita GERD atau maag akut, disarankan mengonsumsi Utsukushhii Gold 2.0 terlebih dahulu setelah makan ringan pada minggu pertama, lalu bertahap ke konsumsi sebelum makan setelah lambung terasa nyaman.'
  },
  {
    q: 'Bagaimana cara memastikan keaslian produk AFC yang saya beli?',
    a: 'Setiap produk asli AFC memiliki QR Code Barcode unik dan segel hologram resmi pada bagian kemasan luar. Barcode tersebut dapat dipindai secara digital untuk memverifikasi nomor batch dan keaslian distributor resmi. Jangan pernah tergiur harga murah di bawah ketetapan resmi AFC karena berisiko produk rekondisi/palsu.'
  },
  {
    q: 'Berapa lama rata-rata hasil mulai terasa?',
    a: 'Setiap individu memiliki metabolisme tubuh yang berbeda. Rata-rata perbaikan energi, sirkulasi darah, dan kualitas tidur mulai dirasakan dalam 7–14 hari pertama. Untuk perbaikan regenerasi seluler dan organ kronis, disarankan konsumsi teratur minimal 1–3 bulan.'
  },
  {
    q: 'Bagaimana proses pengiriman dan pemesanan?',
    a: 'Kami melayani pengiriman resmi ke seluruh wilayah Indonesia (JNE, SiCepat, Paxel, Grab/Gojek Instant untuk Jabodetabek). Paket dikemas dengan bubble wrap tebal dan asuransi penuh untuk menjamin produk tiba dalam kondisi sempurna.'
  }
];
