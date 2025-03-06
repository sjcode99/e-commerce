
const nameObj: any = {
  today: "today's",
  month: "this month",
  products: "our products",
  featured: "Featured"
};

export default function SectionSubHeading({
  subheading,
}: {
  subheading: string;
}) {
  return (
    <span className="text-red-500 font-semibold capitalize">
      {nameObj[subheading]}
    </span>
  );
}
