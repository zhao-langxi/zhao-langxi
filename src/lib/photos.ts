export type PhotoOrigin = "original" | "licensed";

export type RelatedPage = "home" | "days" | "iu" | "indiana" | "spain" | "about";

export type JournalPhoto = {
  id: string;
  src: string;
  place: string;
  title: string;
  caption?: string;
  note?: string;
  alt: string;
  width: number;
  height: number;
  origin: PhotoOrigin;
  related: RelatedPage[];
  creator?: string;
  license?: string;
  licenseUrl?: string;
  creditHtml?: string;
  takenNote?: string;
};

const featuredIds = [
  "iu-stadium-night",
  "iu-limestone-house",
  "iu-campus-plaza",
  "iu-tree-walk",
  "indiana-planter",
  "spain-residence-sun",
] as const;

export const fishingPhoto: JournalPhoto = {
  id: "fishing",
  src: "assets/fishing.jpg",
  place: "Water",
  title: "On the boat",
  caption: "A small fish, a long wait, and open water.",
  alt: "Jade Zhao on a boat, holding a fishing rod, a small fish on the line, open water behind her.",
  width: 1152,
  height: 2048,
  origin: "original",
  related: ["home"],
};

export const journalPhotos: JournalPhoto[] = [
  {
    id: "iu-stadium-night",
    src: "assets/bereal/iu-stadium-night.jpg",
    place: "IU",
    title: "After the Lights Come On",
    caption: "Memorial Stadium at night",
    note: "College is often remembered through its biggest moments, but I think the quieter ones deserve a place too. There's something about seeing a familiar stadium after dark that makes campus feel different. I wanted to remember IU beyond the crowds and celebrations, as a place made up of ordinary nights, too.",
    alt: "BeReal. Memorial Stadium lit gold at night, parking lot in front. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu", "home"],
  },
  {
    id: "iu-limestone-house",
    src: "assets/bereal/iu-limestone-house.jpg",
    place: "IU",
    title: "The Red Door",
    caption: "Limestone building on campus",
    note: "I've always liked the little details that give a place its personality. At IU, it's the limestone buildings, the red doors, and the way everything looks under a bright Indiana sky. Maybe belonging starts when you stop needing directions and begin recognising the small things.",
    alt: "BeReal. A limestone campus house with a red door under a clear blue sky. Jade in the inset selfie, glasses and a white jacket.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu", "home"],
  },
  {
    id: "iu-campus-plaza",
    src: "assets/bereal/iu-campus-plaza.jpg",
    place: "IU",
    title: "A Little Room to Breathe",
    caption: "Brick plaza",
    note: "Some days at college feel like a constant rush from one thing to another. Then there's a quiet plaza, an empty walkway, or a few minutes when nothing needs your attention. I like the idea that these pauses are part of growing up, too.",
    alt: "BeReal. A brick campus plaza and a brick building under a huge blue sky. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu", "home"],
  },
  {
    id: "iu-tree-walk",
    src: "assets/bereal/iu-tree-walk.jpg",
    place: "IU",
    title: "The Tree in the Middle",
    caption: "Campus walkway",
    note: "I love when something ordinary interrupts the way a place is designed. A tree in the middle of a walkway is probably something most people pass without thinking. But sometimes the things worth remembering aren't the landmarks. They're the little details that make a familiar place feel like yours.",
    alt: "BeReal. A single tree in a median on a campus road. Jade walking with a backpack in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu", "home"],
  },
  {
    id: "iu-hoosier-lobby",
    src: "assets/bereal/iu-hoosier-lobby.jpg",
    place: "IU",
    title: "A Little Bit of Hoosier Pride",
    caption: "Campus lobby",
    note: "Growing up in Indiana and going to IU are two different experiences of the same place. There are the familiar colours and traditions, but also the people, conversations, and opportunities that give them meaning. I like thinking about how a place can be part of your life long before you fully understand what it will mean to you.",
    alt: "BeReal. A campus lobby kiosk and a red public-health poster. Jade in a crimson Hoosier shirt in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu"],
  },
  {
    id: "iu-peer-mentor-table",
    src: "assets/bereal/iu-peer-mentor-table.jpg",
    place: "IU",
    title: "A Seat at the Table",
    caption: "Peer mentor table",
    note: "One of the nicest things about college is realising that you don't have to figure everything out alone. I like the idea of a table where someone can walk up, ask a question, and feel a little less uncertain about where they belong. Sometimes community begins with something as simple as making room for another person.",
    alt: "BeReal. A campus table with candy, pens, and a sign that says request a peer mentor. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "iu"],
  },
  {
    id: "indiana-canes",
    src: "assets/bereal/indiana-canes.jpg",
    place: "Indiana",
    title: "The Booth by the Wall",
    caption: "Raising Cane's",
    note: "Not every memory needs to be a big adventure. Sometimes it's a restaurant booth, a familiar sign, and a place to sit after a long day. Growing up around restaurants probably made me pay more attention to these spaces than most people. I like how ordinary places become part of the way we remember a town.",
    alt: "BeReal. Raising Cane's brick wall and logo, empty booth, Indiana jersey on the wall. Jade in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "indiana"],
  },
  {
    id: "indiana-ritas",
    src: "assets/bereal/indiana-ritas.jpg",
    place: "Indiana",
    title: "Looking Up",
    caption: "Rita's",
    note: "I think some of my favourite photographs are the ones where nothing particularly important is happening. Just a sign against the sky, something I happened to notice while looking up. It's a reminder that a place doesn't have to be extraordinary to be worth remembering.",
    alt: "BeReal. Rita's The Upstairs Pub sign against a blue sky. Jade in a pink jacket in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "indiana"],
  },
  {
    id: "indiana-brothers",
    src: "assets/bereal/indiana-brothers.jpg",
    place: "Indiana",
    title: "Kirkwood After Hours",
    caption: "Brothers",
    note: "There are places you remember because of what happened there, and others you remember simply because you walked past them enough times. The neon signs, familiar storefronts, and empty booths become part of the background of college life. Then one day, you realise the background is part of the story.",
    alt: "BeReal. An empty Brothers booth, red BROTHERS neon, and a smaller Indiana Hoosiers sign. Jade in a red shirt in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "indiana"],
  },
  {
    id: "indiana-desk-coke",
    src: "assets/bereal/indiana-desk-coke.jpg",
    place: "Indiana",
    title: "A Very Ordinary Afternoon",
    caption: "Laptop and Diet Coke",
    note: "If someone asked what college looked like, I'd probably show them the big buildings and campus traditions first. But there's another version that's much more ordinary: a laptop open, a drink nearby, and a little time spent working through whatever the day requires. Maybe those are the moments that make up most of a life.",
    alt: "BeReal. A Diet Coke cup beside an open laptop. Jade in a black Michigan sweatshirt in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "indiana"],
  },
  {
    id: "indiana-planter",
    src: "assets/bereal/indiana-planter.jpg",
    place: "Indiana",
    title: "Something Growing",
    caption: "Flowers and a plant",
    note: "I've always liked plants because they make you notice small changes. A new leaf, a different colour, something growing where you didn't expect it. There's something comforting about paying attention to things that don't happen all at once. Not everything needs to move at the same pace.",
    alt: "BeReal. A tall planter of purple flowers against a brick wall. Jade holding a small potted plant in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "indiana", "home"],
  },
  {
    id: "spain-residence-sun",
    src: "assets/bereal/spain-residence-sun.jpg",
    place: "Spain",
    title: "The Sun Found Its Way In",
    caption: "Residence walkway",
    note: "I like photographs that capture the way a place feels for just a second. The buildings might look exactly the same tomorrow, but the sunlight won't fall in quite the same way. Maybe that's part of why I take pictures. Not because every moment is important, but because it won't happen exactly like this again.",
    alt: "BeReal. A cobbled walk between residence buildings, sun flaring. Jade with glasses in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "spain", "home"],
  },
  {
    id: "spain-sidewalk-bus",
    src: "assets/bereal/spain-sidewalk-bus.jpg",
    place: "Spain",
    title: "An Ordinary Day in Madrid",
    caption: "Street, bus, and grey sky",
    note: "When I think about studying abroad, it's easy to imagine the famous landmarks and exciting trips. But living somewhere is different from visiting it. It's the buses, the sidewalks, the weather, and the everyday routines that slowly make a new city feel familiar. I like that this photograph doesn't look like a postcard. It looks like a day.",
    alt: "BeReal. A Madrid sidewalk, a tree, a blue bus, cars. Jade in a dark sweater in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "spain"],
  },
  {
    id: "spain-ivy-lot",
    src: "assets/bereal/spain-ivy-lot.jpg",
    place: "Spain",
    title: "Green After the Rain",
    caption: "Ivy and wet pavement",
    note: "Some places stay with you through their smallest details. The greenery against a wall, the pavement after rain, the way a quiet afternoon looks when you're not trying to be anywhere else. I think photographs like this remind me that exploring a new place doesn't always mean going farther. Sometimes it means paying closer attention.",
    alt: "BeReal. Ivy in the foreground and a wet parking lot in winter. Jade in an olive coat in the inset selfie.",
    width: 1080,
    height: 1440,
    origin: "original",
    related: ["days", "spain"],
  },
];

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

export function photosRelatedTo(page: RelatedPage): JournalPhoto[] {
  const all = [fishingPhoto, ...journalPhotos];
  return all.filter((photo) => photo.related.includes(page));
}
