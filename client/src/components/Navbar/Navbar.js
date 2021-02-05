import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Typography, Toolbar, Avatar } from '@material-ui/core';

import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ?
                    (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.resulr.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={() => { }}>Logout</Button>
                        </div>
                    ) :
                    (
                        <Button component={Link} to="/auth" variant="contained" colort="primary">Sign in</Button>
                    )
                }
            </Toolbar>
        </AppBar>

    );
};

export default Navbar;
