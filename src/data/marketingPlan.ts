export interface MemberPackage {
  id: 'ruby' | 'sapphire' | 'diamond';
  name: string;
  boxCount: number;
  bv: number; // Bonus Volume
  estimatedPrice: number; // in IDR
  dailyMaxPairs: number;
  maxDailyIncome: number; // in IDR
  maxMonthlyIncome: number; // in IDR
  sponsorBonusRuby: number;
  sponsorBonusSapphire: number;
  sponsorBonusDiamond: number;
  passUpEligible: boolean;
  highlight?: boolean;
}

export const MEMBER_PACKAGES: MemberPackage[] = [
  {
    id: 'ruby',
    name: 'Ruby Package',
    boxCount: 2,
    bv: 150,
    estimatedPrice: 3600000,
    dailyMaxPairs: 10,
    maxDailyIncome: 1500000,
    maxMonthlyIncome: 45000000,
    sponsorBonusRuby: 300000,
    sponsorBonusSapphire: 900000,
    sponsorBonusDiamond: 1800000,
    passUpEligible: false,
    highlight: false
  },
  {
    id: 'sapphire',
    name: 'Sapphire Package',
    boxCount: 6,
    bv: 450,
    estimatedPrice: 10800000,
    dailyMaxPairs: 60,
    maxDailyIncome: 7000000,
    maxMonthlyIncome: 210000000,
    sponsorBonusRuby: 450000,
    sponsorBonusSapphire: 1350000,
    sponsorBonusDiamond: 2700000,
    passUpEligible: false,
    highlight: false
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    boxCount: 12,
    bv: 900,
    estimatedPrice: 21600000,
    dailyMaxPairs: 200,
    maxDailyIncome: 22000000,
    maxMonthlyIncome: 660000000,
    sponsorBonusRuby: 550000,
    sponsorBonusSapphire: 1650000,
    sponsorBonusDiamond: 3300000,
    passUpEligible: true,
    highlight: true
  }
];

export interface YearlyRank {
  rankName: string;
  japaneseTitle: string;
  pairTarget: number;
  cashReward: number; // in IDR
  description: string;
  badgeColor: string;
}

export const YEARLY_RANKS: YearlyRank[] = [
  {
    rankName: 'Toreda',
    japaneseTitle: '取手 (Toreda)',
    pairTarget: 100,
    cashReward: 5000000,
    description: 'Peringkat awal kepemimpinan dengan akumulasi 100 pasang dalam 1 tahun kalender.',
    badgeColor: 'border-stone-400 bg-stone-100 text-stone-800'
  },
  {
    rankName: 'Ronin',
    japaneseTitle: '浪人 (Ronin)',
    pairTarget: 500,
    cashReward: 25000000,
    description: 'Akumulasi 500 pasang. Memperkuat pondasi tim kiri dan kanan dengan pembinaan konsisten.',
    badgeColor: 'border-blue-400 bg-blue-50 text-blue-900'
  },
  {
    rankName: 'Samurai',
    japaneseTitle: '侍 (Samurai)',
    pairTarget: 1000,
    cashReward: 75000000,
    description: 'Akumulasi 1.000 pasang. Gelar ksatria pebisnis dengan stabilitas passive income solid.',
    badgeColor: 'border-emerald-500 bg-emerald-50 text-emerald-900'
  },
  {
    rankName: 'Shogun',
    japaneseTitle: '将軍 (Shogun)',
    pairTarget: 5000,
    cashReward: 575000000,
    description: 'Akumulasi 5.000 pasang. Jenderal pemimpin organisasi besar dengan reward tunai lebih dari setengah miliar.',
    badgeColor: 'border-amber-500 bg-amber-50 text-amber-950'
  },
  {
    rankName: 'Daimyo',
    japaneseTitle: '大名 (Daimyo)',
    pairTarget: 10000,
    cashReward: 1575000000,
    description: 'Akumulasi 10.000 pasang. Penguasa wilayah dengan reward spektakuler senilai 1,575 Miliar Rupiah.',
    badgeColor: 'border-purple-500 bg-purple-50 text-purple-950'
  },
  {
    rankName: 'Bushido',
    japaneseTitle: '武士道 (Bushido)',
    pairTarget: 20000,
    cashReward: 3075000000,
    description: 'Puncak kepemimpinan tertinggi dalam 1 tahun dengan reward lebih dari 3 Miliar Rupiah cash.',
    badgeColor: 'border-red-600 bg-red-50 text-red-950'
  }
];

export const MARKETING_PLAN_ADVANTAGES = [
  {
    title: 'Pembayaran Bonus Harian (Daily Payout)',
    desc: 'Bonus sponsor, bonus pairing, dan bonus pass up dihitung harian dan dapat dicairkan setiap hari kerja tanpa menunggu akhir bulan.'
  },
  {
    title: 'Sistem Akumulasi Tanpa Batas Waktu untuk Upgrade',
    desc: 'Anda dapat memulai dari paket Ruby (2 box), lalu bebas meng-upgrade ke Sapphire atau Diamond kapan saja cukup dengan membeli sisa kekurangannya tanpa reset poin.'
  },
  {
    title: 'Hak Pass Up Bonus Hanya Untuk Diamond',
    desc: 'Jika downline berperingkat Ruby/Sapphire merekrut member baru, selisih bonus sponsor otomatis mengalir naik ke upline Diamond terdekat.'
  },
  {
    title: 'Sistem Binary 2 Kaki yang Adil & Simpel',
    desc: 'Cukup bangun 2 tim (Tim Kiri dan Tim Kanan). Spillover dari tim atas turut membantu volume pasangan Anda.'
  },
  {
    title: 'Poin Pasangan Tidak Hangus (Carry Forward)',
    desc: 'Sisa omset BV pada kaki besar tidak akan hangus (flush), melainkan disimpan dan diakumulasikan untuk dipasangkan di hari berikutnya.'
  },
  {
    title: 'Bisnis Dapat Diwariskan',
    desc: 'Akun kemitraan AFC Life Science beserta seluruh royalti bonus dan jaringannya sah dapat diwariskan kepada anak atau ahli waris keluarga.'
  }
];
