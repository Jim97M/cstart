import "./Accordion.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { faqs } from "./data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");
  const [video, setVideo] = useState([]);

  const getVideoList = () => {
    axios.get('http://192.168.0.37:5000/api/v1/tutorial/alltutorials').then(res => {
      setVideo(res.data);
    })
  }

  useEffect(() => {
    getVideoList();
  })

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };


  return (
    <ul className="accordion">
      {video.map((item, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          tutorial_name={item.tutorial_name}
          tutorial_description={item.tutorial_description}
          name={item.name}
        />
      ))}
    </ul>
  );
};

export default Accordion;
