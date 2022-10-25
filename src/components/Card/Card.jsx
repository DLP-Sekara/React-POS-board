import React,{useState} from 'react'
import './Card.css'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const Png = props.png;
    return (
      <motion.div className="CompactCard"
        style={{
          background: props.color.backGround,
          boxShadow: props.color.boxShadow,
        }}
        layoutId="expandableCard"
        // onClick={setExpanded}
      >
        <div className="radialBar">
          <CircularProgressbar
            value={props.barValues}
            text={`${props.barValues}%`}
          />
          <span>{props.title}</span>
        </div>

        <div className="detail">
          <Png />
          <span>${props.values}</span>
          <span>Last 24 hours</span>
        </div>
      </motion.div>
    );
};

  
  
export default Card