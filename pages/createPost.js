import React, { useContext } from "react";
import { appContext } from "../context/context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Create from "../components/Create";

const createPost = () => {
  const {} = useContext(appContext);
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <Sidebar />
          <Create />
        </div>
      </div>
    </div>
  );
};

export default createPost;

const styles = {
  wrapper: `w-full h-screen bg-gray-100 overflow-hidden `,
  container: `max-w-7xl mx-auto`,
  main: `flex justify-between mx-3 my-2`,
};
