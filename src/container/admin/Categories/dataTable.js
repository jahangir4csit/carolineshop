import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {getCategories, deleteCategory } from '../../../store/actions/categoryAction';
import { setSnackbar } from "../../../store/reducers/snackbarReducer";

import commonStyles from '../commonStyle'; 
import useStyles from './styles'; 


export default function DataTable() {
  const classes = useStyles();
  const common = commonStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated, userInfo } = useSelector( state => state.auth );
  const { loading, categories, error } = useSelector((state)=> state.categories);
  const { isDeleted } = useSelector((state)=> state.deleteCategory);

  const token = userInfo.userInfo.token;

  useEffect(()=>{
    dispatch(getCategories());
    if(isDeleted){
      dispatch(setSnackbar(true,"success","Category Deleted Successfully"));
      history.push('/admin/categories');
    }
  },[dispatch, error, history, isDeleted]);

  const data = {
    columns: [
      {
        label: 'Category Name',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc'
      },
      {
        label: 'Actions',
        field: 'actions',
      }
    ],
    rows: []
  }
  categories.forEach(category => {
    data.rows.push({
      name: category.name,
      description: category.description,
      actions: <Fragment>
        <Link className={common.editBtn} to={`/admin/category/${category._id}`} ><EditOutlinedIcon /> </Link>
        <Button onClick={()=> deleteHandler(category._id, token)} component={Link} className={common.deleteBtn}>
          <CloseOutlinedIcon />
        </Button>
      </Fragment>
    })
  })

  const deleteHandler = (id, token) => {
    dispatch(deleteCategory(id, token));
  }

  
  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table className={classes.table} aria-label="data table">
          <TableHead className={classes.tableHeading}>
            <TableRow className="productRowHead">
              {data.columns.map((column) => (
              <TableCell>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}