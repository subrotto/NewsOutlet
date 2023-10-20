import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    const {url,urlToImage,title,description}=props.khobor;
    return (
       <div className='news'>
         <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} alt='Sorry! This picture is not supported'/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Button target='_blank' href={url} variant="secondary">See More</Button>
        </Card.Body>
      </Card>
    </Col>
       </div>
    );
};

export default News;