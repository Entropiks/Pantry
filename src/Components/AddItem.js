import React from "react";
import { render } from "react-dom";
import "./AddItem.css";

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Enter your ingredients.."
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({ value: this.props.predicted });
      console.log(this);
      
      var item = (this.state.value);
      console.log(item);
    }

  }

  // Need to create api call to http://www.recipepuppy.com/about/api/
  // One ingredient -> press enter to add to list
  // When list has > 1 ingredient, start to render recipes

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default AddItem;

render(
  <AddItem
    id={1}
    label="Field label"
    predicted="California"
    locked={false}
    active={false}
  />,
  document.getElementById("root")
);

// export default AddItem;
