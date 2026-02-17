import React, { useState } from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import FilterDashboard from "../Components/FilterDashboard";
import JobList from "../Components/JobList";

const Random = () => {
  // Filter states
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [type, setType] = useState("All");
  const [stack, setStack] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="main-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Filter + Jobs wrapper */}
      <FilterDashboard
        search={search} setSearch={setSearch}
        department={department} setDepartment={setDepartment}
        type={type} setType={setType}
        stack={stack} setStack={setStack}
      />

     
    </motion.div>
  );
};

export default Random;
