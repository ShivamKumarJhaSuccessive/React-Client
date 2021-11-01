import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Route, Switch, Link } from 'react-router-dom';
import { AddDialog } from './components';
import { trainees } from './data';
import { TraineeDetail } from '.';

const TraineeList = (props) => {
  const { match: { path } } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleOnClose = () => {
    setOpenDialog(false);
  };

  return (
    <Switch>
      <Route
        exact
        path={path}
        component={() => (
          <div>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
              ADD TRAINEE LIST
            </Button>
            <AddDialog open={openDialog} onClose={handleOnClose} />
            {trainees.map((item, idx) => {
              const { name, id } = item;
              const { index } = idx;
              return (
                <ul>
                  <li key={index}>
                    <Link to={`/trainee/${id}`}>{name}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      />
      <Route
        exact
        path={`${path}/:id`}
        component={(match) => <TraineeDetail match={match.match.params} />}
      />
    </Switch>
  );
};

TraineeList.propTypes = {
  match: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default TraineeList;