import '../styles/globals.css';
import SideNav from '../components/SideNav';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <div className="w-64">
        <SideNav />
      </div>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
