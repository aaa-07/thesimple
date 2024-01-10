import Benefits from './benefits';
import Deliverables from './deliverables';
import Experts from './experts';
import Footer from './footer';
import KPI from './kpi';
import Main from './main';
import Partner from './partner';
import Services from './services';

export default function HomeTemplate() {
  return (
    <div className='container'>
      <Main />
      <Services />
      <div className='services__separator' />
      <Deliverables />
      <div className='services__separator' />
      <KPI />
      <Benefits />
      <Partner />
      <Experts />
      <Footer />
    </div>
  );
}
