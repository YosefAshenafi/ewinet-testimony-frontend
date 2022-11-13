import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from '../post/post';
// import './posts.css';

export default function Posts({ posts }) {
    return (
        <Container>
            <Row className='posts-panel'>
                {posts.map((p) => (
                    <Col xs={12} md={12} lg={6} xl={4}>
                        <Post post={p} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
