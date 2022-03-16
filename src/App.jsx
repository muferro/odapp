import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { Box, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 34px)' }}>
        <ResponsiveAppBar />
        <Container>
          <Box mt={4}>
            <Outlet />
          </Box>
        </Container>
      </div>
      <footer style={{ position: 'relative', left: '0', bottom: '0' }}>
        <Box>
          <Typography
            variant="h6" component="h6" align="center">
            Powered by Odapp - © Copyright 2022 Observatório do Autista
          </Typography>
        </Box>
      </footer>
    </>
  );
}