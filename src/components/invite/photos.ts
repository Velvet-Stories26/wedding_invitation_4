// Every photo on the invitation is listed here. To use your own pictures,
// swap the image a slot points at — nothing else needs to change.
// Galleries are simple lists: add or remove entries to show more or fewer photos.
import rings from "@/assets/moment-rings.jpg";
import walk from "@/assets/moment-walk.jpg";
import stage from "@/assets/stage.jpg";
import invitationBackground from "@/assets/invitation-bg.png";

export type Photo = { src: string; alt: string; position?: string };

export const photos = {
  hero: {
    src: walk,
    alt: "The bride and groom walking down a candlelit church aisle",
    position: "50% 40%",
  },
  invitation: {
    src: invitationBackground,
    alt: "The bride and groom standing together in a candlelit church",
    position: "50% 65%",
  },

  bride: [
    { src: walk, alt: "The bride", position: "36% 55%" },
    { src: rings, alt: "The bride's hands and bouquet", position: "20% 60%" },
    { src: walk, alt: "The bride's veil", position: "38% 85%" },
    { src: rings, alt: "The bride's lace gown", position: "5% 30%" },
  ],
  groom: [
    { src: walk, alt: "The groom", position: "64% 45%" },
    { src: rings, alt: "The groom placing the ring", position: "85% 50%" },
    { src: walk, alt: "The groom at the altar", position: "62% 20%" },
    { src: stage, alt: "Waiting for his bride", position: "50% 50%" },
  ],
  filmstrip: [
    { src: rings, alt: "Rings", position: "50% 45%" },
    { src: walk, alt: "Walking together", position: "50% 50%" },
    { src: stage, alt: "Chandelier", position: "50% 30%" },
    { src: rings, alt: "Bouquet", position: "50% 85%" },
    { src: walk, alt: "Stained glass", position: "50% 10%" },
    { src: stage, alt: "Velvet and roses", position: "50% 75%" },
  ],
  together: [
    { src: walk, alt: "The couple walking hand in hand", position: "50% 45%" },
    { src: rings, alt: "The couple exchanging wedding rings", position: "50% 45%" },
    { src: stage, alt: "Beneath the crystal chandelier", position: "50% 40%" },
    { src: walk, alt: "Candlelit aisle", position: "50% 90%" },
    { src: rings, alt: "Roses and promises", position: "50% 80%" },
  ],
  mosaic: {
    large: { src: walk, alt: "Together at the altar", position: "50% 40%" },
    topRight: { src: rings, alt: "The ring", position: "50% 40%" },
    middleRight: { src: stage, alt: "The celebration", position: "50% 45%" },
    wide: { src: rings, alt: "The bouquet", position: "50% 85%" },
  },
  family: { src: stage, alt: "Both families together", position: "50% 60%" },
  brideFamily: { src: rings, alt: "The bride's family", position: "30% 50%" },
  groomFamily: { src: rings, alt: "The groom's family", position: "75% 50%" },
  venue: { src: walk, alt: "Inside the church", position: "50% 25%" },
  events: {
    betrothal: { src: rings, alt: "Betrothal ceremony", position: "50% 45%" },
    rehearsal: { src: stage, alt: "Rehearsal dinner", position: "50% 35%" },
    reception: { src: stage, alt: "Wedding reception", position: "50% 70%" },
  },
  closing: { src: walk, alt: "The bride and groom", position: "50% 45%" },
} satisfies Record<string, Photo | Photo[] | Record<string, Photo>>;
