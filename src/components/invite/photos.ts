// Every photo on the invitation is listed here. To use your own pictures,
// swap the image a slot points at — nothing else needs to change.
import rings from "@/assets/moment-rings.jpg";
import walk from "@/assets/moment-walk.jpg";
import stage from "@/assets/stage.jpg";

export type Photo = { src: string; alt: string; position?: string };

export const photos = {
  hero: { src: walk, alt: "The bride and groom walking down a candlelit church aisle", position: "50% 40%" },
  invitation: { src: walk, alt: "The bride and groom together", position: "40% 50%" },
  bride: { src: walk, alt: "Portrait of the bride", position: "36% 55%" },
  groom: { src: walk, alt: "Portrait of the groom", position: "64% 45%" },
  together: [
    { src: rings, alt: "The couple exchanging wedding rings" },
    { src: walk, alt: "The couple walking hand in hand" },
    { src: stage, alt: "Beneath the crystal chandelier" },
  ],
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
