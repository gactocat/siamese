import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './main.css';

injectTapEventPlugin()

const style = {
  margin: 12,
};

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Title" />
      <div>
        <TextField
          hintText="/api/sub/account/listup"
          floatingLabelText="Path to bitFlyer"
          fullWidth={true}
          />
      </div>
      <div>
        <TextField
          hintText='{"account_id":"BF10-3853-2993-15"}'
          floatingLabelText="Parameter with Json"
          rows={1}
          multiLine={true}
          fullWidth={true}
          />
      </div>
      <RaisedButton label="Send" primary={true} style={style} />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

