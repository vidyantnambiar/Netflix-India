import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './components/requests'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  /* console.log(requests.fetchTrending); */
  return (
    <div>
   <Nav/>
    <Banner fetchurl={requests.fetchNetflixOriginals}/>
    <Row title="Netflixoriginal" fetchurl={requests.fetchNetflixOriginals}/>
    <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
    <Row title="Trending" fetchurl={requests.fetchTrending}/>
    <Row title="Action" fetchurl={requests.fetchActionMovies}/>
    <Row title="Comedy" fetchurl={requests.fetchComedyMovies}/>
    <Row title="Horror" fetchurl={requests.fetchHorrorMovies}/>
    <Row title="Romance" fetchurl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
