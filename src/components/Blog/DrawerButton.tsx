import Image from "next/image";
import IconArrowUp from "@/images/icon-arrow-up.svg";
import IconArrowDown from "@/images/icon-arrow-down.svg";

const DrawerButton = ({
  isDrawerOpen,
  setDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="text-center flex item-center">
      <button
        type="button"
        onClick={() => setDrawerOpen((previous) => !previous)}
      >
        <Image
          src={isDrawerOpen ? IconArrowUp : IconArrowDown}
          alt={isDrawerOpen ? "Up" : "Down"}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default DrawerButton;
