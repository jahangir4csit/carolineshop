import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import paypal from '../../assets/img/Payment/2.png';
import visacard from '../../assets/img/Payment/3.png';
import mastercard from '../../assets/img/Payment/4.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

const useStyles = makeStyles((theme) => ({
    
}));

const footers = [
    {
      title: 'CATEGORIES',
      description: ['Clothing', 'Accessories', 'Women', 'Men', 'Shoes', 'New Arrivals', 'Clearance'],
    },
    {
      title: 'OUR POLICY',
      description: ['Refund & Return Policy', 'Privacy Notice', 'Terms & conditions', 'Cookies Policy', 'Warranty Policy'],
    },
    {
      title: 'GET IN TOUCH',
    },
    {
      title: 'FOLLOW US',
    },
  ];

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="#">
         Carolina 2021.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
export default function Footer(){
    const classes = useStyles();
    return(
        <footer className="footer-area mt70 pt70">
            <div className="footer-top pb50">
                <Container maxWidth="lg">
                    <Grid container spacing={4} justify="space-evenly">
                        <Grid item xs={6} sm={3}>
                            <Typography className="footer-title" variant="h3" color="textPrimary">
                                {footers[0].title}
                            </Typography>
                            <ul className="footer_nav_list">
                                {footers[0].description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="textSecondary">
                                    {item}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography className="footer-title" variant="h3" color="textPrimary">
                                {footers[1].title}
                            </Typography>
                            <ul className="footer_nav_list">
                                {footers[1].description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="textSecondary">
                                    {item}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography className="footer-title" variant="h3" color="textPrimary">
                                {footers[2].title}
                            </Typography>
                            <ul className="contact_info_list">
                                <Grid component="li" container direction="row" spacing={2} >
                                    <Grid item>
                                        <HomeOutlinedIcon className="icon" />
                                    </Grid>
                                    <Grid item>
                                        <Typography component="span">Davis Patrick<br/>P.O. Box 147 2546 Sociosqu Rd. <br/>Bethlehem Utah 02913</Typography>
                                    </Grid>
                                </Grid>
                                <Grid component="li" container direction="row" spacing={2} >
                                    <Grid item>
                                        <MailOutlineOutlinedIcon className="icon" />
                                    </Grid>
                                    <Grid item>
                                        support@example.com
                                    </Grid>
                                </Grid>
                                <Grid component="li" container direction="row" spacing={2} >
                                    <Grid item>
                                        <CallOutlinedIcon className="icon" />
                                    </Grid>
                                    <Grid item>
                                        <Link href="tel:+496170961709">(939) 353-1107, (302) 259-2375</Link>
                                    </Grid>
                                </Grid>
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Typography className="footer-title" variant="h3" color="textPrimary">
                                {footers[3].title}
                            </Typography>
                            <ul className="footer_social_nav">
                                <li>
                                    <Link display="block" variant="body1" href="#" key="Facebook">
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <FacebookIcon />
                                            </Grid>
                                            <Grid item>Facebook</Grid>
                                        </Grid>
                                    </Link>
                                </li>
                                <li>
                                    <Link display="block" variant="body1" href="#" key="Twitter">
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <TwitterIcon />
                                            </Grid>
                                            <Grid item>Twitter</Grid>
                                        </Grid>
                                    </Link>
                                </li>
                                <li>
                                    <Link display="block" variant="body1" href="#" key="Instagram">
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <InstagramIcon />
                                            </Grid>
                                            <Grid item>Instagram</Grid>
                                        </Grid>
                                    </Link>
                                </li>
                                <li>
                                    <Link display="block" variant="body1" href="#" key="Pinterest">
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <PinterestIcon />
                                            </Grid>
                                            <Grid item>Pinterest</Grid>
                                        </Grid>
                                    </Link>
                                </li>
                                <li>
                                    <Link display="block" variant="body1" href="#" key="Youtube">
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <YouTubeIcon />
                                            </Grid>
                                            <Grid item>Youtube</Grid>
                                        </Grid>
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>                   
                </Container>
            </div>
            <div className="footer-bottom">
                <Container maxWidth="lg">
                    <Box display="flex" p={1} alignItems="center">
                        <Box p={1} flexGrow={1}>
                            <Copyright />
                        </Box>
                        <Box>
                            <Box display="flex" component="ul" alignItems="center">
                               <Box component="li"><img src={paypal} alt="paypal"/></Box>
                               <Box component="li"><img src={visacard} alt="visacard"/></Box>
                               <Box component="li"><img src={mastercard} alt="mastercard"/></Box>    
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>
        </footer>
    )
}