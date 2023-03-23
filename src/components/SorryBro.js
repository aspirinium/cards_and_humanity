import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useState} from "react";
import FormDialog from "./FormDialog";

function SorryBro({item, action, startAgain}) {
    const [showPopup, setShowPopup] = useState(false)
    const handleClickOpen = () => {
        setShowPopup(true);
    };
    return (
        <Card sx={{ width: 365, height: 650, borderRadius: 10, border: 4, borderColor: "lightseagreen", backgroundColor: "floralwhite"}} onClick={action}>
                <CardMedia
                    component="img"
                    height="345"
                    image={item[1]}
                    sx={{ marginTop: 3 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Finito
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Sorry bro, you outplayed me at my own game and I don't have any more questions for you. However, if you have any suggestions and think you can help to improve the game, feel free to hit me up.
                    </Typography>
                </CardContent>
            <div>
                <Button size="small" onClick={handleClickOpen} sx={{marginRight: 5}}>Give feedback</Button>
                <Button size="small" color="secondary" onClick={startAgain}>Start again</Button>
                <FormDialog showPopup={showPopup} setShowpopup={setShowPopup}></FormDialog>
            </div>
        </Card>
    );
}

export default SorryBro