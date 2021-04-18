import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        color: '#211f1f',
        '& ol': {
            justifyContent: 'flex-end',
            [theme.breakpoints.down("xs")]: {
                justifyContent: 'center',
            },
        }
    },
    pageheading: {
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
        },
    }
  }));

function handleClick(event) {
    event.preventDefault();
  }
  
  export default function Breadcrumb(props) {
    const classes = useStyles();
    return (
      <div class="breadcrumb-area">
          <Container maxWidth="lg">
            <Grid container direction="row">
                <Grid item sm={3} xs={12} className={classes.pageheading}>
                    <Typography className="page-title" component="span">{props.title}</Typography>
                </Grid>
                <Grid item sm={9} xs={12} className="breadcrumb-inner">
                    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Home
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                            Shop
                        </Link>
                        <Link
                        color="primary"
                        href="/components/breadcrumbs/"
                        onClick={handleClick}
                        aria-current="page"
                        >
                            {props.title}
                        </Link>
                    </Breadcrumbs>
                </Grid>
            </Grid>
          </Container>
      </div>
    );
  }