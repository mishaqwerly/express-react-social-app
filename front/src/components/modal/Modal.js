import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default function AlertDialog({isOpen, onClose, children}) {
  const handleClose = () => {
    onClose(false)
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </div>
  );
}
