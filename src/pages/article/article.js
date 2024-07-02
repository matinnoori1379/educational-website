import {
  NavLink,
  Outlet,
} from "react-router-dom";
import Navbare from "../../components/navbar/navbar";
import { Button } from "react-bootstrap";
import "./article.css";
function Article() {
  return (
    <div className="wrapper">
      <Navbare />
      <h1>صفحه مقالات</h1>
      <hr />
      <Button variant="primary">
        <NavLink style={{ color: "white", textDecoration: "none" }} to="pm">
          طب سنتی
        </NavLink>
      </Button>

      <Button style={{ margin: "0 8px" }} variant="primary">
        <NavLink style={{ color: "white", textDecoration: "none" }} to="nm">
          طب مدرن
        </NavLink>
      </Button>

      <Button variant="primary">
        <NavLink style={{ color: "white", textDecoration: "none" }} to="belive">
          باور ها
        </NavLink>
      </Button>

      <hr />
      <Outlet />
    </div>
  );
}
export default Article;
