import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeletePatient(props) {
  return (
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O usuário <b>{props.data.name}</b> será deletado do sistema, você tem certeza que deseja realizar esta ação?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color='secundary'>Não</Button>
          <Button onClick={props.handleClose} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      
  );
}