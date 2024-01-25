const api = process.env.NEXT_PUBLIC_PORFO_API || "http://localhost:3000/v1";
import { ethers } from "ethers";

const getConnectHeaders = async () => {
  if (!window.ethereum) {
    console.log("No ethereum object");
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  //generate a unique hash
  const hash = Math.floor(Math.random() * 1000000000);
  const signature = await signer.signMessage(hash.toString());
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("signature", signature);
  headers.append("hash", hash);
  return headers;
};

export const connectWallet = async () => {
  const headers = await getConnectHeaders();
  const res = await fetch(`${api}/wallet/connect`, {
    method: "POST",
    headers,
  });
  const data = await res.json();
  return data;
};

export const getUserName = async (accessToken) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("accessToken", accessToken);
  const res = await fetch(`${api}/pns/getUserName`, {
    method: "GET",
    headers,
  });
  if (res.status === 400) {
    return null;
  }
  const data = await res.json();

  console.log(data);
  return data;
};

export const WaitlistBot = async (messages, accessToken) => {
  console.log(accessToken,":::access token")
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("accessToken", accessToken);
  const res = await fetch(`${api}/ai/waitlist`, {
    method: "POST",
    headers,
    body: JSON.stringify({ messages }),
  });
  const data = await res.json();
  return data;
};
