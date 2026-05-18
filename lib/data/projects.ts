export type ShowcaseProject = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
};

/** Add new projects here — the page renders this list automatically. */
export const projects: ShowcaseProject[] = [
  {
    id: "farm-map",
    title: "Thailand Farm Map",
    description:
      "เว็บแผนที่ฟาร์มเลี้ยงสัตว์ในไทย — ดูบนแผนที่ รายการ และแดชบอร์ด; admin เพิ่ม/แก้ไขข้อมูลได้ (Full-stack Next.js + แผนที่ Leaflet + RBAC)",
    url: "https://farm-map-swart.vercel.app/farm-map",
    tags: ["Next.js 14", "Leaflet", "PostgreSQL", "NextAuth", "RBAC"],
  },
  {
    id: "fake-data-generator",
    title: "Fake Data Generator",
    description:
      "สร้างข้อมูลบุคคลจำลอง TH / US / JP + export CSV แบบ bulk — Google login, แผน Pro ผ่าน Stripe (freemium + Luhn validation)",
    url: "https://fake-data-generator-gules.vercel.app/",
    tags: ["Next.js 16", "TypeScript", "Neon", "Stripe", "Faker.js"],
  },
  {
    id: "medical-expenses",
    title: "Medical Expenses",
    description:
      "อัปโหลดใบเสร็จค่ารักษา → OCR แนะนำวันที่/ยอด → ยืนยันแล้วบันทึก (parser ใบเสร็จไทย พ.ศ./เดือนไทย)",
    url: "https://medical-expenses-ruby.vercel.app/",
    tags: ["Next.js 16", "Prisma", "Tesseract.js", "PostgreSQL", "Tailwind"],
  },
  {
    id: "cv",
    title: "CV (Web)",
    description: "Online CV with download and professional profile layout.",
    url: "/",
    tags: ["Next.js", "React", "Vercel"],
  },
  {
    id: "resume",
    title: "Resume",
    description:
      "Resume portfolio highlighting experience, tech stack, and featured projects.",
    url: "https://resume-chi-pink.vercel.app/",
    tags: ["Portfolio", "Vercel"],
  },
];
