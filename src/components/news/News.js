import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Articles from '../Articles/Articles';
import "./News.css";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
      fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0e4a2ea04cec483fa6b5575e400fc47f")
      .then(res => res.json())
      .then(data => setNews(data.articles));
    },[]);
    return (
        <Row  xs={1} md={4}  className="g-4 text-center">
        {
            news.length === 0 ? <Spinner  animation="border" />:<>
               { news.map(ns => <Articles
                news = {ns}></Articles>)}
                </>
        }
            
        </Row>
    );
};

export default News;