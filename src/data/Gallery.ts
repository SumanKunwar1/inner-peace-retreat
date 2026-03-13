// ─── HOW TO ADD MEDIA ─────────────────────────────────────────────────────────
// Just add one line inside the retreat's items array:
//   media("image", "https://res.cloudinary.com/.../photo.jpg", "Caption here"),
//   media("video", "https://res.cloudinary.com/.../video.mp4", "Caption here"),
// Thumbnails are auto-generated from Cloudinary. Caption is optional.
// ──────────────────────────────────────────────────────────────────────────────

export type MediaItem = {
  type: "image" | "video";
  src: string;
  thumb: string;
  caption: string;
};

export type Retreat = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  coverImage: string;
  totalMedia: number;
  upcoming: boolean;
  media: MediaItem[];
};

// Auto-generates a fast-loading Cloudinary thumbnail
function cloudinaryThumb(url: string): string {
  return url.replace("/upload/", "/upload/w_400,h_280,c_fill,q_auto/");
}

// Simple builder — type + url + optional caption
function media(type: "image" | "video", url: string, caption = ""): MediaItem {
  return {
    type,
    src: url,
    thumb: type === "image" ? cloudinaryThumb(url) : url,
    caption,
  };
}

// ─── 1ST RETREAT — add more lines below ──────────────────────────────────────

const retreat1Items: MediaItem[] = [
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395767/WhatsApp_Image_2026-03-12_at_22.03.40_1_ishsqm.jpg", "Opening ceremony blessings"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395764/WhatsApp_Image_2026-03-12_at_22.03.36_afl6jk.jpg", "Sacred Avalokiteshvara"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395765/WhatsApp_Image_2026-03-12_at_22.03.37_1_q6hmqb.jpg", "Monastery venue"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395232/WhatsApp_Image_2026-03-12_at_22.03.34_gim4za.jpg", "Group meditation session"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395122/WhatsApp_Image_2026-03-12_at_22.03.27_f6ovzx.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392506/WhatsApp_Image_2026-03-12_at_22.01.39_oxg2hr.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392506/WhatsApp_Image_2026-03-12_at_22.01.37_hmezs6.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392506/WhatsApp_Image_2026-03-12_at_22.01.37_hmezs6.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392505/WhatsApp_Image_2026-03-12_at_22.01.36_2_oluwb6.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.35_1_fonvhx.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392505/WhatsApp_Image_2026-03-12_at_22.01.35_ldit0w.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.32_h7tjvw.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.27_noj7el.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.27_noj7el.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.29_medmdx.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392504/WhatsApp_Image_2026-03-12_at_22.01.32_1_e7vklu.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392502/WhatsApp_Image_2026-03-12_at_22.01.52_1_jg026a.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392503/WhatsApp_Image_2026-03-12_at_22.01.22_lj9m1r.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392503/WhatsApp_Image_2026-03-12_at_22.01.20_h8jmev.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392507/WhatsApp_Image_2026-03-12_at_22.02.17_g186uq.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773394964/WhatsApp_Image_2026-03-12_at_22.03.18_ynkhku.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773394964/WhatsApp_Image_2026-03-12_at_22.03.20_mloa5r.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773394965/WhatsApp_Image_2026-03-12_at_22.03.23_cy7t9i.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392502/WhatsApp_Image_2026-03-12_at_22.01.52_1_jg026a.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392502/WhatsApp_Image_2026-03-12_at_22.01.19_lkjcrs.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392501/WhatsApp_Image_2026-03-12_at_22.01.17_gq9lnk.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392501/WhatsApp_Image_2026-03-12_at_22.01.50_scsijo.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392501/WhatsApp_Image_2026-03-12_at_22.01.16_pfshsx.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392500/WhatsApp_Image_2026-03-12_at_22.01.49_rgvk8a.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392500/WhatsApp_Image_2026-03-12_at_22.01.15_hkpjgx.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392499/WhatsApp_Image_2026-03-12_at_22.01.47_fudijz.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392497/WhatsApp_Image_2026-03-12_at_22.01.43_hmdgqc.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392497/WhatsApp_Image_2026-03-12_at_22.02.14_ztevna.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392497/WhatsApp_Image_2026-03-12_at_22.02.14_ztevna.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392496/WhatsApp_Image_2026-03-12_at_22.01.59_1_igmqj3.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392494/WhatsApp_Image_2026-03-12_at_22.02.11_ftyaci.jpg", "puja ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392495/WhatsApp_Image_2026-03-12_at_22.02.13_1_c5r7hb.jpg", "puja ceremony"),


  // ↓ paste more lines here ↓
];
const retreat1Items1: MediaItem[] = [
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401235/605779978_1452070856921774_2860291993757863970_n_jstejr.jpg", "Opening ceremony blessings"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401236/606849374_1452482970213896_2255864875050454626_n_vunsge.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401235/605779978_1452070856921774_2860291993757863970_n_jstejr.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401233/602467172_1450947403700786_6345780791494086576_n_atwhwf.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401233/605640257_1450945253701001_3647812183926003791_n_ont66a.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401694/611400072_1456735966455263_6192969719513549766_n_h3ezsh.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401692/611658712_1456735216455338_8177390119516381242_n_rj2xsw.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401695/610981210_1456736233121903_8755811424107651616_n_xm7cgq.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401689/609154300_1455972696531590_1439849766574434061_n_k29b26.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401690/611540303_1456734636455396_6495318545932289348_n_lvuthz.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401691/611256019_1455974053198121_286503365169557168_n_kekoj3.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401687/609190263_1455100763285450_8616774799442218248_n_ndtw7b.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401691/610981209_1456734926455367_2718575569941092224_n_alco1k.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401691/611179842_1456734969788696_193830444086146794_n_ekun0r.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401686/605563481_1454738619988331_1583613585807549418_n_wucnme.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401685/610822570_1454738059988387_1021701386557795968_n_kp1r7m.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401686/608879368_1455100469952146_1305388830491721868_n_rfn3s9.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401685/607703821_1454738046655055_8806402092549061927_n_e1yxl2.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401686/608798458_1455099959952197_1203699209560123738_n_zgxuah.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401683/605681654_1454115286717331_3102366469520697054_n_x90cgd.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401682/605533688_1454111736717686_8368238380984148148_n_bi3yzn.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401682/607197527_1453891703406356_2410901539870169997_n_soj6jx.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401682/607663870_1454113540050839_8240398149476959776_n_f6aqf9.jpg", "Puja Ceremony"),
  media("image", "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401681/605693533_1454317103363816_7384470279759824245_n_h1hb79.jpg", "Puja Ceremony"),


]

