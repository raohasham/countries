import FullDetails from "./fulldetails"
const SearchResult = ({searchedresult}) =>{
 if(searchedresult==null){
    return null
 }
 if(searchedresult.length>1 && searchedresult.length<=10){
  return <>
   {searchedresult.map(country => <p key={country.name.common}> {country.name.common} </p>)}
 </>
 }
 if(searchedresult.length==1){
  return<>
  <FullDetails countryinfo={searchedresult[0]} />
  </>
 }

}
export default SearchResult;

