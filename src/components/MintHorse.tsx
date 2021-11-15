import { Button } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
    mintButton: {
      color: "white",
      //backgroundColor: "gray",
      top: "70%",
      height: 50,
      position: "relative",
      transform: "translateY(50%)"
  
    }
  });
export const MintHorse = () => {
    const handleMintSubmit = () => {
        return MintHorse()
    }
    const classes = style();
    return (
        <div>
            <Button variant="contained"
            className={classes.mintButton}
            onClick={handleMintSubmit}>
                Mint Horse
            </Button>
        </div>
    )
}