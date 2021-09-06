import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';

const Contact = ()=>{
    const [dataLoad, setDataLoad] = useState({isLoad: false});

    useEffect(() => {
        const timer = setTimeout(() => 
        setDataLoad({isLoad: true}), 
        1000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className="container">
            {dataLoad.isLoad ?
            <Container className="page"  maxWidth="lg" style={{ paddingTop: 70 }}>
            <Grid container className="page_title">
                <Grid item xs={12} className="section-title text-center">
                <Typography variant="h2" component="h2">
                    Contact Us
                </Typography>
                </Grid>
            </Grid>
            <Grid container className="content contact text-center">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
            </Grid>
        </Container>
            : <Loader /> 
            }
        </div>
    )
}

export default Contact;