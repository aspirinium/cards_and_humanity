import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css';
import {useState} from "react";
import Thanks from "./Thanks";

function FormDialog({showPopup, setShowpopup}) {

    const [thanks, setThanks] = useState(false)
    const handleClose = () => {
        setShowpopup(false);
    };

    const handleSend = () => {
        setShowpopup(false);
        setThanks(true)
    }

    return (
        <div>
            {thanks && <Thanks thanks={thanks} setThanks={setThanks}></Thanks>}
            <Dialog open={showPopup} onClose={handleClose}>
                <DialogTitle>What do you think?</DialogTitle>
                <form action="https://formsubmit.co/4ae4ee13fa726c80a13827322c7038b8" method="POST" target="_blank">
                <DialogContent>
                        <input class="input" type="text" placeholder="Name" required
                                  name="name"/>
                        <input class="input" type="email" placeholder="Email" required
                                  name="email"/>
                        <input class="input" type="text" placeholder="Subject"
                                  required name="_subject"/>
                        <textarea class="feedback" type="text" placeholder="Message"
                                  required name="message"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSend} type="submit">Send</Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default FormDialog