import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(255, 152, 0, 1)',
  },
  image: {
    marginLeft: '15px',
    
  },
  // form: {
  //   flexDirection: 'row',
  //   margin: '30px 0',
  // }
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection:'column-reverse',
      // marginTop: theme.spacing(2),
    }
  }
  
}));