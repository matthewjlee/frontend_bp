import React, { Component } from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import { AnchorButton } from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div>
        <AnchorButton text="Click" />
      </div>
    );
  }
}

export default App;
