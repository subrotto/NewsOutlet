import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9a68fc37a7de4df29a51a93bbaf7a90e')
    .then(res=>res.json())
    .then(data=>setNews(data.articles));
  },[])
  return (
    <div className='total'>
      <h1 className='head'>News Outlet</h1>

      {
        news.length===0?<Spinner animation="border" />:<Row xs={1} md={3} className="g-4">
        {
          news.map(khobor=><News khobor={khobor}></News>)
        }
      </Row>
      }
      
   
    </div>
  );
}

export default App;
