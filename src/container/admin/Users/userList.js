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
import {getUsers, deleteUser} from '../../../store/actions/userAction';
import { setSnackbar } from "../../../store/reducers/snackbarReducer";

import commonStyles from '../commonStyle'; 
import useStyles from './styles'; 


export default function DataTable() {
  const classes = useStyles();
  const common = commonStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector( state => state.auth );
  const { loading, users } = useSelector((state)=> state.users);
  const { isDeleted, error } = useSelector((state)=> state.deleteUser);

  const token = userInfo.userInfo.token;

  useEffect(()=>{
    dispatch(getUsers(token));
    if(error){
      dispatch(setSnackbar(true,"error","User Delete Failed"));
    }
    if(isDeleted){
      dispatch(setSnackbar(true,"success","User Deleted Successfully"));
      history.push('/admin/categories');
    }
  },[dispatch, error, history, isDeleted, token]);

  const data = {
    columns: [
      {
        label: 'User',
        field: 'name',
      },
      {
        label: 'Username',
        field: 'username',
      },
      {
        label: 'Email',
        field: 'email',
      },
      {
        label: 'Role',
        field: 'role',
      },
      {
        label: 'Actions',
        field: 'actions',
      }
    ],
    rows: []
  }
  users.forEach(user => {
    data.rows.push({
      name: user.firstname + ' ' + user.lastname,
      username: user.username,
      email: user.email,
      role: user.role,
      actions: <Fragment>
        <Link className={common.editBtn} to={`/admin/user/${user._id}`} ><EditOutlinedIcon /> </Link>
        <Button onClick={()=> deleteHandler(user._id, token)} component={Link} className={common.deleteBtn}>
          <CloseOutlinedIcon />
        </Button>
      </Fragment>
    })
  })

  const deleteHandler = (id, token) => {
    dispatch(deleteUser(id, token));
  }

  console.log(users, 'get user')
  
  return (
    <Paper className={common.paper}>
      <TableContainer>
        <Table className={common.table} aria-label="data table">
          <TableHead className={common.tableHeading}>
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
                  { row.name }
                </TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}