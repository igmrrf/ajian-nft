import { StaticImageData } from "next/image";
import image1 from "../../public/images/get_your_own/1.png";
import image2 from "../../public/images/get_your_own/2.png";
import image3 from "../../public/images/get_your_own/3.png";
import image4 from "../../public/images/get_your_own/4.png";

interface CardMockProps {
  id: number;
  collection: string;
  tag: string;
  path: StaticImageData;
  price: string;
}

const cardsMock: CardMockProps[] = [];

const images: StaticImageData[] = [image1, image2, image3, image4];
const collections = ["Magnet", "Pin", "Sticker"];
const tags = ["Space", "Cute", "Weird", "Retro"];
const prices = ["10", "15", "20", "25"];

for (let i = 0; i < 20; i++) {
  const imagePath = images[Math.floor(Math.random() * images.length)];
  const card: CardMockProps = {
    id: i + 1,
    collection: collections[Math.floor(Math.random() * collections.length)],
    tag: tags[Math.floor(Math.random() * tags.length)],
    path: imagePath,
    price: prices[Math.floor(Math.random() * prices.length)],
  };
  cardsMock.push(card);
}
console.log(cardsMock);

export default cardsMock;
