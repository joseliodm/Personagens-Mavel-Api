import './App.css';
import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import md5 from 'md5'
import React , {useEffect,useState} from 'react'
import Search from './components/Search'

const publicKey = "de2910e1979380f0d73e932672f49613";
const privateKey = "0a0f20b63c4d0e19b2cfcf879d4a4b3900abe8ed";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){

          if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
            localStorage.setItem('favorites', '[]')
            const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
            console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          }else{
            let favorite = JSON.parse(localStorage.getItem('favorites'))
            setItems(favorite)
            setLoading(false)
          }       
          
        }else{
          const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${query}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }

    }

    fetch()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search search={(q)=>setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
