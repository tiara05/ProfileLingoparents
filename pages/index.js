import Head from 'next/head'
import { Children } from 'react';
import CarouselContainer from '../comps/CarouselContainer';
import CarouselSlide from '../comps/CarouselSlide';
import ChildrenList from '../comps/ChildrenList';



export default function Home() {

  return (
    <>
      <Head>
        <title>LingoParents</title>    
      </Head>
      <div className="container">
        <CarouselContainer />
        <CarouselSlide />
        <ChildrenList/>
      </div>
      
    </>
  )
}
