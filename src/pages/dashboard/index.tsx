// src/app/dashboard/page.tsx
import Header from "@/components/atoms/DashboardHeader";
import Navbar from "@/components/molecules/DashboardNavbar";
import DashboardGrid from "@/components/organisms/DashboardGrid";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Dashboard | CourierSync</title>
      </Head>
      <main>
        <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Header />
        <Navbar />
        <main className="p-6">
        <DashboardGrid />
      </main>
    </div>
      </main>
    </>
    
  );
}
