import { AuthNavBar } from "@/components/AuthNavBar";

export const metadata = {
  title: "Dashboard | Aina's App",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthNavBar />
      {children}
    </>
  );
}
