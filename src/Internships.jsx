import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

function Internships() {
  const internships = [
    {
      company: "Google",
      duration: "6 Months",
      stipend: "₹30,000",
    },
    {
      company: "Microsoft",
      duration: "3 Months",
      stipend: "₹25,000",
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Internship Updates
      </Typography>

      <Stack spacing={2}>
        {internships.map((item, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6">
                {item.company}
              </Typography>

              <Typography>
                Duration: {item.duration}
              </Typography>

              <Chip
                label={item.stipend}
                color="success"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Internships;