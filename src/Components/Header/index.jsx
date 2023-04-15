import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';
import Register from '../../Features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <Link to='/'>
                <CodeIcon />
              </Link>
            </IconButton>

            <Typography variant='h6' className={classes.title}>
              News
            </Typography>

            <Button>
              <NavLink className={classes.link} to='/todos'>
                Todo
              </NavLink>
            </Button>

            <Button>
              <NavLink className={classes.link} to='/albums'>
                Albums
              </NavLink>
            </Button>

            <Button onClick={handleClickOpen} style={{ color: 'inherit' }}>
              Register
            </Button>
          </Toolbar>
        </AppBar>

        {/* Dialog */}
        <Dialog
          open={open}
          onClose={(event, reason) => {
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown')
              setOpen(false);
            else handleClose;
          }}
          aria-labelledby='form-dialog-title'
          disableEscapeKeyDown
        >
          <DialogContent>
            <Register />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        {/* End-Dialog */}
      </div>
    </>
  );
}
