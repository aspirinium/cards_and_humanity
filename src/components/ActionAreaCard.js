import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import FormDialog from "./FormDialog";
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import {useEffect} from "react";

function ActionAreaCard({item, zIndex, action, isVisible}) {
    return (
        <div><CardActionArea onClick={action} sx={{ zIndex: zIndex, position: "absolute", width: 365, height: 650, borderRadius: 10, border: 4, borderColor: "lightseagreen", backgroundColor: "floralwhite"}}>
                <CardMedia
                    component="img"
                    height="345"
                    image={item[1]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Question {item[2] + 1}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{height: 50}}>
                        {item[0]}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </div>
    );
}

export default ActionAreaCard