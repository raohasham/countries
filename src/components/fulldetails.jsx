const Languges =({languages})=>{
    const  lnr = []
    let i=0;
    for (const lng in languages){
    lnr[i]=languages[lng];
        i++
    }
    return<>
    {lnr.map(lng=><p key={lng}>  {lng} </p>)}
    </>


}
const FullDetails = ({countryinfo})=>{
    return<>
    <h2>{countryinfo.name.common}</h2>
    <br />
    <p>capital : {countryinfo.capital}</p>
    <p> area : {countryinfo.area}</p>
    <p>population : {countryinfo.population}</p>
    <h2>languges</h2>
    <Languges languages={countryinfo.languages}/>
    <img src={countryinfo.flags.svg} alt="" />
    </>


}
 export default FullDetails;