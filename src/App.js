import React, { Component } from 'react';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import {Card, Colors, EditableText, Elevation} from "@blueprintjs/core";

import './App.css'
import SomeCard from 'src/components/SomeCard';

class App extends Component {
  render() {
      return (
      <div className="container">
          <h1 className="bp3-heading" style={{ color: Colors.LIGHT_GRAY5 }}>
              Recruiter App Portal
          </h1>
          <SomeCard/>
          <Card
              interactive={false}
              elevation={Elevation.THREE}
              style={{ color: Colors.GRAY3 }}
              className="card-with-text"
          >
              <h1 className="bp3-heading">
                  <EditableText/>
              </h1>
              <span className="bp3-editable-text">
                  <EditableText multiline={true} minLines={3} maxLines={12} />
              </span>
          </Card>
      </div>
    );
  }
}

export default App;
