import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "Dashboard | Aina's App",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
