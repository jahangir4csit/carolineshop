import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import profileBanner from '../../../../assets/img/profile-background.jpg';

import useStyles from './styles';


const UserDetails = () => {
    const classes = useStyles();
    const { user } = useSelector( state => state.loadUser );
 
    return(
        <div className={classes.root} >
            <Box display="flex" >
                <Box>
                    <Sidebar />
                </Box>
                <Box flexGrow={1}>
                    <main className={classes.content}>
                        <div className="appbarspace" />
                        <Container maxWidth="lg">
                            <Grid container direction="column" spacing="3">
                                <Grid item xs={12}>
                                    <Box display="flex">
                                        <Box flexGrow={1}>
                                            <Typography variant="h2" className="contentHeading">Profile</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    {user && (
                                    <Card className={classes.userProfile}>
                                        <CardMedia
                                        className={classes.profileBg}
                                        image={profileBanner}
                                        title="profile header"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {user.username}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Email: {user.email}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Role: {user.role}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Phone: {user.phone}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="h3">
                                                Address
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                City: {user.city ? user.city : 'empty'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Street: {user.street ? user.street : 'empty'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                zipcode: {user.zipcode ? user.zipcode : 'empty'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                            Share
                                            </Button>
                                            <Button size="small" color="primary">
                                            Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    )}

                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </Box>
            </Box>
        </div>
    )
}
export default UserDetails;