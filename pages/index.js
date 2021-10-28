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
          <div className="md:mt-2">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                          <ChildrenList/>
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                          <LiveEvent/>
                        </div>
                    </div>
                </div>
          </div>
        </Layout>
      </div>
      
    </>
  );
}
