import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CarouselSlide from '../components/Isi/CarouselSlide';
import CarouselHome from '../components/Isi/CarouselHome';

export default function Home() {
  return (
    <>
      <Head>
        <title>LingoParents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="max-w-6xl mx-auto px-4">
      <Layout>
        <CarouselHome/>
        <CarouselSlide/>
      </Layout>
      </div>
      
    </>
  );
}
