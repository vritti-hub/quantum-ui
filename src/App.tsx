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
            High-contrast glassmorphism design system
          </Typography>
          <QuantumButton
            intent="secondary"
            emphasis="medium"
            onClick={toggleColorScheme}
          >
            Theme: {resolvedColorScheme}
          </QuantumButton>
        </Box>

        {/* Glass Form Card */}
        <Paper
          sx={{
            p: 4,
            background: "var(--quantum-surface-elevated)",
            backdropFilter: "var(--quantum-glass-backdrop)",
            border: "var(--quantum-glass-border)",
            boxShadow: "var(--quantum-shadow-glass)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Glassmorphism Demo Form
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

        {/* Layered Glass Effect Demo */}
        <Box sx={{ position: "relative", p: 4 }}>
          {/* Background Layer */}
          <Paper
            sx={{
              p: 4,
              background: "var(--quantum-surface-secondary)",
              minHeight: 200,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Background Layer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is the background content that shows through the glass effect
              above. You can see how the glassmorphism creates a beautiful
              layered effect.
            </Typography>

            {/* Glass Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 32,
                left: 32,
                right: 32,
                bottom: 32,
                background: "var(--quantum-surface-glass)",
                backdropFilter: "var(--quantum-glass-backdrop)",
                border: "1px solid var(--quantum-border-glass)",
                borderRadius: "var(--quantum-border-radius-large)",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Glass Overlay
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                This glass surface allows you to see the content behind it with
                a beautiful blur effect.
              </Typography>
              <QuantumButton intent="primary" emphasis="high" sx={{ mt: 2 }}>
                Glass Button
              </QuantumButton>
            </Box>
          </Paper>
        </Box>

        {/* Button Examples with Glass Background */}
        <Paper
          sx={{
            p: 4,
            background: "var(--quantum-surface-elevated)",
            backdropFilter: "var(--quantum-glass-backdrop)",
            border: "var(--quantum-glass-border)",
            boxShadow: "var(--quantum-shadow-glass)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            High-Contrast Buttons on Glass
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="primary" emphasis="high">
                Primary (#0066CC)
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

        {/* Navigation-style Glass Bar */}
        <Box
          sx={{
            background: "var(--quantum-surface-glass)",
            backdropFilter: "var(--quantum-glass-backdrop-light)",
            border: "1px solid var(--quantum-border-glass)",
            borderRadius: "var(--quantum-border-radius-large)",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Glass Navigation Bar</Typography>
          <Stack direction="row" spacing={1}>
            <QuantumButton intent="primary" emphasis="medium" size="small">
              Action
            </QuantumButton>
            <QuantumButton intent="subtle" emphasis="low" size="small">
              Menu
            </QuantumButton>
          </Stack>
        </Box>

        {/* Color Showcase */}
        <Paper
          sx={{
            p: 4,
            background: "var(--quantum-surface-elevated)",
            backdropFilter: "var(--quantum-glass-backdrop)",
            border: "var(--quantum-glass-border)",
            boxShadow: "var(--quantum-shadow-glass)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Universal #0066CC Primary Color
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Excellent contrast in both light and dark modes (9.1:1 and 8.7:1
            ratios)
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            sx={{ mt: 2 }}
          >
            <QuantumButton intent="primary" emphasis="high" size="small">
              Small
            </QuantumButton>
            <QuantumButton intent="primary" emphasis="high" size="medium">
              Medium
            </QuantumButton>
            <QuantumButton intent="primary" emphasis="high" size="large">
              Large
            </QuantumButton>
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
