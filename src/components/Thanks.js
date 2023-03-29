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

function Thanks({thanks, setThanks}) {
    const handleClose = () => {
        setThanks(false);
    };

    return (
        <div>
            <Dialog open={thanks} onClose={handleClose}>
                <DialogTitle>Thank you!</DialogTitle>
                <form action="https://formsubmit.co/4ae4ee13fa726c80a13827322c7038b8" method="POST" target="_blank">
                    <DialogContent>
                        Much obliged for your input! I'll circle back with you in a jiffy. Meanwhile, enjoy a delightful day and don't hesitate to explore my <a href="https://aspirinium.github.io/" target="_blank">online abode</a>.
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default Thanks