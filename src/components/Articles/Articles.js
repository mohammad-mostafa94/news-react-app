import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Articles = (props) => {
    const {title,description,urlToImage,url} = props.news;
    return (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={urlToImage}/>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        </Card.Body>
                        <Button href={url} variant="primary">Go somewhere</Button>
                    </Card>
                </Col>

                // <Card style={{ width: '18rem' }}>
                //     <Card.Img variant="top" src={urlToImage} />
                //     <Card.Body>
                //         <Card.Title>{title}</Card.Title>
                //         <Card.Text>
                //         {description}
                //         </Card.Text>
                //         <Button onClick={url} variant="primary">Go somewhere</Button>
                //     </Card.Body>
                //     </Card>
            
       
    );
};

export default Articles;