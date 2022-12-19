import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../context/context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Avatar, { genConfig } from "react-nice-avatar";
import TimeAgo from "timeago-react";

const showPost = () => {
  const router = useRouter();
  const {
    posts,
    likePost,
    showPost,
    currentPost,
    readComments,
    writeComments,
    setCommentContent,
    comments,
  } = useContext(appContext);
  const { id } = router.query;
  const config = genConfig("hi@dapi.to");

  const gettingPost = async (id) => {
    showPost(id);
  };

  const gettingComments = async (id) => {
    readComments(id);
  };

  const formatDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let year = date.getFullYear();
    let seconds = "0" + date.getSeconds();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    return (
      year +
      "-" +
      month +
      "-" +
      dt +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  };

  useEffect(() => {
    gettingPost(id);
    gettingComments(id);
  });
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <Sidebar />
          <div className=" w-9/12 mx-2 pb-40 md:mx-5 my-8 space-y-5 overflow-y-scroll max-h-[840px]">
            <div className="flex gap-3 items-center flex-col md:flex-row md:gap-8">
              <Avatar
                className="w-16 h-16 border-2 border-emerald-500"
                {...config}
              />
              <div className="font-semibold text-md">
                Author:{" "}
                {/* {currentPost.author.slice(0, 8)}....
                {currentPost.author.slice(-8, currentPost.author.length)} */}
                {currentPost.author}
              </div>
              <div className="font-semibold text-md text-emerald-500">
                {/* {formatDate(currentPost.timestamp)} */}
                <TimeAgo
                  datetime={formatDate(currentPost.timestamp)}
                  locale="vi"
                />
              </div>
            </div>
            <div className="text-lg text-orange-800 ml-4">
              #{currentPost.tag}
            </div>
            <div className="text-3xl font-extrabold my-5">
              {currentPost.title}
            </div>

            <div className="text-md">{currentPost.content}</div>

            <div>
              {/* comments */}

              <div className="mt-10 border-t-2 pt-10 mr-3 ">
                <div className="flex space-x-4 items-center flex-col md:flex-row gap-8 md:gap-5">
                  <div className="text-lg font-semibold">Write Comments :</div>
                  <div className="flex space-x-5">
                    <input
                      className="rounded-md px-5 py-2 text-xl w-1/2 md:w-full"
                      placeholder="Add Comment...."
                      onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <button
                      className="text-xl font-bold px-4 py-2 rounded-xl bg-white cursor-default hover:text-orange-500 hover:scale-95 ease-in-out duration-300 transition-all"
                      onClick={() => writeComments(currentPost.id)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  {comments.map((comment, index) => (
                    <div className="border-b-2 py-8" key={index}>
                      <div>
                        <div className="flex items-center space-x-5 flex-col md:flex-row space-y-3 ">
                          <Avatar
                            className="w-8 h-8 border-2 border-emerald-500"
                            {...config}
                          />
                          <div className="items-center flex font-semibold pb-3">
                            {comment.commentor.slice(0, 8)}...
                            {comment.commentor.slice(
                              -8,
                              comment.commentor.length
                            )}
                          </div>
                          <div className="pb-3 hidden md:inline-flex text-green-500 font-medium">
                            <TimeAgo
                              datetime={formatDate(comment.time)}
                              locale="vi"
                            />
                          </div>
                        </div>
                        <div className="text-md mx-4 my-4">{comment.main}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* end comments */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showPost;

const styles = {
  wrapper: `w-full h-screen bg-gray-100 overflow-hidden `,
  container: `max-w-7xl mx-auto `,
  main: `flex justify-between mx-3 my-2`,
};
