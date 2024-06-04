import { StaticImageData } from "next/image";
interface CardMockProps {
  id: number;
  collection: string;
  tag: string;
  path: string;
  price: string;
}

const cardsMock: CardMockProps[] = [];

let collections = ["Magnet", "Pin", "Sticker"];
let tags = ["Space", "Cute", "Weird", "Retro"];
let prices = ["10", "15", "20", "25"];

for (let i = 0; i < 20; i++) {
  const card: CardMockProps = {
    id: i + 1,
    collection: collections[Math.floor(Math.random() * 3)],
    tag: tags[Math.floor(Math.random() * 4)],
    path: `/images/get_your_own/${Math.floor(Math.random() * 4)+ 1}.png`,
    price: prices[Math.floor(Math.random() * 4)],
  };
  cardsMock.push(card);
}

export default cardsMock;
