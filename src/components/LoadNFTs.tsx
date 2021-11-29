import { Button } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
    loadNFT: {
      color: "white",
      //backgroundColor: "gray",
      top: "70%",
      height: 50,
      position: "relative",
      transform: "translateY(50%)"
  
    }
  });
export const LoadNFTs = () => {
    const handleNFTLoad
     = () => {
        return console.log("NFT loaded")//MintHorse()
    }
    const classes = style();
    return (
        <div>
            <Button variant="contained"
            className={classes.loadNFT}
            onClick={handleNFTLoad}>
                Load NFT 
            </Button>
        </div>
    )
}