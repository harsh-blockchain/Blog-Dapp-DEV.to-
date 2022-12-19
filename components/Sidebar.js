import React from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import { IoListSharp } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.icon} text-green-500 font-extrabold`}>
          <RiHomeHeartFill />
          <div className={styles.name}>Home</div>
        </div>

        <div className={styles.icon}>
          <BiSearchAlt2 />
          <div className={styles.name}>Explore</div>
        </div>

        <div className={styles.icon}>
          <IoIosNotificationsOutline />
          <div className={styles.name}>Notifications</div>
        </div>

        <div className={styles.icon}>
          <BiMessageSquareDetail />
          <div className={styles.name}>Messages</div>
        </div>

        <div className={styles.icon}>
          <BsBookmarkStar />
          <div className={styles.name}>Bookmarks</div>
        </div>

        <div className={styles.icon}>
          <IoListSharp />
          <div className={styles.name}>Lists</div>
        </div>

        <div className={styles.icon}>
          <BsPerson />
          <div className={styles.name}>Profile</div>
        </div>

        <div className={styles.icon}>
          <CgMoreO />
          <div className={styles.name}>More</div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.icon}>
          <BsGithub />
        </div>
        <div className={styles.icon}>
          <BsTwitter />
        </div>
        <div className={styles.icon}>
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const styles = {
  wrapper: `mt-5`,
  container: `flex flex-col gap-7 `,
  icon: `text-2xl text-gray-700 h-6 space-x-2 flex items-center font-semibold hover:scale-110 hover:text-green-500 transition-all duration-300 cursor-pointer ease-in-out`,
  name: `text-xl font-bold text-gray-700 hidden md:inline-flex`,
  lower: `flex flex-row gap-7 mt-[330px] items-center hidden md:inline-flex`,
};
