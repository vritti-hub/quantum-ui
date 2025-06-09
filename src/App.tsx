import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useCallback, useState } from "react";
import { Button } from "./components/Button/Button";
import { Paper } from "./components/Paper/Paper";
import { TextField } from "./components/TextField/TextField";
import { Typography } from "./components/Typography/Typography";
import { ThemeProvider, useTheme } from "../lib/theme";

// ✅ Optimized: Memoized content component
const AppContent = React.memo(() => {
  const { toggleColorScheme, colorScheme } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Optimized: Memoized callbacks
  const handleSendMessage = useCallback(() => {
    alert(`Email: ${email}\nMessage: ${message}`);
  }, [email, message]);

  const handleClear = useCallback(() => {
    setEmail("");
    setMessage("");
  }, []);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );
  // Debug logs temporarily removed to test theme persistence
  return (
    <Box 
      component="main" 
      padding={3}
      sx={{ 
        minHeight: '100vh',
        backgroundColor: 'background.default' 
      }}
    >
      <Stack spacing={4} maxWidth={600} marginX="auto">
        {/* Header */}
        <Box textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom>
            Quantum UI
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Clean semantic design system
          </Typography>
          <Button intent="secondary" onClick={toggleColorScheme}>
            Theme: {colorScheme}
          </Button>
        </Box>

        {/* Glass Form Card */}
        <Paper variant="glass">
          <Box padding={4}>
            <Typography variant="h5" gutterBottom>
              Contact Form
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />

              <TextField
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message..."
              />

              <Stack direction="row" spacing={2}>
                <Button intent="primary" onClick={handleSendMessage}>
                  Send Message
                </Button>
                <Button intent="ghost" onClick={handleClear}>
                  Clear
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>

        {/* Button Showcase */}
        <Paper variant="elevated">
          <Box padding={4}>
            <Typography variant="h5" gutterBottom>
              Button Types
            </Typography>
            <Stack spacing={3}>
              {/* Primary Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Primary Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button intent="primary" size="small">
                    Small Primary
                  </Button>
                  <Button intent="primary" size="medium">
                    Medium Primary
                  </Button>
                  <Button intent="primary" size="large">
                    Large Primary
                  </Button>
                </Stack>
              </Box>

              {/* Secondary Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Secondary Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button intent="secondary">Cancel</Button>
                  <Button intent="secondary">Learn More</Button>
                  <Button intent="secondary" disabled>
                    Disabled
                  </Button>
                </Stack>
              </Box>

              {/* Destructive Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Destructive Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button intent="destructive">Delete Account</Button>
                  <Button intent="destructive">Remove Item</Button>
                </Stack>
              </Box>

              {/* Ghost Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Ghost Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button intent="ghost">Skip for now</Button>
                  <Button intent="ghost">View Details</Button>
                  <Button intent="ghost">Maybe Later</Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Paper>

        {/* Surface Types Demo */}
        <Box>
          <Typography variant="h5" gutterBottom textAlign="center">
            Surface Types
          </Typography>
          <Stack spacing={3}>
            {/* Standard Paper */}
            <Paper variant="standard">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Standard Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Default paper with subtle border and shadow. Perfect for main
                  content cards.
                </Typography>
              </Box>
            </Paper>

            {/* Glass Paper */}
            <Paper variant="glass">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Glass Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Glassmorphism effect with backdrop blur. Great for overlays
                  and floating elements.
                </Typography>
              </Box>
            </Paper>

            {/* Elevated Paper */}
            <Paper variant="elevated">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Elevated Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Higher prominence with larger shadow. Perfect for important
                  highlighted content.
                </Typography>
              </Box>
            </Paper>

            {/* Subtle Paper */}
            <Paper variant="subtle">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Subtle Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Minimal styling for background sections and less important
                  content.
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </Box>

        {/* Navigation Example */}
        <Paper variant="glass">
          <Box
            padding={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Navigation Bar</Typography>
            <Stack direction="row" spacing={1}>
              <Button intent="primary" size="small">
                Sign In
              </Button>
              <Button intent="ghost" size="small">
                Menu
              </Button>
            </Stack>
          </Box>
        </Paper>

        {/* Footer */}
        <Box textAlign="center" paddingY={3}>
          <Typography variant="body2" color="text.secondary">
            Quantum UI - Clean semantic design system
          </Typography>
          <Typography variant="caption" color="text.disabled">
            Optimized for performance - No unnecessary re-renders
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
});

AppContent.displayName = "AppContent";

// ✅ Optimized: Main App component with memoization
function App() {
  return (
    <ThemeProvider defaultColorScheme="light">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
