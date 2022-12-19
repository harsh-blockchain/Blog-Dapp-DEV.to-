import React, { useContext } from "react";
import { appContext } from "../context/context";
import { FaEthereum } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaConnectdevelop } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { connectWallet, account, balance } = useContext(appContext);
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo} onClick={() => router.push("/")}>
            DEV
          </div>
          <div className={styles.mid}>
            <input
              type="text"
              placeholder="Search"
              className={styles.input}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
            <BiSearchAlt2 className="hidden md:inline-flex h-6 w-6" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightInner}>{balance} ETH</div>
          <div>
            {account ? (
              <div className={styles.rightInner}>
                <div>
                  <FaEthereum />
                </div>
                <div>
                  {account.slice(0, 8)}...{account.slice(-8, account.length)}
                </div>
              </div>
            ) : (
              <div className={styles.rightInner} onClick={connectWallet}>
                <FaConnectdevelop />
                <div>Connect Wallet</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const styles = {
  wrapper: `bg-white shadow-md h-16 items-center py-2 sticky top-0 z-50`,
  container: `flex items-center justify-between max-w-7xl mx-auto`,
  left: `ml-3 flex space-x-3`,
  rightInner: `bg-gray-100 p-2 rounded-md flex space-x-3 items-center cursor-pointer font-semibold`,
  right: `flex items-center space-x-3 mr-3 hidden md:inline-flex`,
  logo: `p-2 bg-black text-white font-bold text-lg rounded-md cursor-pointer`,
  input: `bg-transparent ml-2 p-2 rounded-md `,
  mid: `flex items-center space-x-3 bg-gray-100 px-2 rounded-md hidden md:inline-flex`,
};
