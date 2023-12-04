import studentimageSucess from "./image/studentImageSucess.svg";
import "./studentCreatedWithSucess.css";
import { Component } from "react";
import { Link } from 'react-router-dom';

export class StudentAddSucess extends Component {


  render() {
    return (
      <div className="container_exercise_created_sucess">
        <Link to="/menu/treinos">
        <img src={studentimageSucess} alt="exercício criado com sucesso" />
        </Link>
      </div>
    );
  }
}
