import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CarouselSlide from '../components/Isi/CarouselSlide';
import CarouselHome from '../components/Isi/CarouselHome';
import ChildrenList from '../components/Isi/ChildrenList';
import LiveEvent from '../components/Isi/LiveEvent';
import { Children } from "react";

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
            <div class="grid grid-rows-1 md:grid-cols-5">
              <div class="col-span-3 mr-8">
                <ChildrenList/>
              </div>
              <div class="col-span-2">
                <LiveEvent/>
              </div>
            </div>
        </Layout>
      </div>
      
    </>
  );
}
