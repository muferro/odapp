import { useParams } from "react-router-dom";
import { getPatient } from "../data";


import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import {  Button } from '@mui/material';
import DeletePatient from "../Components/DeletePatient";
import EditPatient from "../Components/EditPatient";


export default function Patient() {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  let params = useParams();
  let patient = getPatient(parseInt(params.patientId, 10));

return (
  <>
  <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
          {patient.name.slice(0,1)}
        </Avatar>
      }
      title={patient.name}
      subheader={`${patient.cidade} - ${patient.estado}`}
    />
    <CardContent>
      <p>Idade: {patient.idade}</p>
      <p>Data de cadastro: {patient.dataCadastro} </p>
    </CardContent>
    <CardActions sx={{justifyContent : 'flex-end'}}     >
        <Button color="warning" onClick={handleClickOpen}>Deletar</Button>
        <Button onClick={handleClickOpenEdit}>Editar</Button>    
    </CardActions>
  </Card>

  {open && <DeletePatient data={patient} open={open} handleClose={handleClose}/> }

  {openEdit && <EditPatient data={patient} open={openEdit} handleClose={handleCloseEdit}/> }

  </>
);
}




