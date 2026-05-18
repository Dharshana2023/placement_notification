import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

function Profile() {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Student Profile
      </Typography>

      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "#1976d2",
              }}
            >
              A
            </Avatar>

            <Typography variant="h5">
            PRIYA
            </Typography>

            <Typography>
              Department: EIE
            </Typography>

            <Typography>
              Year: Final Year
            </Typography>

            <Typography>
              Email: priya@gmail.com
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Profile;