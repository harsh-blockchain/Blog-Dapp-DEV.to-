import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../config";

export const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [currentPost, setCurrentPost] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        setAccount(account);
      } else {
        console.log("No authorized account found");
        setAccount(null);
      }

      const provider = new ethers.providers.Web3Provider(ethereum);

      const amount = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(amount));

      ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length !== 0) {
          const account = accounts[0];
          setAccount(account);
        } else {
          console.log("No authorized account found");
          setAccount(null);
        }
      });
    } catch (error) {}
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const createPosts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const transaction = await contract.createPost(title, content, tag);
      setLoading(true);
      await transaction.wait();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const get = await contract.getPosts();
      setPosts(get);
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const transaction = await contract.LikePost(id);
      setLoading(true);
      await transaction.wait();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showPost = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const get = await contract.getPost(id);
      setCurrentPost(get);
    } catch (error) {}
  };

  const writeComments = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tnx = await contract.writeComment(id, commentContent);
      setLoading(true);
      await tnx.wait();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const readComments = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const read = await contract.getPostComments(id);
      setComments(read);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getPosts();
  });

  return (
    <appContext.Provider
      value={{
        connectWallet,
        account,
        balance,
        createPosts,
        setContent,
        setTitle,
        setTag,
        posts,
        likePost,
        showPost,
        currentPost,
        loading,

        readComments,
        writeComments,
        setCommentContent,
        comments,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
