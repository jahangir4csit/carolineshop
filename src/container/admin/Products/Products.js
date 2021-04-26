import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade, lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Product from './product/Product';
import {getProducts} from '../../../store/actions/productAction';
import Badge from '@material-ui/core/Badge';
import useStyles from './styles'; 

const Products = () => {
    const classes = useStyles();
    const { loading, products, error } = useSelector((state)=> state.productList);

    // Get Products
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


function createData(productImg, product, created, status, price, action) {
    return { productImg, product, created, status, price, action };
  }

  const status = <Badge badgeContent={'In Stock'} className="badge success" />;
  const rows = [];
  for (let i = 0; i < products.length; i++) {
    rows.push(createData(products[i].image, products[i].title, products[i].category, status, products[i].price, 'Edit | Delete'))
} 

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    { id: 'product', numeric: false, disablePadding: true, label: 'Product' },
    { id: 'created', numeric: true, disablePadding: false, label: 'Created at' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead className={classes.tableHeading}>
        <TableRow className="productRowHead">
          <TableCell padding="checkbox">
            <Checkbox
            style={{
                transform: "scale(1.5)",
            }}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={true}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        border: '1px solid #ccc',
        borderRadius: 4,
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },

  }));
  
  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <div className={`${classes.search} ${classes.title}`}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, product) => {
    const selectedIndex = selected.indexOf(product);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, product);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (product) => selected.indexOf(product) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return(
        <div className={classes.root} >
            <Box display="flex" >
                <Box>
                    <Sidebar />
                </Box>
                <Box flexGrow={1}>
                    <main className={classes.content}>
                        <div className="appbarspace" />
                        <Container maxWidth="lg">
                            <Grid container direction="column" spacing="3">
                                <Grid item xs={12}>
                                    <Box display="flex">
                                        <Box flexGrow={1}>
                                            <Typography variant="h2" className="contentHeading">Product List</Typography>
                                        </Box>
                                        <Box>
                                            <Button
                                            variant="contained"
                                            className="createButton"
                                            component={Link} to="/admin/product/create"
                                            startIcon={<AddOutlinedIcon />}
                                            >
                                                Create Product
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <EnhancedTableToolbar numSelected={selected.length} />
                                        <TableContainer>
                                            <Table
                                                className={classes.table}
                                                aria-labelledby="tableTitle"
                                                aria-label="enhanced table"
                                            >
                                                <EnhancedTableHead
                                                classes={classes}
                                                numSelected={selected.length}
                                                order={order}
                                                orderBy={orderBy}
                                                onSelectAllClick={handleSelectAllClick}
                                                onRequestSort={handleRequestSort}
                                                rowCount={rows.length}
                                                />
                                                <TableBody>
                                                {stableSort(rows, getComparator(order, orderBy))
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row, index) => {
                                                    const isItemSelected = isSelected(row.product);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.product)}
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.product}
                                                        selected={isItemSelected}
                                                        className="dataTblBody"
                                                        >
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                            style={{
                                                                transform: "scale(1.5)",
                                                            }}
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                            />
                                                        </TableCell>
                                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                                            <Box display="flex">
                                                                <Box p={1}>
                                                                    <img className={classes.rowProductImg} align="left" src={row.productImg} alt={row.product} />
                                                                </Box>
                                                                <Box alignSelf="center">
                                                                    {row.product}
                                                                </Box>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="right">{row.created}</TableCell>
                                                        <TableCell align="right">{row.status}</TableCell>
                                                        <TableCell align="right">{row.price}</TableCell>
                                                        <TableCell align="right">{row.action}</TableCell>
                                                        </TableRow>
                                                    );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </Box>
            </Box>
        </div>
    )
}
export default Products;
