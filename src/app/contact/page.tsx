'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MapPin, Mail, MessageCircle } from 'lucide-react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/header/Header';
import MegaNav from '../components/header/SubHeader';
import Footer from '../components/Footer/footer';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: { main: '#4CAF50' },
    error: { main: '#f44336' },
  },
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setNotification({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setNotification({
        open: true,
        message: error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again.',
        severity: 'error',
      });
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <MegaNav/>
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-green-50 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Link href="tel:+12345678900" className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    <div className="bg-green-500 p-3 rounded-full">
                      <PhoneCall className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 234 567 8900</p>
                    </div>
                  </motion.div>
                </Link>

                <Link href="mailto:contact@example.com" className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    <div className="bg-green-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@example.com</p>
                    </div>
                  </motion.div>
                </Link>

                <Link href="https://maps.google.com/?q=123+Business+Street,+City,+Country" target="_blank" className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    <div className="bg-green-500 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">123 Business Street, City, Country</p>
                    </div>
                  </motion.div>
                </Link>

                <Link href="https://wa.me/12345678900" target="_blank" className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    <div className="bg-green-500 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">Direct message for product inquiries</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    disabled={loading}
                    startIcon={<Send />}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={() => setNotification({ ...notification, open: false })}
        >
          <Alert severity={notification.severity} variant="filled">
            {notification.message}
          </Alert>
        </Snackbar>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}