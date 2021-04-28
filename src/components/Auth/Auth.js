import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Loader from '../../components/ui/Loader';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from '../../store/actions/authAction';
import { setSnackbar } from "../../store/reducers/snackbarReducer";
import useStyles from './styles';

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

  const initialData = { firstName: '', lastName: '', username: '', email: '', password: '',  }

const Auth = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [formData, setFormData] = useState(initialData);

    // Auth process
    const { isAuthenticated, loading, error } = useSelector( state => state.auth );

    useEffect(() => {
      if(isAuthenticated){
        dispatch(setSnackbar(true,"success","Logged in Successfully"));
        history.push('/');
      }
      if(error){
        dispatch(setSnackbar(true,"error","Logged in Failed"));
      }
    },[dispatch, isAuthenticated, error, history])
    
    const handleSignIn = (event) => {
        event.preventDefault();
        dispatch(signin(formData.email, formData.password));
    }
    const [value, setValue] = React.useState(0);

    const handleSignUp = (event) => {
      event.preventDefault();
      dispatch(signup(formData, history));
    }

    const tabChange = (e, newValue) => {
      setValue(newValue)
    }
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    

    return (
        <Fragment>
          {loading ? <Loader /> : (
            <Fragment>
              <div className={classes.root}>
                <GlobalCss />
                <Paper className={classes.paper} >
                  <AppBar position="static" color="default" className={classes.appHeader}>
                      <Tabs
                      value={value}
                      onChange={tabChange}
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
                              <form className={classes.form} noValidate onSubmit={handleSignIn}>
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
                                      onChange={handleChange}
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
                                      onChange={handleChange}
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
                            <form className={classes.form} noValidate onSubmit={handleSignUp}>
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
            </Fragment>
          )}
        </Fragment>
      );
}
export default Auth;