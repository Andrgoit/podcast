import eps1 from "src/assets/images/recentEpisodes/eps1.png";
import eps2 from "src/assets/images/recentEpisodes/eps2.png";
import eps3 from "src/assets/images/recentEpisodes/eps3.png";
import eps4 from "src/assets/images/recentEpisodes/eps4.png";
import eps5 from "src/assets/images/recentEpisodes/eps5.png";
import eps6 from "src/assets/images/recentEpisodes/eps6.png";

import elena from "src/assets/images/recentEpisodes/host1.png";
import irina from "src/assets/images/recentEpisodes/host2.png";

const episodes = [
  {
    id: 1,
    title: "Are you a Perplexed Mind Person?",
    img: eps1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["mind-behaviour", "health"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
  {
    id: 2,
    title: "Type of Social Classes of People",
    img: eps2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["social class", "wealth"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
  {
    id: 3,
    title: "How to Deal with Self–Confidence",
    img: eps3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["self-esteem", "health"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
  {
    id: 4,
    title: "Women's Rights? Is it alright?",
    img: eps4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["women’s rights"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
  {
    id: 5,
    title: "Tesla Autopilot Controversy",
    img: eps5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["automation", "tech"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
  {
    id: 6,
    title: "Pandemic Becoming Endemic",
    img: eps6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    tags: ["covid-19", "health"],
    hostedBy: [
      { id: 1, name: "Irina", icon: irina },
      { id: 2, name: "Elena", icon: elena },
    ],
  },
];

export default episodes;
