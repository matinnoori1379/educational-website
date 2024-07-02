import { useState } from "react";
import Navbare from "../../components/navbar/navbar";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate()

  function clickhandler() {

    if (username === "admin") {
      document.cookie = "username=admin; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
      navigate("/panel")

    } else {
      Swal.fire({
        title: "Error!",
        text: "اطلاعات وارد شده صحیح نمیباشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  }

  return (
    <>
      <Navbare />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="username=admin"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password=admin"
            />
            <button onClick={clickhandler} type="button">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
