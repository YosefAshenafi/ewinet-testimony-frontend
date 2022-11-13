import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextTruncate from 'react-text-truncate';
import './post.css';

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    return (
        <Card className="post-panel">
            {post.photo &&
                <Card.Img variant="top" ssrc={PF + post.photo} alt='' />
            }
            <Card.Img variant="top" src="http://themes.pcubelive.com/pcubeblog/images/b3.jpg" />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="post-date">{new Date(post.createdAt).toDateString()}</Card.Text>
                <TextTruncate
                    line={3}
                    element="div"
                    truncateText="…"
                    text={post.desc}
                />
                <Button variant="info mt-2 text-light">Read More</Button>
            </Card.Body>
        </Card>
    )
}
