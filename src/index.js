import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from "./App";
import theme from "./styles/theme";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Patients from "./pages/Patients";
import Patient from "./pages/Patient";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="inicial" element={<Home />}/>
        <Route path="contato" element={<Contact />}/>
        <Route path="pacientes" element={<Patients />}>
          <Route index element={<p>Selecione um paciente</p>}
          />
          <Route path=":patientId" element={<Patient />} />
        </Route>
        <Route path="*" element={<p>Você digitou algo errado</p>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  rootElement
  
);