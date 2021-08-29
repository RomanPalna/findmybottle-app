import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && <div>Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
