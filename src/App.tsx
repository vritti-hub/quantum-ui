import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { QuantumButton } from "./components/Button/Button";
import { QuantumPaper } from "./components/Paper/Paper";
import { QuantumTextField } from "./components/TextField/TextField";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

// ✅ Optimized: Memoized content component
const AppContent = React.memo(() => {
  const { toggleColorScheme, resolvedColorScheme } = useTheme();
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

  return (
    <Box component="main" padding={3}>
      <Stack spacing={4} maxWidth={600} marginX="auto">
        {/* Header */}
        <Box textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom>
            Quantum UI
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Clean semantic design system
          </Typography>
          <QuantumButton intent="secondary" onClick={toggleColorScheme}>
            Theme: {resolvedColorScheme}
          </QuantumButton>
        </Box>

        {/* Glass Form Card */}
        <QuantumPaper variant="glass">
          <Box padding={4}>
            <Typography variant="h5" gutterBottom>
              Contact Form
            </Typography>
            <Stack spacing={3}>
              <QuantumTextField
                label="Email Address"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />

              <QuantumTextField
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message..."
              />

              <Stack direction="row" spacing={2}>
                <QuantumButton intent="primary" onClick={handleSendMessage}>
                  Send Message
                </QuantumButton>
                <QuantumButton intent="ghost" onClick={handleClear}>
                  Clear
                </QuantumButton>
              </Stack>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Button Showcase */}
        <QuantumPaper variant="elevated">
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
                  <QuantumButton intent="primary" size="small">
                    Small Primary
                  </QuantumButton>
                  <QuantumButton intent="primary" size="medium">
                    Medium Primary
                  </QuantumButton>
                  <QuantumButton intent="primary" size="large">
                    Large Primary
                  </QuantumButton>
                </Stack>
              </Box>

              {/* Secondary Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Secondary Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <QuantumButton intent="secondary">Cancel</QuantumButton>
                  <QuantumButton intent="secondary">Learn More</QuantumButton>
                  <QuantumButton intent="secondary" disabled>
                    Disabled
                  </QuantumButton>
                </Stack>
              </Box>

              {/* Destructive Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Destructive Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <QuantumButton intent="destructive">
                    Delete Account
                  </QuantumButton>
                  <QuantumButton intent="destructive">
                    Remove Item
                  </QuantumButton>
                </Stack>
              </Box>

              {/* Ghost Actions */}
              <Box>
                <Typography variant="h6" gutterBottom>
                  Ghost Actions
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <QuantumButton intent="ghost">Skip for now</QuantumButton>
                  <QuantumButton intent="ghost">View Details</QuantumButton>
                  <QuantumButton intent="ghost">Maybe Later</QuantumButton>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Surface Types Demo */}
        <Box>
          <Typography variant="h5" gutterBottom textAlign="center">
            Surface Types
          </Typography>
          <Stack spacing={3}>
            {/* Standard Paper */}
            <QuantumPaper variant="standard">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Standard Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Default paper with subtle border and shadow. Perfect for main
                  content cards.
                </Typography>
              </Box>
            </QuantumPaper>

            {/* Glass Paper */}
            <QuantumPaper variant="glass">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Glass Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Glassmorphism effect with backdrop blur. Great for overlays
                  and floating elements.
                </Typography>
              </Box>
            </QuantumPaper>

            {/* Elevated Paper */}
            <QuantumPaper variant="elevated">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Elevated Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Higher prominence with larger shadow. Perfect for important
                  highlighted content.
                </Typography>
              </Box>
            </QuantumPaper>

            {/* Subtle Paper */}
            <QuantumPaper variant="subtle">
              <Box padding={3}>
                <Typography variant="h6" gutterBottom>
                  Subtle Surface
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Minimal styling for background sections and less important
                  content.
                </Typography>
              </Box>
            </QuantumPaper>
          </Stack>
        </Box>

        {/* Navigation Example */}
        <QuantumPaper variant="glass">
          <Box
            padding={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Navigation Bar</Typography>
            <Stack direction="row" spacing={1}>
              <QuantumButton intent="primary" size="small">
                Sign In
              </QuantumButton>
              <QuantumButton intent="ghost" size="small">
                Menu
              </QuantumButton>
            </Stack>
          </Box>
        </QuantumPaper>

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
