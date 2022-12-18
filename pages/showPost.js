import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../context/context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Avatar, { genConfig } from "react-nice-avatar";

const showPost = () => {
  const router = useRouter();
  const { posts, likePost, showPost, currentPost } = useContext(appContext);
  const { id } = router.query;
  const config = genConfig("hi@dapi.to");

  const gettingPost = async (id) => {
    showPost(id);
  };

  const formatDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return dt + "/" + month + "   " + hours + ":" + minutes.substr(-2);
  };

  useEffect(() => {
    gettingPost(id);
  });
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <Sidebar />
          <div className=" w-9/12 mx-5 my-8 space-y-5">
            <div className="flex gap-10 items-center">
              <Avatar
                className="w-16 h-16 border-2 border-emerald-500"
                {...config}
              />
              <div className="font-semibold text-md">{currentPost.author}</div>
              <div className="font-semibold text-md text-emerald-500">
                {formatDate(currentPost.timestamp)}
              </div>
            </div>
            <div className="text-lg text-orange-800 ml-4">
              #{currentPost.tag}
            </div>
            <div className="text-3xl font-extrabold my-5">
              {currentPost.title}
            </div>

            <div className="text-md">{currentPost.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showPost;

const styles = {
  wrapper: `w-full h-screen bg-gray-100 overflow-hidden `,
  container: `max-w-7xl mx-auto`,
  main: `flex justify-between mx-3 my-2`,
};
