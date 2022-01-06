import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img src="https://images.unsplash.com/photo-1470076892663-af684e5e15af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80" alt="vegas" height={325} width={600} />
      <ImageCollage />
    </Box>
  </Container>
);


export default Tour;
