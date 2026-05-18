import {
  Typography,
  Paper,
  Box,
} from "@mui/material";

function Home() {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Welcome Student 👋
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          This is the Campus Notification Dashboard.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;