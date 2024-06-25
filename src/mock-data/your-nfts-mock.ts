import image1 from "../../public/images/get_your_own/1.png";
import image2 from "../../public/images/get_your_own/2.png";
import image3 from "../../public/images/get_your_own/3.png";
import image4 from "../../public/images/get_your_own/4.png";
import { StaticImageData } from "next/image";


interface YourNftsCardMocks{
  id: number;
  name: string;
  path: StaticImageData;
}

const images: StaticImageData[] = [image1, image2, image3, image4];
const names: string[]= ["Diamond Body", "Icy fire", "Wind Storm", "Dark Knight", "Black Swordsman", "Ghost Of the Uchiha", "Star Platnium"]
const yourNfts:Array<YourNftsCardMocks> =[]


for (let i = 0; i < 20; i++) {
  const imagePath = images[Math.floor(Math.random() * images.length)];
  const card: YourNftsCardMocks= {
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    path: imagePath,
  };
  yourNfts.push(card);
}
export {yourNfts}
