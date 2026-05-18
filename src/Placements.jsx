import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

function Placements() {
  const placements = [
    {
      company: "TCS",
      role: "Software Engineer",
      package: "4.5 LPA",
    },
    {
      company: "Infosys",
      role: "System Engineer",
      package: "5 LPA",
    },
    {
      company: "Zoho",
      role: "Frontend Developer",
      package: "7 LPA",
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Placement Opportunities
      </Typography>

      <Grid container spacing={3}>
        {placements.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">
                  {item.company}
                </Typography>

                <Typography mt={1}>
                  Role: {item.role}
                </Typography>

                <Chip
                  label={item.package}
                  color="primary"
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Placements;