// ─── RETREATS ─────────────────────────────────────────────────────────────────

export const retreats: Retreat[] = [
  {
    id: 1,
    title: "1st International Ngyungne",
    subtitle: "A sacred beginning",
    date: "December 2024",
    location: "Kathmandu, Nepal",
    coverImage: "https://res.cloudinary.com/dihev9qxc/image/upload/v1773392497/WhatsApp_Image_2026-03-12_at_22.02.16_fyjryi.jpg",
    totalMedia: retreat1Items.length,
    upcoming: false,
    media: retreat1Items,
  },
  {
    id: 2,
    title: "2nd International Ngyungne",
    subtitle: "1st Potala World Peace Prayers &",
    date: "December 28, 2025 – January 4, 2026",
    location: "Kathmandu, Nepal",
    coverImage: "https://res.cloudinary.com/dihev9qxc/image/upload/v1773401232/600245919_1438468208282039_3734908822775910591_n_nzz7sl.jpg",
    totalMedia: retreat1Items1.length,
    upcoming: false,
    media: retreat1Items1,
  },
   {
    id: 3,
    title: "3rd International Ngyungne Retreat",
    subtitle: "2nd Potala World Peace Prayers &",
    date: "08-24 December, 2026",
    location: "Kathmandu, Nepal",
    coverImage: "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395767/WhatsApp_Image_2026-03-12_at_22.03.40_1_ishsqm.jpg",
    totalMedia: 0,
    upcoming: true,
    media: [],
  },
  
];