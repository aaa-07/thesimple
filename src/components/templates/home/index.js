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
    <>
      <div className='container'>
        <Main />
        <div id='benefits'>
          <Benefits />
        </div>
        <div id='services'>
          <Services />
        </div>
        <div id='deliverables'>
          <Deliverables />
        </div>
        <div id='kpi'>
          <KPI />
        </div>
      </div>
      <div id='partner'>
        <Partner />
      </div>
      <div className='container'>
        <div id='education'>
          <Experts />
        </div>
        <Footer />
      </div>
    </>
  );
}
