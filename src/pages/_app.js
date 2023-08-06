import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      {Array.from({ length: 150 }).map((_, idx) => (
        <div
          key={idx}
          className="star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 1.5}s`,
          }}
        ></div>
      ))}
      <Component {...pageProps} />
    </main>
  );
}
