import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";
import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: false,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedPerson !== prevProps.selectedPerson) {
      this.updatePerson();
    }
  }
  updatePerson = () => {
    const id = this.props.selectedPerson;
    if (!id) return;

    this.setState({ loading: true });
    this.swapiService.getPerson(id).then((person) => this.setState({ person }));
    this.setState({ loading: false });
  };
  render() {
    const { loading } = this.state;
    if (loading) return <Spiner />;
    if (!this.state.person) return <span>Select</span>;
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className="row person-details-bar">
        <div className="col-md-5">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            className="person-image"
            alt="..."
          />
        </div>
        <div className="col-md-7 py-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name {name}</li>
            <li className="list-group-item">Gender {gender}</li>
            <li className="list-group-item">BirthYear {birthYear}</li>
            <li className="list-group-item">EyeColor {eyeColor}</li>
          </ul>
        </div>
      </div>
    );
  }
}
