import React, { useCallback, useState } from 'react';
import { Button, Paper, TextField, ThemeToggle, Typography } from '../lib/components';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Memoized callbacks
  const handleSendMessage = useCallback(() => {
    alert(`Email: ${email}\nMessage: ${message}`);
  }, [email, message]);

  const handleClear = useCallback(() => {
    setEmail('');
    setMessage('');
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <main className='min-h-screen bg-background p-6'>
      <div className='max-w-2xl mx-auto space-y-6'>
        {/* Header */}
        <div className='text-center relative'>
          <ThemeToggle className='absolute top-0 right-0' />

          <Typography variant='h1' className='mb-4'>
            Quantum UI
          </Typography>
          <Typography variant='body1' intent='secondary' className='mb-4'>
            Modern component library built with shadcn/ui and Tailwind CSS
          </Typography>
        </div>

        {/* Component Showcase */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Buttons Section */}
          <Paper variant='surface'>
            <div className='p-4'>
              <Typography variant='h4' className='mb-4'>
                Button Components
              </Typography>
              <div className='space-y-3'>
                <div className='flex flex-wrap gap-2'>
                  <Button intent='primary'>Primary</Button>
                  <Button intent='secondary'>Secondary</Button>
                  <Button intent='destructive'>Destructive</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button intent='ghost'>Ghost</Button>
                  <Button intent='outline'>Outline</Button>
                  <Button disabled>Disabled</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button size='sm'>Small</Button>
                  <Button size='default'>Default</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </div>
            </div>
          </Paper>

          {/* Form Section */}
          <Paper variant='surface'>
            <div className='p-4'>
              <Typography variant='h4' className='mb-4'>
                Form Components
              </Typography>
              <div className='space-y-4'>
                <TextField
                  label='Email Address'
                  placeholder='Enter your email'
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <TextField
                  label='Message'
                  placeholder='Enter your message'
                  value={message}
                  onChange={handleMessageChange}
                />
                <div className='flex gap-2'>
                  <Button intent='primary' onClick={handleSendMessage}>
                    Send Message
                  </Button>
                  <Button intent='secondary' onClick={handleClear}>
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
        </div>

        {/* Typography Showcase */}
        <Paper variant='feature'>
          <div className='p-6'>
            <Typography variant='h3' className='mb-4'>
              Typography Hierarchy
            </Typography>
            <div className='space-y-2'>
              <Typography variant='h4'>H4: Section Header</Typography>
              <Typography variant='h5'>H5: Subsection Header</Typography>
              <Typography variant='h6'>H6: Component Header</Typography>
              <Typography variant='body1'>
                Body 1: Primary text content with excellent readability and proper line spacing.
              </Typography>
              <Typography variant='body2' intent='secondary'>
                Body 2: Secondary text content for supporting information.
              </Typography>
              <Typography variant='caption' intent='secondary'>
                Caption: Small text for metadata and annotations
              </Typography>
            </div>
          </div>
        </Paper>

        {/* State Examples */}
        <Paper variant='surface'>
          <div className='p-4'>
            <Typography variant='h4' className='mb-4'>
              Component States
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <Typography variant='h6' className='mb-4'>
                  Text Field States
                </Typography>
                <div className='space-y-3'>
                  <TextField label='Normal State' placeholder='Normal input' size='sm' />
                  <TextField
                    label='Success State'
                    placeholder='Success input'
                    state='success'
                    message='Input validated successfully'
                    defaultValue='valid@example.com'
                  />
                  <TextField
                    label='Error State'
                    placeholder='Error input'
                    state='error'
                    message='Please enter a valid email'
                    defaultValue='invalid'
                  />
                </div>
              </div>
              <div>
                <Typography variant='h6' className='mb-4'>
                  Text Intent Colors
                </Typography>
                <div className='space-y-2'>
                  <Typography intent='primary'>Primary text</Typography>
                  <Typography intent='secondary'>Secondary text</Typography>
                  <Typography intent='success'>Success text</Typography>
                  <Typography intent='warning'>Warning text</Typography>
                  <Typography intent='primary'>Brand text</Typography>
                  <Typography intent='muted'>Disabled text</Typography>
                </div>
              </div>
            </div>
          </div>
        </Paper>

        {/* Paper Variants */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Paper variant='minimal'>
            <div className='p-4'>
              <Typography variant='h6'>Minimal</Typography>
              <Typography variant='body2'>Subtle container</Typography>
            </div>
          </Paper>
          <Paper variant='accent'>
            <div className='p-4'>
              <Typography variant='h6'>Accent</Typography>
              <Typography variant='body2'>Highlighted container</Typography>
            </div>
          </Paper>
          <Paper variant='container'>
            <div className='p-4'>
              <Typography variant='h6'>Container</Typography>
              <Typography variant='body2'>Professional container</Typography>
            </div>
          </Paper>
        </div>

        {/* Footer */}
        <div className='text-center py-6'>
          <Typography variant='body2' intent='secondary'>
            Built with shadcn/ui, Tailwind CSS, and React
          </Typography>
        </div>
      </div>
    </main>
  );
}

export default App;
