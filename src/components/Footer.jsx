import Typography from '@mui/material/Typography';
import dpdLogo from '../images/dpd_logo.png';
export default function Footer() {
  return (
    <footer
      style={{
        // height: '120px',
        width: '100%',
        // backgroundColor: '#cac4be',
        position: 'fixed',
        left: 0,
        bottom: 0,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        textAlign: 'center',
      }}
    >
      <div>
        <img src={dpdLogo} alt='dpd logo' style={{ height: 120 }} />
      </div>
    </footer>
  );
}
