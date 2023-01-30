
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react'

export const Rename = ({onclick,handleOnClick,title}:any) => {
  const handleClose = () => {
    handleOnClick(false);
  };
  return (
    <div>
      <Dialog open={onclick} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
           {title}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()}>Cancel</Button>
          <Button onClick={()=>handleClose()}>edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

