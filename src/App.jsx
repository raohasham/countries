import { useState , useEffect } from 'react'
import coutries from './services/coutries'
import SearchResult from './components/searchResult'


function App() { 
const  [country , setCountry] = useState('')
const [serachedCountries,setSerachedCountries] = useState(null)
const [allCountries , setAllCountries] = useState([])
 useEffect( ()=>{
   coutries.getCountries().then(res=>{
     setAllCountries(res);
   })
 
 },[])


function handleinput(event){
  console.log(event.target.value);
  setCountry(event.target.value);

 const men = allCountries.filter(country=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
setSerachedCountries(men)

}

return <>
enter countries <input type="text" onChange={handleinput} value={country} />
<SearchResult searchedresult={serachedCountries} />
</>

}

export default App
