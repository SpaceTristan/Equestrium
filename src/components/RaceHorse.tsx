import { Button } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
    raceButton: {
      color: "green",
      //backgroundColor: "gray",
      top: "70%",
      height: 50,
      position: "relative",
      transform: "translateY(150%)"
  
    }
  });
export const RaceHorse = () => {
    const handleRaceSubmit = () => {
        return console.log("Horse racing")//RaceHorse()
    }
    const classes = style();
    return (
        <div>
            <Button variant="contained"
            className={classes.raceButton}
            onClick={handleRaceSubmit}>
                Race Horse
            </Button>
        </div>
    )
}