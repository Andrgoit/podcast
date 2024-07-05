import FavPlatforms from "./FavPlatforms/FavPlatforms";
import AppBlock from "./AppBlock/AppBlock";

export default function RightSide() {
  return (
    <div className="flex flex-col gap-[60px]">
      <FavPlatforms />
      <AppBlock />
    </div>
  );
}
