import React from 'react';
import '../styles/Home.scss';
import Banner from '../components/Banner';
import appartementsData from '../datas/appartements.json';
import AppartementCard from '../components/AppartementCard';

function Home() {
  return (
    <main>
      <Banner version='cliff' />
      <div className="kaza__list">
        <ul className='appartements-ul'>
          {appartementsData.appartements.map(appartement => (
            <AppartementCard key={appartement.id} appartement={appartement} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
