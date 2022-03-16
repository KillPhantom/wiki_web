type PropsType = {
  overrideStyle?: any;
};

const ThumbUpIcon = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      viewBox="0 0 40 40"
      style={{ width: "40px", height: "40px", ...overrideStyle }}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-344.000000, -1790.000000)">
          <g transform="translate(0.000000, 1542.000000)">
            <g transform="translate(344.000000, 248.000000)">
              <circle fill="#FFA700" cx="20" cy="20" r="20"></circle>
              <path
                d="M30.6544843,16.2833904 C29.5259557,14.7027368 26.5678452,15.4550352 25.3322856,15.4550352 C26.1786415,11.6249462 25.9499843,8 22.5410462,8 C19.1321081,8 19.2936276,10.7813471 19.2936276,10.7813471 L19.2936276,12.7876923 C19.2936276,16.2986342 14.6729686,16.8002205 11.8825401,16.8002205 C9.09211155,16.8002205 9,19.1255506 9,19.1255506 L9,29.5216686 C9,32.1205764 11.4094954,31.9991124 11.4094954,31.9991124 C11.4094954,31.9991124 23.3956727,31.7863477 27.0249974,31.7863477 C30.6543222,31.7863477 30.8683842,27.3178025 30.8683842,27.3178025 C30.8683842,27.3178025 31.2648855,23.001371 31.4173236,21.2990912 C31.5697618,19.5968114 31.7828508,17.864044 30.6544843,16.2833904 Z M13.6133615,28.1378872 C13.6133615,28.6583827 13.1914164,29.0803278 12.6709209,29.0803278 C12.1504253,29.0803278 11.7284803,28.6583827 11.7284803,28.1378872 L11.7284803,20.6911226 C11.7284803,20.170627 12.1504253,19.748682 12.6709209,19.748682 C13.1914164,19.748682 13.6133615,20.170627 13.6133615,20.6911226 L13.6133615,28.1385358 L13.6133615,28.1378872 Z"
                fill="#FFFFFF"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ThumbUpIcon;
