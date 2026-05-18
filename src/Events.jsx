import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

function Events() {
  const events = [
    {
      title: "Hackathon 2026",
      date: "20 May 2026",
    },
    {
      title: "AI Workshop",
      date: "25 May 2026",
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Campus Events
      </Typography>

      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {event.title}
                </Typography>

                <Typography mt={1}>
                  Date: {event.date}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Events;