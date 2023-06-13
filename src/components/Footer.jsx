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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <div>
        {' '}
        <img src={dpdLogo} alt='dpd logo' style={{ width: 80, height: 80 }} />
      </div>
      <div>
        <lu>
          <li>
            <a href='#'>
              <str>Need help ? </str>
            </a>
          </li>
          <li> Consignees FAQ </li>
          <li>Shippers FAQ</li>
          <li>Prepare your shipments</li>
          <li>Contact us</li>
        </lu>
      </div>
      <div>
        {' '}
        <lu>
          <li>
            <a href='#'>
              <str>Join us </str>
            </a>
          </li>
          <li> Working at DPD France</li>
          <li>Our positions</li>
          <li>Your application</li>
          <li>Our job opportunities</li>
        </lu>
      </div>
    </footer>
  );
}
