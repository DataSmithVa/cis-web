import Image from 'next/image';
import logo from '@/public/CIS_LOGO.svg';

export default function UnderMaint() {
  return (
    <div className="main-container">
      <div className="hero-container">
        <Image src={logo} alt="Logo" className="logo" />
        <h1 className="main-heading">Site is currently under maintenance...</h1>
        <p>
          If you have any questions, please reach out to: <br />
          <br /> cisworkmail1@gmail.com
        </p>
        <p>Thank you!</p>
      </div>
    </div>
  );
}
