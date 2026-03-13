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
  media("image", "", "Opening ceremony blessings"),
  media("image", "", "Puja Ceremony"),

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
    subtitle: "Deepening the practice",
    date: "December 28, 2025 – January 4, 2026",
    location: "Kathmandu, Nepal",
    coverImage: "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395767/WhatsApp_Image_2026-03-12_at_22.03.40_1_ishsqm.jpg",
    totalMedia: 0,
    upcoming: true,
    media: [],
  },
  {
    id: 3,
    title: "2nd International Ngyungne",
    subtitle: "Deepening the practice",
    date: "December 28, 2025 – January 4, 2026",
    location: "Kathmandu, Nepal",
    coverImage: "https://res.cloudinary.com/dihev9qxc/image/upload/v1773395767/WhatsApp_Image_2026-03-12_at_22.03.40_1_ishsqm.jpg",
    totalMedia: 0,
    upcoming: false,
    media: [],
  },
];