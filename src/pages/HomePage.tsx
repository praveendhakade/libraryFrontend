import { BookCarousel } from "../components/shared/homepage/Carousel";
import { ExploreTopBooks } from "../components/shared/homepage/ExploreTopBooks";
import { Heros } from "../components/shared/homepage/Heros";
import { LibraryServices } from "../components/shared/homepage/LibraryServices";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <ExploreTopBooks />
      <BookCarousel />
      <Heros />
      <LibraryServices />
    </div>
  );
};
