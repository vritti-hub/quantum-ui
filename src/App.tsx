import React, { useCallback, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, TextField, ThemeToggle, Typography } from '../lib/components';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  // Memoized callbacks
  const handleSendMessage = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      alert(`Email: ${email}\nMessage: ${message}`);
      setLoading(false);
    }, 1000);
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

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
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
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='default'>Primary</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='destructive'>Destructive</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='ghost'>Ghost</Button>
                  <Button variant='outline'>Outline</Button>
                  <Button disabled>Disabled</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button size='sm'>Small</Button>
                  <Button size='default'>Default</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
            </CardHeader>
            <CardContent>
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
                  <Button variant='default' onClick={handleSendMessage} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  <Button variant='secondary' onClick={handleClear} disabled={loading}>
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Typography Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* State Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Component States</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <Typography variant='h6' className='mb-4'>
                  Text Field States
                </Typography>
                <div className='space-y-3'>
                  <TextField label='Normal State' placeholder='Normal input' />
                  <TextField
                    label='Success State'
                    placeholder='Success input'
                    message='Input validated successfully'
                    defaultValue='valid@example.com'
                    className='border-green-500 focus-visible:ring-green-200'
                  />
                  <TextField
                    label='Error State'
                    placeholder='Error input'
                    message='Please enter a valid email'
                    defaultValue='invalid'
                    className='border-red-500 focus-visible:ring-red-200'
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
          </CardContent>
        </Card>

        {/* Interactive Counter */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-center justify-center space-x-4'>
              <Button variant='outline' onClick={handleDecrement} size='sm'>
                -
              </Button>
              <div className='text-center min-w-[100px]'>
                <Typography variant='h4' className='font-mono'>
                  {count}
                </Typography>
                <Typography variant='caption' intent='secondary'>
                  Counter Value
                </Typography>
              </div>
              <Button variant='outline' onClick={handleIncrement} size='sm'>
                +
              </Button>
            </div>
            <div className='flex justify-center mt-4'>
              <Button variant='secondary' onClick={handleReset} size='sm'>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Variants */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card>
            <CardContent className='p-4'>
              <Typography variant='h6'>Standard Card</Typography>
              <Typography variant='body2'>Default shadcn card styling</Typography>
            </CardContent>
          </Card>
          <Card className='border-primary/20 bg-primary/5'>
            <CardContent className='p-4'>
              <Typography variant='h6'>Accent Card</Typography>
              <Typography variant='body2'>Highlighted with primary colors</Typography>
            </CardContent>
          </Card>
          <Card className='shadow-lg'>
            <CardContent className='p-4'>
              <Typography variant='h6'>Elevated Card</Typography>
              <Typography variant='body2'>Enhanced shadow styling</Typography>
            </CardContent>
          </Card>
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
