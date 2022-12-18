import React, { useContext } from "react";
import { appContext } from "../context/context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Survey from "../components/Survey";

const index = () => {
  const {} = useContext(appContext);
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <Sidebar />
          <Posts />
          <Survey />
        </div>
      </div>
    </div>
  );
};

export default index;

const styles = {
  wrapper: `w-full h-screen bg-gray-100 overflow-hidden`,
  container: `max-w-7xl mx-auto`,
  main: `flex justify-between mx-3 my-2`,
};
