import { useRouter } from "next/router";
import React, { useContext } from "react";
import { appContext } from "../context/context";
import Avatar, { genConfig } from "react-nice-avatar";
import TimeAgo from "timeago-react";

const Posts = () => {
  const router = useRouter();
  const { posts, likePost } = useContext(appContext);
  const config = genConfig("hi@dapi.to");

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

  return (
    <div className="w-full md:ml-16 ml-5 mr-2 mb-8 md:mr-4 overflow-y-scroll max-h-[780px] md:max-h-[870px] ">
      <div className="flex items-center justify-between w-full">
        <div
          className="font-bold text-xl ml-10 border-b-2 cursor-pointer border-blue-500 hidden md:inline-flex"
          onClick={() => router.push("/")}
        >
          All Posts
        </div>
        <button
          onClick={() => router.push("/createPost")}
          className="text-xl mr-5 font-semibold px-4 py-2 cursor-pointer rounded-xl bg-white hover:text-orange-500 hover:scale-95 ease-in-out duration-300 transition-all"
        >
          Create Post
        </button>
      </div>
      <div className="my-5 space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-5 bg-white rounded-md px-4 py-5 cursor-pointer"
            onClick={() =>
              router.push({
                pathname: "/showPost",
                query: { id: `${post.id}` },
              })
            }
          >
            <div className="flex space-x-4 items-center text-lg font-normal md:flex-row flex-col">
              <Avatar
                className="w-16 h-16 border-2 border-emerald-500"
                {...config}
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-5 mt-5">
                  <div className="font-medium">
                    {post.author.slice(0, 8)}....
                    {post.author.slice(-8, post.author.length)}
                  </div>
                  <div className="text-blue-500 font-semibold hidden md:inline-flex">
                    {/* {formatDate(post.timestamp.toNumber())} */}
                    <TimeAgo
                      datetime={formatDate(post.timestamp.toNumber())}
                      locale="vi"
                    />
                  </div>
                </div>

                <button
                  className="cursor-pointer items-center mt-5 "
                  onClick={() => likePost(post.id)}
                >
                  <div>&#10084; {post.likeCount.toNumber()}</div>
                </button>
              </div>
            </div>
            <div className="text-md font-semibold ml-5 ">#{post.tag}</div>

            <div className="mx-4 font-bold text-3xl">{post.title}</div>

            <div className="mx-4 font-lg text-lg">
              {post.content.length > 18 ? (
                <div>{post.content.slice(0, 18)}......</div>
              ) : (
                <div>{post.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
