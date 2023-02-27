import "./modulePage.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import VideoList from "../../components/videolist/VideoList";

const ModulePage = () => {
  return (
    <div className='container'>
        <Sidebar />
    <div className="listContainer">
        {/* <Navbar/> */}
        <VideoList />
      </div>
    </div>
  )
}

export default ModulePage;
