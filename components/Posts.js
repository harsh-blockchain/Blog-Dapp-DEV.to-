import { useRouter } from "next/router";
import React, { useContext } from "react";
import { appContext } from "../context/context";
import Avatar, { genConfig } from "react-nice-avatar";

const Posts = () => {
  const router = useRouter();
  const { posts, likePost } = useContext(appContext);
  const config = genConfig("hi@dapi.to");

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

  return (
    <div className="w-full ml-16 mr-5 overflow-y-scroll h-[780px] ">
      <div className="flex items-center justify-between w-full">
        <div
          className="font-bold text-xl ml-10 border-b-2 cursor-pointer border-blue-500"
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
            className="flex flex-col gap-5 bg-white rounded-md px-4 py-5 "
            onClick={() =>
              router.push({
                pathname: "/showPost",
                query: { id: `${post.id}` },
              })
            }
          >
            <div className="flex space-x-4 items-center text-lg font-normal">
              <Avatar
                className="w-16 h-16 border-2 border-emerald-500"
                {...config}
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-5">
                  <div>
                    {post.author.slice(0, 12)}....
                    {post.author.slice(-11, post.author.length)}
                  </div>
                  <div>{formatDate(post.timestamp.toNumber())}</div>
                </div>

                <button className="cursor-pointer">
                  <div onClick={() => likePost(post.id)}>
                    &#10084; {post.likeCount.toNumber()}
                  </div>
                </button>
              </div>
            </div>
            <div className="text-md font-semibold ml-5 ">#{post.tag}</div>

            <div className="mx-4 font-bold text-3xl">{post.title}</div>

            <div className="mx-4 font-lg text-lg">
              {post.content.length > 17 ? (
                <div>
                  {post.content.slice(0, 16)}....
                  {post.content.slice(-15, post.content.length)}
                </div>
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
