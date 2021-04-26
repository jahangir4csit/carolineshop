import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import useStyles from './styles'; 

const Categories = () => {
    const classes = useStyles();
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
                            <Grid container direction="row">
                                <Grid item xs={12}>
                                    <Typography variant="h2">Categories</Typography>
                                    <Button
                                    variant="contained"
                                    className="createButton"
                                    component={Link} to="/admin/addcategory/create"
                                    startIcon={<AddOutlinedIcon />}
                                    >
                                        Create Product
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </Box>
            </Box>
        </div>
    )
}
export default Categories;