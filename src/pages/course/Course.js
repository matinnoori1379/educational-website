import { useParams } from "react-router-dom";
import Navbare from "../../components/navbar/navbar";
import { coursedata } from "../../coursedata.js";
import { Col, Container, Row } from "react-bootstrap";
import { morinfo } from "../../coursedata.js";

function Course() {
  let courseid = useParams().extra;
  let maincourse = coursedata.find((item) => item.id == courseid);
  console.log(maincourse);
  console.log(morinfo[courseid-1]);

  return (
    <div>
      <Navbare />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img style={{ height: "250px" }} src={maincourse.img} />
          </Col>
          <Col md={7} className="my-3">
            <h2>{maincourse.title}</h2>
            <p>
              <b>نام مدرس: متین نوری</b>
            </p>
            <p>{maincourse.desc}</p>
            <p style={{textAlign:"justify"}}>
              {morinfo[courseid-1]}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Course;
