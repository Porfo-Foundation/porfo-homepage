"use client";

import { useAccount, useConnect } from "wagmi";

import { useEffect, useState } from "react";
import { WaitlistBot, connectWallet, getUserName } from "@/utils/apis";
import { local } from "web3modal";

function Waitlist() {
  const [logoColor, setLogoColor] = useState("text-[#B13F60]");
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [userProfile, setUserProfile] = useState(null);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );
  const [msg, setMsg] = useState("");

  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { address, isDisconnected } = useAccount();
  useEffect(() => {
    console.log(connectors, "::::::connectors");
  }, []);

  const getAccessToken = async (connector) => {
    connect({ connector });
    const data = await connectWallet();
    console.log(data, "::::::data");

    setAccessToken(data?.accessToken);
    console.log(accessToken, "::::::accessToken");
    localStorage.setItem("accessToken", data?.accessToken);
    setMessages([]);
    localStorage.setItem("messages", JSON.stringify([]));
    return data?.accessToken;
  };
  const handleConnect = async (connector) => {
    try {
      getAccessToken(connector).then(async (accessToken) => {
        const userProfileData = await getUserName(accessToken);
        console.log(userProfileData?.pnsProfile, "::::::userProfileData");
        setUserProfile(userProfileData?.pnsProfile);
        const firstMsg = [
          {
            content: "Hi",
            role: "user",
          },
        ];
        const data = await WaitlistBot(firstMsg, accessToken);
        setMessages([data]);
      });
    } catch (error) {
      // alert("Error connecting wallet");
      console.error("Error connecting wallet:", error);
    }
  };

  const sendMessage = async () => {
    if (msg) {
      setMessages([
        ...messages,
        {
          content: msg,
          role: "user",
        },
      ]);
      localStorage.setItem("messages", JSON.stringify(messages));
      setMsg("");
      const data = await WaitlistBot(messages, accessToken);
      setMessages([...messages, { content: msg, role: "user" }, data]);
    }
  };
  console.log(userProfile, "::::::userProfile");
  const categories = [
    { img: "/images/house.png", key: "Home" },
    { img: "/images/product.png", key: "Features" },
    { img: "/images/document.png", key: "Docs" },
    { img: "/images/contact-books.png", key: "Contact Us" },
  ];
  const list = [
    { img: "/images/metamask.png", key: "Metamask" },
    { img: "/images/coinbase.png", key: "CoinBase" },
    { img: "/images/walletConnect.png", key: "WalletConnect" },
  ];
  const dAppsList = [
    { img: "/images/pancake.png", key: "Pancake Swap" },
    { img: "/images/Uniswap.png", key: "Uniswap" },
    { img: "/images/ethereum.png", key: "Ethereum" },
    { img: "/images/OpenSea.png", key: "Opensea" },
    { img: "/images/1inch.png", key: "1inch" },
    { img: "/images/polygon.png", key: "Polygon" },
    { img: "/images/solana.png", key: "Solana" },
  ];

  return (
    <div className="flex h-screen w-full">
      <div
        id="left"
        className="w-[20%] flex flex-col items-center justify-between bg-[#000000]"
      >
        <div className="w-[80%] h-full p-4 flex flex-col justify-between ">
          <div>
            <div
              className={` ${logoColor} flex space-x-2 items-center gap-2 text-2xl h-20 w-fit p-4`}
            >
              <div>
                <img
                  src={"/images/logo_png.png"}
                  height={36}
                  width={36}
                  alt="logo"
                />
              </div>
              <div>Porfo</div>
            </div>
            <div
              id="Chats"
              className={`flex flex-col h-36 p-4 justify-between`}
            >
              <div className={`text-2xl text-pur ${logoColor} h-8`}>Chats</div>
              <div
                className={
                  "flex h-16 bg-[#191C1C] rounded-2xl items-center p-4 justify-between text-[#ffffff]"
                }
              >
                <div className="bg-[#533482] rounded-md h-8 w-8 flex items-center justify-center">
                  <img
                    src={"/images/robot.png"}
                    height={28}
                    width={28}
                    alt="waitlist"
                  />
                </div>
                <div className="flex flex-col text-sm ml-[-10px]">
                  <div> Waitlist Porfo</div>
                  <div>Date</div>
                </div>
                <div>
                  <img
                    src={"/images/dots.png"}
                    height={24}
                    width={24}
                    alt="waitlist"
                  />
                </div>
              </div>
            </div>
            <div id="categories" className="h-fit p-4 mt-10">
              {categories.map((category, index) => {
                return (
                  <div key={index} className="flex h-10  p-2">
                    <div>
                      <img
                        src={`${category?.img}`}
                        height={24}
                        width={24}
                        alt={category?.key}
                      />
                    </div>
                    <div className="ml-2">{category?.key}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col h-44 bg-[#191C1C] rounded-2xl p-4 w-[100%] truncate ... ">
            <div className="flex h-[50%] items-center space-x-2">
              <div className="flex items-center justify-center h-12 w-12 bg-[#533482] rounded-[50%]">
                <div>
                  <img
                    src={"/images/user.png"}
                    height={24}
                    width={24}
                    alt="logo"
                  />
                </div>
              </div>
              <div>
                <div> {userProfile ? userProfile.userName : "Anonyms"}</div>
                <div className="text-[#999999] text-sm">
                  {userProfile ? userProfile.pointer : "0x"}
                </div>
              </div>
            </div>
            <div className="border border-1 border-black w-[90%]"></div>
            <div className="h-[50%] flex items-center justify-center ">
              <div className="h-[50%] bg-pink-400 w-full flex items-center justify-center rounded-lg">
                Twitter
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="middle" className=" w-[60%] bg-slate-950">
        <div className="w-[90%] flex flex-col justify-between p-8 h-full">
          <div id="top" className="h-[10%] flex">
            <div
              className={`ml-5 font-bold ${logoColor} flex justify-center items-center gap-2 bg-black h-12 w-12 rounded-lg`}
            >
              <img
                src={"/images/logo_png.png"}
                height={24}
                width={24}
                alt="logo"
              />
            </div>
            <div className="ml-2 mt-1">
              <div className="text-lg font-bold text-[#B13F60]">Waitlist</div>
              <div className="flex text-xs space-x-1 items-center justify-center text-[#B13F60] ">
                <p className="rounded-[50%] bg-[#B13F60] h-2 w-2"></p>
                <p>180</p>
                <p>people</p>
              </div>
            </div>
          </div>
          <div id="Middle" className="h-[80%] flex flex-col justify-end">
            <div className="h-[20%] flex">
              <div className="bg-black h-10 w-10 rounded-md flex items-center justify-center">
                <div className="max-h-[70%]">
                  <img
                    src={"/images/logo_png.png"}
                    height={24}
                    width={24}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="ml-2">
                <div>Connect Your Wallet</div>
                <div className="flex mt-2 h-10">
                  <div className="flex">
                    {connectors?.map((item, index) => {
                      return (
                        index < 3 && (
                          <div
                            key={index}
                            className="bg-pink-400 text-sm flex items-center justify-center rounded-2xl p-4 mr-2"
                            onClick={() => handleConnect(item)}
                          >
                            <div>
                              <img
                                src={`${list[index]?.img}`}
                                height={24}
                                width={24}
                                alt={list[index]?.key}
                              />
                            </div>
                            <div className="ml-2">{list[index]?.key}</div>
                          </div>
                        )
                      );
                    })}
                  </div>

                  <div className="h-10 w-10 rounded-[50%] border border-1 border-pink-400 text-pink-400 text-4xl flex items-center justify-center">
                    <div>+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-y-scroll">
            {/* <div className="overflow-y-scroll"> */}
              {messages?.map((msg, index) => {
                if (msg.role === "assistant") {
                  return (
                    <div className="flex justify-start mt-4" key={index}>
                      <div className="bg-[#191C1C] rounded-2xl p-4">
                        <div className="text-sm text-[#ffffff]">{msg.content}</div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="flex justify-end mt-4" key={index}>
                    <div className="bg-[#191C1C] text-[#ffffff] rounded-2xl p-4">
                      <div className="text-sm">{msg.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* </div> */}
          </div>
          <div id="bottom" className="h-[10%] flex justify-center items-center">
            <div className="bg-slate-800 rounded-xl h-10 w-full flex justify-between items-center">
              <div className="w-[80%]">
                <input
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  type="text"
                  placeholder="Ask Porfo"
                  className="border-none outline-none bg-inherit p-2 pl-4"
                />
              </div>
              <div className="w-[5%]" onClick={sendMessage}>
                <img
                  src={`/images/send.png`}
                  height={24}
                  width={24}
                  alt="send"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="right"
        className="w-[20%]  flex justify-center items-center bg-[#000000] "
      >
        <div className="w-[80%] h-full  p-4 flex flex-col justify-between mt-10">
          <div className="text-3xl h-[10%] text-[#B13F60] ">
            Integrated DApps
          </div>
          <div className="text-l h-[60%] ">
            {dAppsList.map((item, index) => {
              return (
                <div key={index} className="flex mb-4 items-center">
                  <div className=" rounded-lg">
                    <img
                      src={`${item?.img}`}
                      height={40}
                      width={40}
                      alt={item?.key}
                    />
                  </div>
                  <div className="w-fit pl-2">{item?.key}</div>
                </div>
              );
            })}
          </div>
          <div className="h-[30%] flex flex-col justify-center items-center">
            <div>
              <img
                src={"/images/whale.png"}
                height={200}
                width={200}
                alt="logo"
              />
            </div>
            <div className="text-lg text-[#737373]">Can't See Your Dapp?</div>
            <div className="flex text-sm justify-between">
              <p>Contact</p>
              <p className="text-[#533482] ml-2">support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
