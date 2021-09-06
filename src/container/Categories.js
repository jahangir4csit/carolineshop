import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/ui/Loader';
import { getCategories } from '../store/actions/categoryAction';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,
    },
  }));
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


const Categories = (props) => {

  const classes = useStyles();
  const { loading, categories } = useSelector((state)=> state.categories);
      // Get Products
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(getCategories());
      }, [dispatch])

      const data = {
        rows: []
      }
      categories.forEach(category => {
        data.rows.push({
          name: category.name,
          description: category.description,
        })
      });

    return(
      <Fragment>
        {loading ? <Loader /> : (
          <Fragment>
            <Container className={classes.productGrid} maxWidth="lg" style={{ paddingTop: 70 }}>
              <Grid container spacing={4} className="categories">
                <Grid item xs={12} className="section-title text-center">
                  <Typography variant="h3" component="h3">
                    All Categories
                  </Typography>
                </Grid>
                <Grid container className="categories text-center" justifyContent="center" alignItems="center">
                    <div className={classes.root}>
                        <List component="nav" aria-label="list">
                            {data.rows.map((row) => (
                                <ListItemLink href="#link">
                                    <ListItemText className="text-center">{row.name} </ListItemText>
                                </ListItemLink>
                            ))}
                        </List>
                    </div>
                </Grid>
              </Grid>
            </Container>
          </Fragment>
        )}
      </Fragment>
    )
}
export default Categories;