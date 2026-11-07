// All invitation content lives here so names, dates and places can be changed in one spot.
export const invite = {
  bride: "Akila Antony",
  brideParents: "Mr. Antony / Mrs. Lueis Mary",
  brideFamily: "Akila's Family",
  groom: "Michael Antony",
  groomParents: "Mr. Siluvai Antony / Mrs. Shyla Antony",
  groomFamily: "Michael's Family",
  verse:
    "Love is patient, love is kind… it always protects, always trusts, always hopes, always perseveres.",
  verseRef: "1 Corinthians 13:4–7",
  dateISO: "2026-12-22T00:00:00+05:30",
  dateLong: "Tuesday, December 22, 2026",
  dateShort: "22 · 12 · 2026",
  dateDisplay: "Dec 22, 2026",
  church: {
    name: "The Church",
    mapsUrl: "https://maps.app.goo.gl/KSmK5zasWSW7gxdX9?g_st=aw",
  },
  schedule: [
    { time: "December 20, 2026", title: "Engagement" },
    { time: "December 22, 2026", title: "Marriage" },
  ],
  dressCode: { title: "Ivory, Blush & Burgundy", note: "Formal attire" },
  festivities: [
    {
      name: "Engagement",
      photo: "betrothal",
      when: "Sunday, December 20, 2026",
      where: "Engagement Hall",
      mapsUrl: "https://maps.app.goo.gl/AQ9eCAJ66FEd8Ug37?g_st=aw",
    },
    {
      name: "Marriage",
      photo: "reception",
      when: "Tuesday, December 22, 2026",
      where: "The Church",
      mapsUrl: "https://maps.app.goo.gl/KSmK5zasWSW7gxdX9?g_st=aw",
    },
  ],
  closingMessage: "We look forward to celebrating these special days with you.",
  bestWishes: ["Gogan", "Lintu", "Iniya"],
} as const;
