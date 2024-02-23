import {

    FiChevronDown,
   
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  import { IconType } from "react-icons";
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="flex items-center justify-center">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 text-gray-500 transition-colors"
          >
            <span className=" text-sm">Services</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen}  text="Packaging" url="/packaging"/>
            <Option setOpen={setOpen}  text="Printing" url="/packaging"/>
            <Option setOpen={setOpen}  text="Production" url="/production"/>
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, url, setOpen }) => {
    return (
      <motion.li
      href={url}
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <a href={url}><span>{text}</span></a>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };