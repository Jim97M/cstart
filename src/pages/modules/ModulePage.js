import "./modulePage.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import VideoList from "../../components/videolist/VideoList";
import Accordion from "../../components/accordion/Accordion";
import { useNavigate, Link } from "react-router-dom";

const ModulePage = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <Sidebar />
    <div className="listContainer">
        <Navbar/>
        <div className="heading">
          <h5>Module Page</h5>
          <Link className="addbutton" to='/addtutorial'> <h6 style={{color: 'white', textDecoration: 'none', alignSelf: 'center', marginLeft: 19, marginTop:30}}>Add Tutorial</h6></Link>
        </div>
        <Accordion />
      </div>
    </div>
  )
}

export default ModulePage;
