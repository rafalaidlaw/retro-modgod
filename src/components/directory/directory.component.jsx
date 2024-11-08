import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Modded Gameboys",
    imageUrl: "https://i.ibb.co/98HjMBT/gba-white-focus.jpg",
    route: "shop/gba",
  },
  {
    id: 2,
    title: "Gameboy Games",
    imageUrl: "https://i.ibb.co/hdrMFmC/many-games.jpg",
    route: "shop/gameboy%20games",
  },
  {
    id: 3,
    title: "Famicom",
    imageUrl: "https://i.ibb.co/s64sHDJ/splash.jpg",
    route: "shop/famicom",
  },
  {
    id: 4,
    title: "Create Your Own",
    imageUrl: "https://i.ibb.co/5vPXdXV/gba-splash-horizontal.jpg",
    route: "shop/create%20your%20own",
  },
  {
    id: 5,
    title: "3D Print Shop",
    imageUrl: "https://i.ibb.co/54Pk0J7/3-D-KOT-KROP.jpg",
    route: "shop/3d%20print%20shop",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
