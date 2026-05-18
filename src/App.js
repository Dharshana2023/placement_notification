import { useEffect, useState } from "react";
import socket from "./socket";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Placements from "./Placements";
import Internships from "./Internships";
import Events from "./Events";
import Profile from "./Profile";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("campus-update", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("campus-update");
    };
  }, []);

  // Home Dashboard Page
  const DashboardHome = () => {
    return (
      <Box p={3}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Real-Time Placement Updates
        </Typography>

        <Paper elevation={2} sx={{ p: 3 }}>
          {notifications.length === 0 ? (
            <Typography color="text.secondary">
              No notifications yet...
            </Typography>
          ) : (
            <Stack spacing={2}>
              {notifications.map((item, index) => (
                <Card key={index} elevation={3}>
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Typography variant="h6">
                        {item.title}
                      </Typography>

                      <Chip
                        label={item.type}
                        color={
                          item.type === "Placement"
                            ? "primary"
                            : item.type === "Internship"
                            ? "success"
                            : "warning"
                        }
                      />
                    </Stack>

                    <Typography variant="body1" mb={1}>
                      {item.message}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {item.time}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}
        </Paper>
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Campus Notification Platform
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#1e293b",
              color: "white",
              minHeight: "100vh",
              p: 2,
            }}
          >
            <Typography variant="h5" mb={3} fontWeight="bold">
              Dashboard
            </Typography>

            <List>
              <ListItemButton
                component={Link}
                to="/"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: "white",
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/placements"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: "white",
                }}
              >
                <ListItemText primary="Placements" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/internships"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: "white",
                }}
              >
                <ListItemText primary="Internships" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/events"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: "white",
                }}
              >
                <ListItemText primary="Events" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/profile"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: "white",
                }}
              >
                <ListItemText primary="Profile" />
              </ListItemButton>
            </List>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/events" element={<Events />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;