import { data } from 'autoprefixer'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Smallcard from '../components/Smallcard'
import styles from '../styles/Home.module.css'
import React from 'react'
import Mediumcard from '../components/Mediumcard'
import Largecard from '../components/Largecard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header */}
      <Header />
      {/*Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          
          {/*Pull server data */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData.map(({img, distance, location}) => (
            <Smallcard 
            key={img}
            img={img} 
            distance={distance} 
            location={location}/>
          ))}
          </div>
          
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({ img, title }) => (
            <Mediumcard key={img} img={img} title={title}/>
          ))}
          </div>
        </section>
        <Largecard 
        img='https://links.papareact.com/4cj' 
        title='The Greatest Outdoors' 
        description='Wishlists curated by Airbnb'
        buttonText='Get Inspired'
        />
      </main>
      <Footer />
      
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const exploreData = await res.json()

  const card = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const cardsData = await card.json()
  
  
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}


