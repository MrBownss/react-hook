import { useEffect, useState } from "react";
import { getNews, searchNews } from "../Component/Api";
import CNavbar from "../Component/CNavbar";
import { Navbar, Form, Container, Row, Col } from "react-bootstrap"

const Result = () => {
    const [populerNews, setPopulerNews] = useState([])

    useEffect(() => {
        getNews().then((result) => {
            setPopulerNews(result)
        })
    }, [])

    const PopulerNewsCard = () => {
        return populerNews.map(element => {
            return (
                <div className="card m-1 mt-4" style={{width: "17rem", backgroundColor: "#b9ffc7"}}>
                    <img src={element.urlToImage} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">${element.title}</h5>
                        <p className="card-text">{element.publishedAt}</p>
                        <p class="card-text">{element.content}</p>
                        <a href={element.url} className="btn btn-outline-light bg-success">Read more...</a>
                    </div>
                </div>
            )
        })
    }

    const search = async (q) => {
        const listSearch = await searchNews(q)
        setPopulerNews(listSearch.articles)
    }

    return (
        <div>
        <CNavbar/>
        <Navbar bg="success" expand="lg">
            <Container className="justify-content-center">
                <Form className="d-flex align-item-center" >
                    <Form.Control
                    type="search"
                    placeholder="Search News..."
                    className="me-2 align-item-center"
                    aria-label="Search"
                    onChange={({target}) => search(target.value)}
                    />
                </Form>
            </Container>
        </Navbar>
        <Container>
            <Row>
                <PopulerNewsCard></PopulerNewsCard>
                <Col className="col-sm-12 col-m-6 col-l-3 col-12">
                </Col>
            </Row>
        </Container>
        </div>
    )



}

export default Result