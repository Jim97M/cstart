import './AdminPage.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Accordion from '../../components/accordion/Accordion';
import Header from '../../components/accordion/Header';
import Navbar from '../../components/navbar/Navbar';
import DashboardCard from '../../components/cards/DashboardCard';
import List from '../../components/table/Table';

const AdminPage = () => {
  return (
    <div className='container'>
        <Sidebar />
    <div className="listContainer">
        <Navbar/>
        <div className="widgets">
          <DashboardCard title="Tutorials" stat={102}  />
          <DashboardCard title="Users" stat={1093} />
          <DashboardCard title="Revenue" stat={1342334} />
          <DashboardCard title="Tutors" stat={23} />
         </div>
         <List />
      </div>
    </div>
  )
}

export default AdminPage;
