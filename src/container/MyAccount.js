import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '70px auto',
        maxWidth: 600,
        boxShadow: 'none'
      },
      appHeader: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      tabHeading:{
          fontSize: '24px',
          textTransform: 'capitalize',
      },
      formActionBottom: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        '& a':{
          color: '#211f1f',
        }
      },
      remember: {
        '& svg':{
          fontSize: '20px',
        }
      }
  }));

  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      '.MuiOutlinedInput-root': {
        borderRadius: '0'
      },
      '.MuiButton-root': {
        borderRadius: '0',
        boxShadow: 'none',
        backgroundColor: '#141414',
        padding: '15px 28px',
        marginTop: '15px',
        color: '#fff',
        
      },
      '.MuiButton-root:hover': {
        backgroundColor: '#FF8E78',
        color: '#fff',
      },
    },
  })(() => null);

export default function MyAccount() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const signUp = event =>{
      event.preventDefault();
      const request = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({
          username: 'username', 
          email: 'ja@gmail.com', 
          firstname: 'First name',
          lastname: 'Last name',
          password: 'password', 
        })
      };
      fetch('http://localhost:8080/signup', request)
      .then((res) => res.json())
	    .then((json) => console.log(json));
    }

    return (
        <div className={classes.root}>
            <GlobalCss />
            <Paper className={classes.paper} >
                <AppBar position="static" color="default" className={classes.appHeader}>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    >
                        <Tab className={classes.tabHeading} label="Login" {...a11yProps(0)} />
                        <Tab className={classes.tabHeading} label="/" disabled {...a11yProps(1)} />
                        <Tab className={classes.tabHeading} label="Register" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <Box display="flex" justifyContent="center" m={1} p={1}>
                        <Box p={1}>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Log in
                                </Button>
                                <Grid container className={classes.formActionBottom}  alignItems="center">
                                    <Grid item xs>
                                      <FormControlLabel
                                      control={<Checkbox value="remember" color="primary" />}
                                      label="Remember me"
                                      className={classes.remember}
                                      />
                                    </Grid>
                                    <Grid item>
                                      <Link href="#" variant="body2">
                                          Forgot password?
                                      </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1}></TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                      <Box display="flex" justifyContent="center" m={1} p={1}>
                        <Box p={1}>
                          <form className={classes.form} noValidate onSubmit={(event)=> signUp(event)}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  autoComplete="fname"
                                  name="firstName"
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="firstName"
                                  label="First Name"
                                  autoFocus
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="lastName"
                                  label="Last Name"
                                  name="lastName"
                                  autoComplete="lname"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="username"
                                  label="Username"
                                  name="username"
                                  autoComplete="Username"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="email"
                                  label="Email Address"
                                  name="email"
                                  autoComplete="email"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  name="password"
                                  label="Password"
                                  type="password"
                                  id="password"
                                  autoComplete="current-password"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                                  label="I want to receive inspiration, marketing promotions and updates via email."
                                  className={classes.remember}
                                />
                              </Grid>
                            </Grid>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                            >
                              Sign Up
                            </Button>
                          </form>
                        </Box>
                      </Box>
                  </TabPanel>
            </Paper>
        </div>
      );
}