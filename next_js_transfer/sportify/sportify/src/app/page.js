'use client'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";

export default function Page() {
  return (
  <div className="w-screen h-screen">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
  );
}