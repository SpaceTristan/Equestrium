import { useMoralis } from "react-moralis";
import {useEffect} from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
    titleItemRight: {
      color: "white",
    //   backgroundColor: "blue",
      top: "70%",
      height: 50,
      float: "right",
      position: "relative",
  
    }
  });

export const Header = () => {
    const {enableWeb3, authenticate, isAuthenticated, isWeb3Enabled, isAuthenticating, isWeb3EnableLoading, logout } = useMoralis();
    const classes = style();
    const enableAndAuthenticate = async () =>{
        await enableWeb3()
        await authenticate
    };

    useEffect(() => { if (isAuthenticated) { enableWeb3() }}, [enableWeb3, isAuthenticated]);

    return (
        <AppBar position="static" color='transparent'>
        <Toolbar>
        <Box display='flex' flexGrow={1}>
        </Box>
        <Button variant="contained" className={classes.titleItemRight}
                onClick={() => {
            if (!isWeb3Enabled || !isAuthenticated){
                enableAndAuthenticate()
            } else {
                logout()
            }
            
        }}
            disabled={isAuthenticating}
        >
            { isAuthenticating && isWeb3EnableLoading ? 'Authenticating...' : !isAuthenticated && !isWeb3Enabled ? 'Authenticate': 'Logout'}
        </Button>
        </Toolbar>
        </AppBar>
    )
}