import { useRouter } from "next/router";
import React, { useContext } from "react";
import { appContext } from "../context/context";

const create = () => {
  const router = useRouter();
  const { createPosts, setContent, setTitle, setTag, loading } =
    useContext(appContext);

  return (
    <div className="w-full mx-36 flex flex-col gap-8">
      <div className="flex items-center justify-between w-full">
        <div
          className="font-bold text-xl ml-10 border-b-2 border-blue-500"
          onClick={() => router.push("/")}
        >
          All Posts
        </div>
        <button
          onClick={() => router.push("/createPost")}
          className="text-xl font-semibold px-4 py-2 rounded-xl bg-white cursor-default hover:text-orange-500 hover:scale-95 ease-in-out duration-300 transition-all hidden lg:inline-flex"
        >
          Create Post
        </button>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-500 py-3">Title</div>
        <input
          className="rounded-md px-5 py-2 text-xl"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="text-2xl font-bold text-blue-500 py-3">Tag</div>
        <input
          className="rounded-md px-5 py-2 text-xl"
          placeholder="Tags"
          onChange={(e) => setTag(e.target.value)}
        />
        <div className="text-2xl font-bold text-blue-500 py-3">Content</div>
        <textarea
          className="w-full h-full rounded-md px-5 py-2 text-xl"
          placeholder="Start Typing...."
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="mt-[250px] w-1/4 text-xl font-bold px-4 py-2 rounded-xl bg-white cursor-default hover:text-orange-500 hover:scale-95 ease-in-out duration-300 transition-all">
          Loading...
        </div>
      ) : (
        <button
          onClick={createPosts}
          className="mt-[250px] w-1/4 text-xl font-bold px-4 py-2 rounded-xl bg-white cursor-default hover:text-orange-500 hover:scale-95 ease-in-out duration-300 transition-all"
        >
          Post
        </button>
      )}
    </div>
  );
};

export default create;
