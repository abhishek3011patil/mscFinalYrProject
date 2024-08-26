'use client'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import SongSearchBar from "@/components/SongSearchBar/SongSearchBar";
import TestAPI from "@/components/TestAPI/TestAPI";

export default function Page() {


  return (
    <div className="w-screen h-screen">
      <Header></Header>
      <Home></Home>

      <SongSearchBar></SongSearchBar>
      <Footer></Footer>
    </div>
  );
}