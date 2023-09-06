import styles from './CountryList.module.css';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import CountryItem from "./CountryItem";
import { useCities } from '../contexts/CitiesContext'

export default function CountryList() {
    const {cities, isLoading} = useCities();

    if (isLoading) return <Spinner/>

    if (!cities.length) return <Message message='Add your first city by clicking on a city on the map'/>

    const countries = cities.reduce((arr, cur) => {
        if (!arr.map((el) => el.country).includes(cur.country)) return [...arr, {
            country: cur.country,
            emoji: cur.emoji
        }]
        else return arr
    } , []
)


    return (
        <div>
            <ul className={styles.countryList}>
                {countries.map((country) =>( <CountryItem country={country} key={country.country}/>))}
            </ul>
        </div>
    )
}