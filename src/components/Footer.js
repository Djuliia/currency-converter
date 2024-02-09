import { Typography, Container } from '@mui/material';

export const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#1894EE',
        padding: '20px',
      }}
    >
      <Container>
        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} EasyExchange
        </Typography>
        <Typography variant="body2" color="white" align="center">
          All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};
