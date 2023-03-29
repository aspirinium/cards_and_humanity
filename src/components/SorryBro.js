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
    const _refreshPage = () => {
        console.log("Clicked")
        window.location.reload()
    }
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
                        My dear fellow, you've bested me at my own charade, leaving me utterly questionless! But fret not, if your wisdom holds the key to enhancing this delightful diversion, I graciously invite you to share your sagacious insights with yours truly.
                    </Typography>
                </CardContent>
            <div>
                <Button size="small" onClick={handleClickOpen} sx={{marginRight: 5}}>Give feedback</Button>
                <Button size="small" color="secondary" onClick={_refreshPage}>Start again</Button>
                <FormDialog showPopup={showPopup} setShowpopup={setShowPopup}></FormDialog>
            </div>
        </Card>
    );
}

export default SorryBro