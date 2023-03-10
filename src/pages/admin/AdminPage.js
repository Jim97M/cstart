import './AdminPage.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Accordion from '../../components/accordion/Accordion';
import Header from '../../components/accordion/Header';
import Navbar from '../../components/navbar/Navbar';

const AdminPage = () => {
  return (
    <div className='container'>
        <Sidebar />
    <div className="listContainer">
        <Navbar/>
        <div>
          <Header />
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default AdminPage;
