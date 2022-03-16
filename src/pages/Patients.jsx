import { Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {
    NavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";
  import { getPatients } from "../data";
  
  export default function Patients() {
    let patients = getPatients();
    let [searchParams, setSearchParams] = useSearchParams();

    console.log('patients', patients)
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}  >

      <Paper elevation={3}>
        <Box p={2}>
          <nav >
            <TextField fullWidth id="outlined-basic" value={searchParams.get("filter") || ""} label="Pesquisar paciente" variant="outlined" onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }} />

            {patients
              .filter((patient) => {
                let filter = searchParams.get("filter");
                console.log('filter', filter)
                if (!filter) return true;
                let name = patient.name.toLowerCase();
                console.log('name', name)
                return name.startsWith(filter.toLowerCase());
              })
              .map((patient) => (
                <NavLink
                  style={({ isActive }) => ({
                    display: "block",
                    margin: "1rem",
                    color: "rgb(83 82 82)",
                    textDecoration: 'none',
                    borderBottom: isActive ? "1px Solid" : "none",
                  })}
                  to={`/pacientes/${patient.id}`}
                  key={patient.id}
                >
                  {patient.name}
                </NavLink>
              ))}
          </nav>
        </Box>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Outlet />  
          </Grid>
      </Grid>
    );
  }