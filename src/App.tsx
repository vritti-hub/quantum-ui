import { Box, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
// Import directly from individual modules
import { QuantumButton } from "./components/Button/Button";
import { QuantumTextField } from "./components/TextField/TextField";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

function AppContent() {
  const { toggleColorScheme, resolvedColorScheme } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        p: 3,
        transition: "all 0.3s ease",
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 600, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Quantum UI
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Semantic design system with theme switching
          </Typography>
          <QuantumButton
            intent="secondary"
            emphasis="medium"
            onClick={toggleColorScheme}
          >
            Theme: {resolvedColorScheme}
          </QuantumButton>
        </Box>

        {/* Rest of component stays the same */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Demo Form
          </Typography>
          <Stack spacing={3}>
            <QuantumTextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <QuantumTextField
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
            />

            <Stack direction="row" spacing={2}>
              <QuantumButton
                intent="primary"
                emphasis="high"
                onClick={() => alert(`Email: ${email}\nMessage: ${message}`)}
              >
                Send Message
              </QuantumButton>
              <QuantumButton
                intent="subtle"
                emphasis="low"
                onClick={() => {
                  setEmail("");
                  setMessage("");
                }}
              >
                Clear
              </QuantumButton>
            </Stack>
          </Stack>
        </Paper>

        {/* Button Examples */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Button Examples
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="primary" emphasis="high">
                Primary High
              </QuantumButton>
              <QuantumButton intent="primary" emphasis="medium">
                Primary Medium
              </QuantumButton>
              <QuantumButton intent="primary" emphasis="low">
                Primary Low
              </QuantumButton>
            </Stack>

            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="secondary" emphasis="high">
                Secondary
              </QuantumButton>
              <QuantumButton intent="destructive" emphasis="medium">
                Destructive
              </QuantumButton>
              <QuantumButton intent="subtle" emphasis="low">
                Subtle
              </QuantumButton>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider defaultColorScheme="light">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
