import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  // const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      {/* <nav className="absolute top-5 left-5 text-gray-500">
        <span className="flex items-center space-x-2">
          <Home size={16} />
          <span>/ 404 Error</span>
        </span>
      </nav> */}
      <h1 className="text-6xl md:text-9xl font-medium tracking-[3%] m-10">404 Not Found</h1>
      <p className="text-gray-600 mt-2 text-base md:text-base font-normal">
        Your visited page not found. You may go home page.
      </p>
      <Button
        className="mt-6 bg-[#DB4444] hover:bg-[#DB4444] px-4 py-2 text-sm md:text-base"
        // onClick={() => router.push("/")}
      >
        Back to home page
      </Button>
    </div>
  );
}
