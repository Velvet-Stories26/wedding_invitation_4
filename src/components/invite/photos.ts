// Every photo on the invitation is listed here. To use your own pictures,
// swap the image a slot points at — nothing else needs to change.
// Galleries are simple lists: add or remove entries to show more or fewer photos.
import rings from "@/assets/moment-rings.jpg";
import walk from "@/assets/moment-walk.jpg";
import stage from "@/assets/stage.jpg";
import invitationBackground from "@/assets/invitation.png";
import closingBackground from "@/assets/invitation-bg.png";
import verseBackground from "@/assets/silk-burgundy.png";
import bridePortrait from "@/assets/bride.jpg";
import groomPortrait from "@/assets/groom.jpg";
import engagementVenue from "@/assets/engagement.png";
import churchVenue from "@/assets/church.png";
import ringImage from "@/assets/ring.png";
import ringImg from "@/assets/ringImg.jpeg";
import WeddingAnimation from "@/assets/animation-vedio.mp4";

export type Photo = { src: string; alt: string; position?: string };

export const photos = {
  hero: {
    src: WeddingAnimation,
    alt: "The bride and groom walking down a candlelit church aisle",
    position: "50% 40%",
  },
  invitation: {
    src: invitationBackground,
    alt: "A floral burgundy wedding invitation background with open space for wedding details",
    position: "50% 50%",
  },
  verseBackground: {
    src: verseBackground,
    alt: "Deep burgundy silk",
    position: "50% 50%",
  },

  bride: { src: bridePortrait, alt: "The bride", position: "50% 40%" },
  groom: { src: groomPortrait, alt: "The groom", position: "50% 35%" },
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
    { src: ringImage, alt: "The couple exchanging wedding rings", position: "50% 45%" },
    { src: ringImg, alt: "Beneath the crystal chandelier", position: "50% 40%" },
    { src: churchVenue, alt: "Candlelit aisle", position: "50% 90%" },
    { src: rings, alt: "Roses and promises", position: "50% 80%" },
  ],
  mosaic: {
    large: { src: walk, alt: "Together at the altar", position: "50% 40%" },
    topRight: { src: ringImage, alt: "The ring", position: "50% 40%" },
    middleRight: { src: churchVenue, alt: "The celebration", position: "50% 45%" },
    wide: { src: rings, alt: "The bouquet", position: "50% 85%" },
  },
  family: { src: stage, alt: "Both families together", position: "50% 60%" },
  brideFamily: { src: rings, alt: "The bride's family", position: "30% 50%" },
  groomFamily: { src: rings, alt: "The groom's family", position: "75% 50%" },
  venue: {
    src: churchVenue,
    alt: "St. John Of The Cross Church Siluvaipuram",
    position: "50% 50%",
  },
  events: {
    engagement: {
      src: engagementVenue,
      alt: "SM Convention Center Pozhiyoor Kollecode",
      position: "50% 50%",
    },
    marriage: {
      src: churchVenue,
      alt: "St. John Of The Cross Church Siluvaipuram",
      position: "50% 50%",
    },
  },
  closing: {
    src: closingBackground,
    alt: "Wedding invitation closing background",
    position: "50% 50%",
  },
} satisfies Record<string, Photo | Photo[] | Record<string, Photo>>;
