import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./courseitem.css"

function Courseitem({id,img,title,desc,buybutton}){
    return(
        <Card style={{ width: '18rem' , height:"25rem"}}>
        <Card.Img style={{height:"120px"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button variant="primary">
            <Link to={`/course/${id}`} className='buy-btn'>ادامه مطلب</Link>
          </Button>
        </Card.Body>
      </Card>
    )
}
export default Courseitem