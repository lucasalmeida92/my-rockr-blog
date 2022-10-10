import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Modal,
  Button,
  TextField,
  InputLabel,
  IconButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxHeight: '100vh',
  maxWidth: '560px',
  backgroundColor: '#fff',
  padding: theme.spacing(9),
}));

const Form = styled(Box)(({ theme }) => ({
  'label': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    color: '#000',
  },
  'input': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export const ContactModal = ({ isOpen, onClose }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent with success!');
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Wrapper>
        <IconButton
          color="neutral"
          onClick={onClose}
          size="large"
          sx={{
            position: 'absolute',
            top: 6,
            right: 6,
          }}
        >
          <CloseIcon sx={{ fontSize: '32px' }} />
        </IconButton>
        <Typography
          id="contact-modal-title"
          variant="h1"
          component="h2"
          color="primary"
          sx={{ textAlign: 'center' }}
        >
          Contact
        </Typography>
        <Form component="form" onSubmit={handleOnSubmit}>
          <InputLabel>Name</InputLabel>
          <TextField
            id="name"
            name="name"
            placeholder="Fill your full name"
            variant="outlined"
            fullWidth
          />
          <InputLabel>E-mail</InputLabel>
          <TextField
            id="email"
            name="email"
            placeholder="Fill a valid e-mail"
            variant="outlined"
            fullWidth
          />
          <InputLabel>Phone</InputLabel>
          <TextField
            id="phone"
            name="phone"
            placeholder="Fill your phone"
            variant="outlined"
            fullWidth
          />
          <InputLabel>Message</InputLabel>
          <TextField
            id="message"
            name="message"
            placeholder="Hello..."
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              color="grey"
              sx={{
                px: 4,
                textTransform: 'none',
                fontSize: '16px',
                'span:first-child': {
                  mr: 2,
                }
              }}
            >
              Submit
            </Button>
          </Box>
        </Form>
      </Wrapper>
    </Modal>
  );
};
