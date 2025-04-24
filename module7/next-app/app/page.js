import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-7xl text-red-500 font-bold">Home Page</h1>
        </div>
      </div>
    </>
  );
}
