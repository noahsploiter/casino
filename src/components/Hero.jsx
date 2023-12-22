/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kEjtJgtw1W4
 */
import coin from "../assets/coin.jpg";
import spin from "../assets/spin.jpg";
import rock from "../assets/rock.jpg";
import number from "../assets/number.jpg";
import ludo from "../assets/ludo.jpg";

export default function Hero() {
  return (
    <div className="bg-[#f8f9fa] p-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-[#6f42c1] text-white">
              <h1 className="text-2xl font-bold">PLAY</h1>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <TrophyIcon className="text-yellow-400 w-6 h-6" />
                  <span className="ml-2 text-sm">VIP Pass</span>
                </div>
                <div className="flex items-center">
                  <CoinsIcon className="text-yellow-400 w-6 h-6" />
                  <span className="ml-2 text-sm">60</span>
                  <GemIcon className="text-blue-400 w-6 h-6 ml-4" />
                  <span className="ml-2 text-sm">32</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">Today</div>
                <div className="text-sm">Tomorrow</div>
                <div className="text-xs text-gray-500">in 02:24:59</div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <img
                    alt="Lakers"
                    className="w-24 h-24 rounded-md"
                    height="100"
                    src={coin}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="mt-2 text-lg font-semibold">Coin</div>
                  <div className="text-yellow-500">x1.20</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Warriors"
                    className="w-24 h-24 rounded-md"
                    height="100"
                    src={spin}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="mt-2 text-lg font-semibold">Spin</div>
                  <div className="text-yellow-500">x03.30</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Warriors"
                    className="w-24 h-24 rounded-md"
                    height="100"
                    src={rock}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="mt-2 text-lg font-semibold">Rock</div>
                  <div className="text-yellow-500">x2.30</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Warriors"
                    className="w-24 h-24 rounded-md"
                    height="100"
                    src={number}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="mt-2 text-lg font-semibold">Number</div>
                  <div className="text-yellow-500">x22.30</div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Warriors"
                    className="w-24 h-24 rounded-md"
                    height="100"
                    src={ludo}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="mt-2 text-lg font-semibold">Dice</div>
                  <div className="text-yellow-500">x12.30</div>
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl font-bold">29</div>
                <CoinsIcon className="text-yellow-400 w-8 h-8 ml-2" />
                <div className="text-lg font-semibold ml-2">
                  Potential winnings
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 text-white">- 24</button>
                <button className="bg-blue-500 text-white">+ 24</button>
              </div>
              <div className="mt-4 flex items-center justify-between bg-purple-100 p-2 rounded-lg">
                {""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function GemIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function MedalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
