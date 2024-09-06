import axios from 'axios';

const getCountries = ()=> {
  const req =  axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(res=>res.data)
  return req;
    
}

export default ({getCountries})