import { createTheme,makeStyles } from "@material-ui/core"
import {deepPurple} from '@material-ui/core/colors/purple'


const drawerWidth = 180
const toolbarHeight = 65

export const maintheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: deepPurple,
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
    h5:{
      fontWeight:700
    }
  },
})

// Reusable styles
export const mainstyle = makeStyles({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: maintheme.zIndex.drawer + 1,
    height:toolbarHeight
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    top:toolbarHeight
  },
  menuButton: {
    marginRight: maintheme.spacing(2),
    [maintheme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    ...maintheme.mixins.toolbar,
    [maintheme.breakpoints.down("sm")]: {
      display: "none"
    },
  },
  content: {
    flexGrow: 1,
    background: '#F0F0F0',
    paddingTop: toolbarHeight/2.5,
    paddingLeft: maintheme.spacing(2),
    height: '100vh'
  },
  drawerImage:{
    width:'40%',
    margin:10
  }
})