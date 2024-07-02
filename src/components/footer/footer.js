import { Col, Container, Row } from "react-bootstrap";
import "./footer.css"

function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                    <h2>اینکه چرا باید از سایت ما دیدن کنی</h2>
                    <p>آفرین سوال خیلی خوبی بود چون:
                        توروخدا
                    </p>
                    </Col>
                    <Col style={{textAlign:"left"}}>
                    <img src="https://vectorloo.com/wp-content/uploads/edd/2023/11/%D9%88%DA%A9%D8%AA%D9%88%D8%B1-%D8%A2%D8%AF%D9%85-%D8%A8%D8%B1%D9%81%DB%8C-%DA%A9%D9%88%DA%86%D9%88%D9%84%D9%88-%D9%86%D8%A7%D9%86%D8%A7%D8%B2-%D8%A8%D8%A7-%DA%A9%D9%84%D8%A7%D9%87-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-1.webp"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer