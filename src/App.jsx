import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AuthRoute, PrivateRoute } from './routes';
import {
  TextFieldDemo, InputDemo, ChildrenDemo, TraineeList, Login, PageNotFound,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <PrivateRoute exact path="/" component={TraineeList} />
          <PrivateRoute path="/trainee" component={TraineeList} />
          <PrivateRoute exact path="/textFieldDemo" component={TextFieldDemo} />
          <PrivateRoute exact path="/inputDemo" component={InputDemo} />
          <PrivateRoute exact path="/childrenDemo" component={ChildrenDemo} />
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute component={PageNotFound} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
