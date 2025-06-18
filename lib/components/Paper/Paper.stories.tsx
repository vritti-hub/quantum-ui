import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "./Paper";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { TextField } from "../TextField";

const meta: Meta<typeof Paper> = {
  title: "Components/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Universal Paper component with 5 semantic variants that work across landing pages, applications, and forms. Each variant supports data attributes for customization without variant explosion.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["section", "surface", "accent", "minimal", "feature"],
      description: "Semantic variant for different use cases",
    },
    children: {
      control: false,
      description: "Content of the paper",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

// ========================================
// Universal Variants
// ========================================

export const Section: Story = {
  args: {
    variant: "section",
    children: (
      <div>
        <Typography variant="h3" style={{ marginBottom: "1rem" }}>Section Container</Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          Universal section container perfect for content areas in both landing pages and applications.
          Responsive padding and borders included.
        </Typography>
        <Button intent="primary">Learn More</Button>
      </div>
    ),
  },
};

export const SectionFullWidth: Story = {
  name: "Section (Full Width)",
  args: {
    variant: "section",
    fullWidth: true,
    children: (
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>Landing Page Section</Typography>
        <Typography variant="body1" style={{ marginBottom: "2rem" }}>
          Full-width section perfect for landing page hero areas and content sections.
          No border radius, optimized spacing for full viewport width.
        </Typography>
        <Button intent="primary" size="large">Get Started</Button>
      </div>
    ),
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Surface: Story = {
  args: {
    variant: "surface",
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>Clean Surface</Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          Clean background perfect for forms and application panels.
          Includes hover and focus states for interactive contexts.
        </Typography>
        <TextField label="Example Input" placeholder="Type something..." />
      </div>
    ),
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: (
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3" style={{ marginBottom: "1rem" }}>Highlighted Content</Typography>
        <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
          Accent variant perfect for CTAs and important announcements.
          Subtle gradient background with glow effects.
        </Typography>
        <Button intent="primary">Take Action</Button>
      </div>
    ),
  },
};

export const AccentEmphasis: Story = {
  name: "Accent (High Emphasis)",
  args: {
    variant: "accent",
    highEmphasis: true,
    children: (
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>Premium CTA</Typography>
        <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
          High emphasis accent with enhanced glow and stronger gradients.
          Perfect for main CTAs on landing pages.
        </Typography>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button intent="primary" size="large">Get Started</Button>
          <Button intent="secondary" size="large">Learn More</Button>
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    children: (
      <div>
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Minimal Container</Typography>
        <Typography variant="body2">
          Subtle container perfect for backgrounds and grouping elements.
          Minimal styling that doesn't distract from content.
        </Typography>
      </div>
    ),
  },
};

export const MinimalInput: Story = {
  name: "Minimal (Input Style)",
  args: {
    variant: "minimal",
    input: true,
    children: (
      <Typography variant="body1">Input field background styling</Typography>
    ),
  },
};

export const MinimalNavigation: Story = {
  name: "Minimal (Navigation)",
  args: {
    variant: "minimal",
    nav: true,
    children: (
      <div>
        <Typography variant="body1" style={{ marginBottom: "0.5rem" }}>Navigation Item</Typography>
        <Typography variant="body2">Glass effect for navigation panels and sidebars</Typography>
      </div>
    ),
  },
};

export const Feature: Story = {
  args: {
    variant: "feature",
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>Premium Feature</Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          Premium container with shine effects and strong shadows.
          Perfect for showcasing important features and content.
        </Typography>
        <Button intent="primary">Explore Feature</Button>
      </div>
    ),
  },
};

export const FeatureGlass: Story = {
  name: "Feature (Glass)",
  args: {
    variant: "feature",
    glass: true,
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>Glass Feature</Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          Premium feature with glass effect, perfect for landing page showcases
          and modern UI designs.
        </Typography>
        <Button intent="primary">Learn More</Button>
      </div>
    ),
  },
};

export const FeatureCompact: Story = {
  name: "Feature (Compact)",
  args: {
    variant: "feature",
    compact: true,
    children: (
      <div>
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>App Feature</Typography>
        <Typography variant="body2">
          Compact version perfect for application UI and smaller cards.
          Maintains premium feel with reduced padding.
        </Typography>
      </div>
    ),
  },
};

// ========================================
// Use Case Examples
// ========================================

export const LandingPageExamples: Story = {
  name: "🚀 Landing Page Examples",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%", maxWidth: "none" }}>
      {/* Hero Section */}
      <Paper variant="section" fullWidth>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <Typography variant="h1" style={{ marginBottom: "1rem" }}>Welcome to Our Platform</Typography>
          <Typography variant="h3" style={{ marginBottom: "2rem", opacity: 0.8 }}>
            Transform your business with our innovative solutions
          </Typography>
          <Button intent="primary" size="large">Get Started</Button>
        </div>
      </Paper>
      
      {/* Feature Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", padding: "0 1rem" }}>
        <Paper variant="feature" glass>
          <Typography variant="h4" style={{ marginBottom: "1rem" }}>🚀 Fast Setup</Typography>
          <Typography variant="body1">Get started in minutes with our intuitive onboarding process.</Typography>
        </Paper>
        
        <Paper variant="feature" glass>
          <Typography variant="h4" style={{ marginBottom: "1rem" }}>🔒 Secure</Typography>
          <Typography variant="body1">Enterprise-grade security to keep your data safe and protected.</Typography>
        </Paper>
        
        <Paper variant="feature" glass>
          <Typography variant="h4" style={{ marginBottom: "1rem" }}>📊 Analytics</Typography>
          <Typography variant="body1">Powerful insights and analytics to grow your business.</Typography>
        </Paper>
      </div>
      
      {/* CTA Section */}
      <Paper variant="accent" highEmphasis style={{ margin: "0 1rem" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>Ready to Get Started?</Typography>
          <Typography variant="body1" style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Join thousands of satisfied customers who trust our platform
          </Typography>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button intent="primary" size="large">Start Free Trial</Button>
            <Button intent="secondary" size="large">Contact Sales</Button>
          </div>
        </div>
      </Paper>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const ApplicationExamples: Story = {
  name: "💻 Application Examples",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem", height: "400px" }}>
      {/* Navigation Sidebar */}
      <Paper variant="minimal" nav style={{ height: "100%" }}>
        <div style={{ padding: "1rem" }}>
          <Typography variant="h6" style={{ marginBottom: "1rem" }}>Navigation</Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Typography variant="body2">Dashboard</Typography>
            <Typography variant="body2">Analytics</Typography>
            <Typography variant="body2">Settings</Typography>
          </div>
        </div>
      </Paper>
      
      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Header */}
        <Paper variant="surface">
          <Typography variant="h4" style={{ marginBottom: "0.5rem" }}>Dashboard</Typography>
          <Typography variant="body1">Welcome back! Here's what's happening with your account.</Typography>
        </Paper>
        
        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <Paper variant="feature" compact>
            <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>Quick Stats</Typography>
            <Typography variant="h2" style={{ color: "var(--quantum-color-action-primary)" }}>$12,345</Typography>
          </Paper>
          
          <Paper variant="feature" compact>
            <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>Growth</Typography>
            <Typography variant="h2" style={{ color: "var(--quantum-color-feedback-success)" }}>+23%</Typography>
          </Paper>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
};

export const FormExamples: Story = {
  name: "📝 Form Examples",
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <Paper variant="section">
        <Typography variant="h4" style={{ marginBottom: "1.5rem" }}>Contact Form</Typography>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField label="Full Name" placeholder="Enter your name" />
          <TextField label="Email" placeholder="Enter your email" type="email" />
          
          <Paper variant="minimal" input>
            <Typography variant="body2" style={{ opacity: 0.7 }}>Message</Typography>
          </Paper>
          
          <Paper variant="accent">
            <Typography variant="body2" style={{ textAlign: "center", margin: "0.5rem 0" }}>
              ✓ Form validation passed
            </Typography>
          </Paper>
          
          <Button intent="primary" fullWidth>Send Message</Button>
        </div>
      </Paper>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
};

export const VariantComparison: Story = {
  name: "📋 All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "600px" }}>
      <Typography variant="h3" style={{ textAlign: "center", marginBottom: "1rem" }}>
        Paper Variant Comparison
      </Typography>
      
      <Paper variant="section">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Section</Typography>
        <Typography variant="body2">Universal container for content areas</Typography>
      </Paper>
      
      <Paper variant="surface">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Surface</Typography>
        <Typography variant="body2">Clean background for forms and panels</Typography>
      </Paper>
      
      <Paper variant="accent">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Accent</Typography>
        <Typography variant="body2">Highlighted content with gradient background</Typography>
      </Paper>
      
      <Paper variant="minimal">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Minimal</Typography>
        <Typography variant="body2">Subtle container for backgrounds</Typography>
      </Paper>
      
      <Paper variant="feature">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>Feature</Typography>
        <Typography variant="body2">Premium container with shine effects</Typography>
      </Paper>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
};

export const Playground: Story = {
  args: {
    variant: "section",
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>
          Playground Example
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          Use the controls to experiment with different paper variants and see how they behave.
          Each variant is designed for specific use cases.
        </Typography>
        <Button intent="primary">Interactive Button</Button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Experiment with paper variants using the controls panel.",
      },
    },
  },
};