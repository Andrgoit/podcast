import {
  Hero,
  About,
  Testimonials,
  Membership,
  RecentEpisodes,
  BecomeOurSponsors,
} from "./index";

import episodes from "src/data/HomePage/episodes";
import prices from "src/data/HomePage/prices";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Membership />
      <RecentEpisodes episodes={episodes} />
      <BecomeOurSponsors prices={prices} />
    </>
  );
}
