import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react'

export const Add = ({onclick,handleOnClick,title}:any) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   // setOpen(true);
  //   handleOnClick(true)
  // };

  const handleClose = () => {
    handleOnClick(false);
    // setOpen(false)
  };
  // console.log(onclick)
  // console.log(handleOnClick)

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={onclick} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
           Add {title}
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
          <Button onClick={()=>handleClose()}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
