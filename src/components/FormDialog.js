import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialog({showPopup, setShowpopup}) {

    const handleClose = () => {
        setShowpopup(false);
    };

    return (
        <div>
            <Dialog open={showPopup} onClose={handleClose}>
                <DialogTitle>What do you think?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you wish to hear back, provide your email here.
                    </DialogContentText>
                    <div>
                    <div><TextField autoFocus id="email" margin="dense" label="Email" /></div>
                    <div><TextField
                        autoFocus
                        margin="dense"
                        id="feedback"
                        label="Feedback"
                        multiline
                        maxRows={9}
                    /></div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog