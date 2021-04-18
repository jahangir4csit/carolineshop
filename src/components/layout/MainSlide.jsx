import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TrendingFlatOutlinedIcon from '@material-ui/icons/TrendingFlatOutlined';

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '0px',
        border: '1px solid #fff',
        fontSize: '16px',
        letterSpacing: '0px',
        lineHeight: '33px',
        color: '#000',
        padding: '13px 35px',
        background: '#fff',
        '& svg': {
            color: theme.palette.primary.main,
        },
        '&:hover': {
            border: '1px solid #000',
            background: '#000',
            color: '#fff',
            '& svg':{
                color: '#fff',
            }
        }
    }
}));

const MainSlider = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    return(
        <div className="banner-bg d-flex align-items-center">
            <Container maxWidth="lg" className="banner-content">
                <Typography variant="h3" className="subtitle">
                    30 % OFF
                </Typography>
                <Typography variant="h2" className="title">
                    FAVOURITE CLOTHING
                </Typography>
                <div className="mt50 pl-1">
                    <div class="btn-wrapper">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<TrendingFlatOutlinedIcon />}
                        >
                            GET COLLECTION
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default MainSlider;
