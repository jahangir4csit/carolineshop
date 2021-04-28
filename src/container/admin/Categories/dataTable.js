import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles'; 
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {getCategories} from '../../../store/actions/productAction';


export default function DataTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector((state)=> state.categories);

  useEffect(()=>{
    dispatch(getCategories());
    if(error){
      console.log(error);
    }
  },[dispatch, error]);

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
        <Link to="admin/category/edit"><BorderColorOutlinedIcon /> </Link>
        <Button>
          <DeleteOutlineOutlinedIcon />
        </Button>
      </Fragment>
    })
  })

  
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