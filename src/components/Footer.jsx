import Typography from '@mui/material/Typography';
import dpdLogo from '../images/logo_dpd.jpg';
export default function Footer() {
  return (
    <footer
      style={{
        height: '120px',
        width: '100%',
        backgroundColor: '#cac4be',
        position: 'fixed',
        left: 0,
        bottom: 0,
        textAlign: 'center',
      }}
    >
      {' '}
      <Typography variant='body2' color='text.secondary' align='center'>
        {'Copyright ©'} {new Date().getFullYear()}
      </Typography>
      <img src={dpdLogo} alt='dpd logo' style={{ width: 80, height: 80 }} />
    </footer>
  );
}
