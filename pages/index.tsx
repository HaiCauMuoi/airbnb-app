import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCards from '../components/SmallCards';
import MediumCards from '../components/MediumCards';
import cards from '../data/cards.json';
import mediumCards from '../data/mediumCards.json';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const Home: NextPage = ({ exploreData, cardData }: any) => {
  return (
    <div className="">
      <Head>
        <title>Haicaumuoi AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item: any) => {
              return (
                <SmallCards
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((item: any) => {
              return (
                <MediumCards key={item.img} img={item.img} title={item.title} />
              );
            })}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlists curated by AirBnB"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = cards;
  const cardData = mediumCards;
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}

export default Home;
