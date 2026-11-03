// All invitation content lives here so names, dates and places can be changed in one spot.
export const invite = {
  bride: "Grace",
  brideParents: "Mr. & Mrs. Thomas Mathew",
  brideFamily: "The Mathew Family",
  groom: "Daniel",
  groomParents: "Mr. & Mrs. George Joseph",
  groomFamily: "The Joseph Family",
  verse: "Love is patient, love is kind… it always protects, always trusts, always hopes, always perseveres.",
  verseRef: "1 Corinthians 13:4–7",
  // Ceremony date & time (India Standard Time)
  dateISO: "2027-02-13T16:00:00+05:30",
  dateLong: "February 13, 2027",
  dateShort: "13 · 02 · 2027",
  weekday: "Saturday",
  weekdayTime: "Saturday • 4:00 PM",
  timeWords: "Four o'clock in the evening",
  church: {
    name: "St. Mary's Basilica",
    city: "Secunderabad",
    address: "Sarojini Devi Road, Secunderabad, Telangana",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=St+Mary%27s+Basilica+Secunderabad",
  },
  schedule: [
    { time: "3:30 PM", title: "Guest Arrival" },
    { time: "4:00 PM", title: "Holy Matrimony" },
    { time: "5:15 PM", title: "Blessing & Photographs" },
    { time: "7:00 PM", title: "Reception Dinner" },
  ],
  dressCode: { title: "Ivory, Blush & Burgundy", note: "Formal attire" },
  festivities: [
    { name: "Betrothal", photo: "betrothal", when: "Saturday, Feb 6 • 11:00 AM", where: "St. Mary's Parish Hall", mapsUrl: "https://www.google.com/maps/search/?api=1&query=St+Mary%27s+Basilica+Secunderabad" },
    { name: "Rehearsal Dinner", photo: "rehearsal", when: "Friday, Feb 12 • 7:30 PM", where: "The Bride's Residence", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad" },
    { name: "Wedding Reception", photo: "reception", when: "Saturday, Feb 13 • 7:00 PM", where: "The Rose Garden, Hyderabad", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rose+Garden+Hyderabad" },
  ],
  closingMessage:
    "With hearts full of gratitude to God, we warmly invite you to share in the joy of our wedding day. Your presence and your prayers are the most precious gifts we could receive.",
} as const;
