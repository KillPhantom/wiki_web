import { useState } from "react";
type PropsType = {
  overrideStyle?: any;
};

const GithubIcon = ({ overrideStyle }: PropsType) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ height: "32px", width: "32px", ...overrideStyle }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1741.000000, -72.000000)">
            <g transform="translate(1741.000000, 72.000000)">
              <rect
                fill="#3AC28D"
                x="0"
                y="0"
                width="32"
                height="32"
                rx="16"
              ></rect>
              <path
                d="M16.0008938,8 C11.5803821,7.99821316 8,11.5768077 8,15.9937444 C8,19.4865385 10.2397497,22.4555922 13.3589543,23.5459732 C13.7790191,23.6514363 13.7146688,23.3529221 13.7146688,23.149146 L13.7146688,21.7638259 C11.289018,22.04804 11.1907049,20.4428562 11.0280416,20.1747297 C10.6991398,19.6134517 9.92157301,19.4704509 10.1539493,19.2023244 C10.7062898,18.9181104 11.2693554,19.2738248 11.9217964,20.2372926 C12.393699,20.9362089 13.3142666,20.8182333 13.7808066,20.7020451 C13.8826947,20.2819803 14.1007709,19.9066033 14.4010725,19.6152392 C11.8878338,19.1647867 10.840353,17.6311033 10.840353,15.8078434 C10.840353,14.923026 11.1317171,14.1097091 11.7037203,13.453693 C11.3390683,12.3722496 11.7376829,11.4463195 11.7913082,11.3086813 C12.8298514,11.2157308 13.9095073,12.0522853 13.9935203,12.1184232 C14.5833985,11.9593348 15.2572897,11.8753219 16.0116188,11.8753219 C16.769523,11.8753219 17.4452017,11.9629098 18.0404424,12.1237857 C18.242431,11.9700599 19.2434365,11.251481 20.2086918,11.3390689 C20.2605295,11.4767072 20.6502067,12.3811871 20.3070048,13.4483305 C20.886158,14.1061341 21.1810971,14.926601 21.1810971,15.8132059 C21.1810971,17.6400409 20.1264663,19.1755118 17.6060775,19.6188142 C18.0261423,20.0335165 18.2871188,20.6090946 18.2871188,21.2454481 L18.2871188,23.2563966 C18.3014188,23.4172725 18.2871188,23.5763609 18.5552452,23.5763609 C21.720925,22.5092175 24,19.5187137 24,15.9955319 C24,11.5768077 20.4178304,8 16.0008938,8 Z"
                id="路径"
                fill="#FFFFFF"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      ) : (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1568.000000, -40.000000)" fill="#142542">
            <g transform="translate(1440.000000, 40.000000)">
              <g transform="translate(128.000000, 0.000000)">
                <rect
                  fillOpacity="0.1"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  rx="16"
                ></rect>
                <g
                  transform="translate(4.000000, 4.000000)"
                  fillRule="nonzero"
                  opacity="0.4"
                >
                  <g>
                    <path d="M12.0008938,4 C7.58038208,3.99821316 4,7.57680773 4,11.9937444 C4,15.4865385 6.23974975,18.4555922 9.35895431,19.5459732 C9.7790191,19.6514363 9.71466875,19.3529221 9.71466875,19.149146 L9.71466875,17.7638259 C7.28901799,18.04804 7.19070495,16.4428562 7.02804156,16.1747297 C6.69913976,15.6134517 5.92157301,15.4704509 6.15394928,15.2023244 C6.7062898,14.9181104 7.26935538,15.2738248 7.92179645,16.2372926 C8.39369903,16.9362089 9.31426656,16.8182333 9.78080661,16.7020451 C9.88269467,16.2819803 10.1007709,15.9066033 10.4010725,15.6152392 C7.88783376,15.1647867 6.84035303,13.6311033 6.84035303,11.8078434 C6.84035303,10.923026 7.13171713,10.1097091 7.70372025,9.45369299 C7.33906826,8.37224958 7.73768294,7.44631952 7.79130823,7.30868126 C8.82985141,7.21573076 9.90950732,8.05228533 9.99352028,8.11842319 C10.5833985,7.95933482 11.2572897,7.87532186 12.0116188,7.87532186 C12.769523,7.87532186 13.4452017,7.96290984 14.0404424,8.12378572 C14.242431,7.97005988 15.2434365,7.25148095 16.2086918,7.33906893 C16.2605295,7.47670718 16.6502067,8.38118713 16.3070048,9.44833046 C16.886158,10.1061341 17.1810971,10.926601 17.1810971,11.8132059 C17.1810971,13.6400409 16.1264663,15.1755118 13.6060775,15.6188142 C14.0261423,16.0335165 14.2871188,16.6090946 14.2871188,17.2454481 L14.2871188,19.2563966 C14.3014188,19.4172725 14.2871188,19.5763609 14.5552452,19.5763609 C17.720925,18.5092175 20,15.5187137 20,11.9955319 C20,7.57680773 16.4178304,4 12.0008938,4 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      )}
    </svg>
  );
};

export default GithubIcon;
