import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    tabContainer: {
        minWidth: '280px',
    },
    tab:{
        textAlign: 'left',
        maxWidth: '100%',
        paddingLeft: '30px',
        paddingTop: '6px',
        minHeight: '60px',
        '& span':{
            fontSize: '1.5rem',
            fontWeight: '500',
            display: 'inline',
            verticalAlign: 'middle',
            alignItems: 'center',
            lineHeight: '21px',
        },

        '& svg':{
            marginBottom: '0!important',
            fontSize: '2rem',
            float: 'left',
            marginRight: '12px'
        },

    },
    drawerWrap: {
        minWidth: '280px',
        paddingLeft: '40px',
    },
    sideProfile: {
        borderRadius: '0',
        paddingLeft: '20px',
        boxShadow: '0px 0px 1px 0px rgb(0 0 0 / 40%)',
        '& li': {
            paddingBottom: '2px',
        }
    },
    profileText: {
        marginLeft: '15px',
        '& span': {
            fontSize: '1.5rem',
            fontWeight: '600',
        },
        '& p': {
            fontSize: '1.3rem'
        }
    },
    navWrap: {
        paddingTop: '30px',
    },
    navHeading: {
        fontWeight: '600',
        fontSize: '1.2rem',
        color: 'rgb(33, 43, 54)',
        paddingLeft: '32px',
        paddingBottom: '15px',
    }

}))