import Image from "next/image";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Head from "next/head";
import Info from "@/components/Info";
import Projetos from "@/components/Projetos";
import Contatos from "@/components/Contatos";
export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="fontFamily flex justify-around m-0 bg-gradient-custom text-white overflow-x-hidden rounded">
        <main className="bg-container-bg-color max-w-1280 m-0 md:m-12 calc-100vh-minus-100px grow shadow-custom font-roboto">
          <NavBar></NavBar>
          <Banner></Banner>
          <Info></Info>
          <Projetos></Projetos>
          <Contatos></Contatos>
        </main>
      </div>
    </>
  );

}
