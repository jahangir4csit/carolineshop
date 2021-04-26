import { createMuiTheme } from '@material-ui/core/styles';

export const adminTheme = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: 'rgb(0, 171, 85)',
        width: '3px',
      }
    },
    MuiTab: {
      root: {
        textTransform: 'capitalize',
        "&:hover": {
          backgroundColor: 'rgba(145, 158, 171, 0.08)',
          color: 'rgb(99, 115, 129)'
        },
        "&$selected": {
          backgroundColor: 'rgba(0, 171, 85, 0.08)',
          color: 'rgb(0, 171, 85)',
          "&:hover": {
            backgroundColor: 'rgba(145, 158, 171, 0.08)',
            color: 'rgb(99, 115, 129)'
          }
        }
      }
    },

  },



  });