import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid, TextField } from '@mui/material';

export default function EditPatient(props) {
  return (
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={1}>
             <TextField fullWidth id="standard-basic" label="id" disabled variant="standard" value={props.data.id} />
             </Grid>
             <Grid item xs={12} sm={11}>
             <TextField fullWidth id="standard-basic" label="Nome" variant="standard" value={props.data.name} />
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField fullWidth id="standard-basic" label="Cidade" variant="standard" value={props.data.cidade} />
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField fullWidth id="standard-basic" label="Estado" variant="standard" value={props.data.estado} />
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField fullWidth id="standard-basic" label="Idade" variant="standard" value={props.data.idade} />
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField fullWidth id="standard-basic" label="Data de cadastro" disabled variant="standard" value={props.data.dataCadastro} />
             </Grid>
             </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color='secundary'>Cancelar</Button>
          <Button onClick={props.handleClose} autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      
  );
}