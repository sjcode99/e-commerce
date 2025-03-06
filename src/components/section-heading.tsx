const nameObj: any = {
  sale: "flash sale's",
  best: "best selling products",
  products: "explore our products",
  arrival: "new arrival",
};

export default function SectionHeading({ heading }: { heading: string }) {
  return <span className=" font-semibold capitalize">{nameObj[heading]}</span>;
}
