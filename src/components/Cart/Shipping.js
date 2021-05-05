import React, {Fragment, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {saveShippingDetails} from '../../store/actions/cartAction';

export default function AddressForm() {

    const {shippingDetails} = useSelector((state) => state.cart);
    const [firstName, setFirstName] = useState(shippingDetails.firstName);
    const [lastName, setLastName] = useState(shippingDetails.lastName);
    const [address, setAddress] = useState(shippingDetails.address);
    const [city, setCity] = useState(shippingDetails.city);
    const [phone, setPhone] = useState(shippingDetails.phone);
    const [zipCode, setzipCode] = useState(shippingDetails.zipCode);
    const [country, setCountry] = useState(shippingDetails.country);

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDafault();
        dispatch(saveShippingDetails({firstName, lastName, address, city, phone, zipCode, country}))
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address-line"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="phone" name="phone" label="Phone Number" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </form>
    </React.Fragment>
  );
}