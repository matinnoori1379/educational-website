import { Col, Container, Row } from "react-bootstrap"
import "./Home.css"
import Navbare from "../../components/navbar/navbar"
import progimg from "../../assest/images/6330601_35378.jpg"
import Courseitem from "../../components/course/courseitem"
import { useState } from "react"

import{coursedata} from "../../coursedata.js"
import Footer from "../../components/footer/footer"
function Home(){
    let[courses , setCourses]=useState(coursedata)

    return(
        <div>
            <Navbare/>
            <Container>
                <Row className="my-5 align-items-center">
                    <Col lg={6}>
                    <h1> کاشف الشفا سایتی که میتونین خودتون دکتر خودتون باشین</h1>
                    <p> در این سایت قراره از خواص و مزیت های انواعی از گیاهان و میوه ها گرفته تا تا انواع سبک های درمانی چه سنتی و چه مدرن اطلاع پیدا کنین و برای خوتون یه پا درمانگر بشین پس توصیه میکنیم که وقت خوتونو توی اینساگرام و یوتیوب تلف نکنین به سیایت ما سر بزنین توی این سایت قراره با هم پیشرفت کنیم</p>
                    </Col>
                    <Col lg={6} className="py-4">
                    <img src={progimg} className="img-fluid" />
                    </Col>
                </Row>
                <Row className="my-5">
                    <h2 style={{ margin: '20px 0'}}>دوره های آموزشی</h2>

                    {courses.map(course =>(
                        <Col key={course.id} md={6} lg={4} xl={3}>
                            <Courseitem {...course}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer/>
        </div>
        
    )
}
export default Home