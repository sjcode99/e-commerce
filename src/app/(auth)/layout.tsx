import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row my-16">
      <div className="hidden md:flex items-center justify-center w-1/2 h-[80vh] bg-gray-100">
        <Image
          src="/images/auth-img.png"
          alt="Shopping"
          width={400}
          height={400}
          className="object-fill w-full h-full"
        />
      </div>

      {children}
    </div>
  );
}
