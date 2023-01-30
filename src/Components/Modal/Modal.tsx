import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [editFolderId, setFolderId] = useState("New");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Folder
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editFolderId ? "Edit" : "New"} Folder</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new folder name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            //   value={folderName}
            //   onChange={(e: any) => setFolderName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
          //   onClick={() => {
          //     if (editFolderId) {
          //       updateFolder(editFolderId, { name: folderName });
          //     } else {
          //       addFolder({ name: folderName, parentFolderId });
          //     }
          //   }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
