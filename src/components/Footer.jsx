import Typography from '@mui/material/Typography';
import dpdLogo from '../images/dpd_logo.png';
export default function Footer() {
  return (
    <footer
      style={{
        height: '120px',
        width: '100%',
        backgroundColor: '#cac4be',

        bottom: 0,
        textAlign: 'center',
      }}
    >
      {' '}
      <Typography variant='body2' color='text.secondary' align='center'>
        {'Copyright ©'} {new Date().getFullYear()}
      </Typography>
      <img src={dpdLogo} alt='dpd logo' style={{ width: 120, height: 60 }} />
    </footer>
  );
}
