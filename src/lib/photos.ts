export type JournalPhoto = {
  id: string;
  src: string;
  place: string;
  title: string;
  alt: string;
  width: number;
  height: number;
};

export const fishingPhoto: JournalPhoto = {
  id: "fishing",
  src: "assets/fishing.jpg",
  place: "Water",
  title: "On the boat",
  alt: "Jade Zhao on a boat, holding a fishing rod, a small fish on the line, open water behind her.",
  width: 1152,
  height: 2048,
};

export const journalPhotos: JournalPhoto[] = [
  {
    id: "iu-stadium-night",
    src: "assets/bereal/iu-stadium-night.jpg",
    place: "IU",
    title: "Memorial Stadium at night",
    alt: "BeReal. Memorial Stadium lit gold at night, parking lot in front. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "iu-limestone-house",
    src: "assets/bereal/iu-limestone-house.jpg",
    place: "IU",
    title: "Limestone and a red door",
    alt: "BeReal. A limestone campus house with a red door under a clear blue sky. Jade in the inset selfie, glasses and a white jacket.",
    width: 1080,
    height: 1440,
  },
  {
    id: "iu-campus-plaza",
    src: "assets/bereal/iu-campus-plaza.jpg",
    place: "IU",
    title: "Brick plaza, empty on purpose",
    alt: "BeReal. A brick campus plaza and a brick building under a huge blue sky. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "iu-tree-walk",
    src: "assets/bereal/iu-tree-walk.jpg",
    place: "IU",
    title: "The tree in the median",
    alt: "BeReal. A single tree in a median on a campus road. Jade walking with a backpack in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "iu-hoosier-lobby",
    src: "assets/bereal/iu-hoosier-lobby.jpg",
    place: "IU",
    title: "Hoosier shirt, campus lobby",
    alt: "BeReal. A campus lobby kiosk and a red public-health poster. Jade in a crimson Hoosier shirt in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "iu-peer-mentor-table",
    src: "assets/bereal/iu-peer-mentor-table.jpg",
    place: "IU",
    title: "Peer mentor table",
    alt: "BeReal. A campus table with candy, pens, and a sign that says request a peer mentor. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "indiana-canes",
    src: "assets/bereal/indiana-canes.jpg",
    place: "Indiana",
    title: "Raising Cane's",
    alt: "BeReal. Raising Cane's brick wall and logo, empty booth, Indiana jersey on the wall. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "indiana-ritas",
    src: "assets/bereal/indiana-ritas.jpg",
    place: "Indiana",
    title: "Rita's · the upstairs pub",
    alt: "BeReal. Rita's The Upstairs Pub sign against a blue sky. Jade in a pink jacket in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "indiana-brothers",
    src: "assets/bereal/indiana-brothers.jpg",
    place: "Indiana",
    title: "Brothers, Kirkwood",
    alt: "BeReal. An empty Brothers booth and a neon Indiana Hoosiers sign. Jade in a red shirt in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "indiana-desk-coke",
    src: "assets/bereal/indiana-desk-coke.jpg",
    place: "Indiana",
    title: "Diet Coke and a terminal",
    alt: "BeReal. A Diet Coke cup beside an open laptop. Jade in a black Michigan sweatshirt in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "indiana-planter",
    src: "assets/bereal/indiana-planter.jpg",
    place: "Indiana",
    title: "Someone else's planter, my plant",
    alt: "BeReal. A tall planter of purple flowers against a brick wall. Jade holding a small potted plant in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "spain-residence-sun",
    src: "assets/bereal/spain-residence-sun.jpg",
    place: "Spain",
    title: "Residence walk, sun in the lens",
    alt: "BeReal. A cobbled walk between residence buildings, sun flaring. Jade with glasses in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "spain-sidewalk-bus",
    src: "assets/bereal/spain-sidewalk-bus.jpg",
    place: "Spain",
    title: "Sidewalk, bus, grey sky",
    alt: "BeReal. A Madrid sidewalk, a tree, a blue bus, cars. Jade in a dark sweater in the inset selfie.",
    width: 1080,
    height: 1440,
  },
  {
    id: "spain-ivy-lot",
    src: "assets/bereal/spain-ivy-lot.jpg",
    place: "Spain",
    title: "Ivy and a wet lot",
    alt: "BeReal. Ivy in the foreground and a wet parking lot in winter. Jade in an olive coat in the inset selfie.",
    width: 1080,
    height: 1440,
  },
];

const featuredIds = [
  "iu-stadium-night",
  "iu-limestone-house",
  "iu-campus-plaza",
  "iu-tree-walk",
  "indiana-planter",
  "spain-residence-sun",
] as const;

export const featuredPhotos: JournalPhoto[] = featuredIds.map((id) => {
  const photo = journalPhotos.find((item) => item.id === id);
  if (!photo) {
    throw new Error(`Missing featured photo: ${id}`);
  }
  return photo;
});

export function photosByPlace(place: string, limit?: number): JournalPhoto[] {
  const matched = journalPhotos.filter((item) => item.place === place);
  return typeof limit === "number" ? matched.slice(0, limit) : matched;
}
