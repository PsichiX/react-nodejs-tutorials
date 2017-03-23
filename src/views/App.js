import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const style = {
  container: {
    width: '100%',
    height: '100%'
  }
};

const App = () => (
  <MuiThemeProvider>
    <Paper style={style.container}>
      <AppBar title="React and Node.js tutorials"/>
      <div>
        Blog posts will be rendered here
      </div>
    </Paper>
  </MuiThemeProvider>
);

export default App;
