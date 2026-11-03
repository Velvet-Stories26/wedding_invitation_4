// All invitation content lives here so names, dates and places can be changed in one spot.
export const invite = {
  bride: "Aaysha",
  brideParents: "Mr. & Mrs. Abdul Rahman",
  groom: "Akif",
  groomParents: "Mr. & Mrs. Imran Siddiqui",
  // Nikah date & time (India Standard Time)
  dateISO: "2027-02-17T10:00:00+05:30",
  dateLong: "February 17, 2027",
  weekdayTime: "Wednesday • 10:00 AM",
  venue: {
    name: "The Noor Garden",
    city: "Hyderabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Noor+Garden+Hyderabad",
  },
  schedule: [
    { time: "9:30 AM", title: "Guest Arrival" },
    { time: "10:00 AM", title: "Nikah Ceremony" },
    { time: "11:15 AM", title: "Blessings" },
    { time: "12:30 PM", title: "Walima Luncheon" },
  ],
  dressCode: { title: "Pastels & Jewel Tones", note: "Traditional attire" },
  festivities: [
    { name: "Mehendi", when: "Feb 15 • 6:00 PM", where: "Bride's Residence", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad" },
    { name: "Haldi", when: "Feb 16 • 11:00 AM", where: "Groom's Residence", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jubilee+Hills+Hyderabad" },
    { name: "Walima Dinner", when: "Feb 18 • 7:30 PM", where: "Taj Falaknuma Palace", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Falaknuma+Palace+Hyderabad" },
  ],
} as const;
