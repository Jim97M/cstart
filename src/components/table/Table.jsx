import React,  {useState, useEffect} from 'react';
import axios from 'axios';
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpdateModal from "../modal/UpdateModal";
import {
  FiEdit, FiEye, FiTrash2
} from "react-icons/fi"

const List = () => {

  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);

  const handleList = () => {
    axios.get('http://192.168.0.37:5000/api/v1/auth/allusers').then(res => {
      setUserList(res.data);
    })
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    handleList();
  })

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" style={{fontSize: 16, fontWeight: 'bold'}}>Student ID</TableCell>
            <TableCell className="tableCell" style={{fontSize: 16, fontWeight: 'bold'}}>Student Profile </TableCell>
            <TableCell className="tableCell" style={{fontSize: 16, fontWeight: 'bold'}}>Student Name</TableCell>
            <TableCell className="tableCell" style={{fontSize: 16, fontWeight: 'bold'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((list) => (
            <TableRow key={list.id}>
              <TableCell className="tableCell">{list.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={list.image_name} alt="" className="image" />
                  {list.fullname}
                </div>
              </TableCell>
              <TableCell className="tableCell">{list.email}</TableCell>
           
              <TableCell className="tableCell">
                <FiEye size={22} style={{marginLeft: 7}} color="lightgreen" />
                <FiEdit size={22} style={{marginLeft: 7}} onClick={openModal} />
                <FiTrash2 size={22} style={{marginLeft: 7}} color="red"/>
              </TableCell>
            </TableRow>
          ))}

<UpdateModal showModal={showModal} setShowModal={setShowModal} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
