import Cliff from './Cliff'
import '../styles/Home.css'
import appartementsData from '../datas/appartements.json'; 


function Home() {
    return (
        <main>
            <Cliff />
            <div className="kaza__list">
                <ul>
                    {appartementsData.appartements.map(appartement => (
                        <li className="list__card" key={appartement.id}>
                              <img src={appartement.cover} alt={appartement.title} />
                            <h3>{appartement.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home