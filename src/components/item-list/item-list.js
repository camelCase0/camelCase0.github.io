import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </a>
      );
    });
  }
  render() {
    const { itemList } = this.state;
    if (!itemList) return <Spiner />;

    const items = this.renderItems(itemList);
    return <div className="list-group mx-4"> {items} </div>;
  }
}
