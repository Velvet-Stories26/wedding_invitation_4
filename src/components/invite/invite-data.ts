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
    name: "St. John Of The Cross Church Siluvaipuram",
    mapsUrl: "https://maps.app.goo.gl/KSmK5zasWSW7gxdX9?g_st=aw",
  },
  schedule: [
  {
    time: "11:00 AM",
    title: "Wedding Procession",
    description: "The bride and groom arrive, followed by the exchange of bouquets and a warm welcome."
  },
  {
    time: "11:05 AM",
    title: "Opening Ceremony",
    description: "A beautiful beginning with an opening prayer and blessings for the couple."
  },
  {
    time: "11:10 AM",
    title: "Holy Mass & Matrimony",
    description: "Join us for the sacred wedding Mass, exchange of vows, and the blessing of the newlyweds."
  },
  {
    time: "12:15 PM",
    title: "Photography",
    description: "Capture precious memories with the newlyweds, family, and friends."
  },
  {
    time: "12:45 PM",
    title: "Wedding Reception",
    description: "Celebrate the beginning of their new journey with love, joy, and togetherness."
  }
],
  festivities: [
    {
      name: "Engagement",
      photo: "engagement",
      when: "Sunday, December 20, 2026",
      where: "SM Convention Center Pozhiyoor Kollecode",
      mapsUrl: "https://maps.app.goo.gl/AQ9eCAJ66FEd8Ug37?g_st=aw",
    },
    {
      name: "Marriage",
      photo: "marriage",
      when: "Tuesday, December 22, 2026",
      where: "St. John Of The Cross Church Siluvaipuram",
      mapsUrl: "https://maps.app.goo.gl/KSmK5zasWSW7gxdX9?g_st=aw",
    },
  ],
  closingMessage: "We look forward to celebrating these special days with you.",
  bestWishes: ["Gogan", "Lintu", "Iniya"],
} as const;
