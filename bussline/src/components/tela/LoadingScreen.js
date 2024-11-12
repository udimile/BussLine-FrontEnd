import React, { useEffect } from "react";
import "./LoadingScreen.css";
import { useNavigate } from "react-router-dom";
const LoadingScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/escolher-perfil");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="loading-screen">
      <svg
        width="222"
        height="136"
        viewBox="0 0 222 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54.042 1.94229C23.4441 8.7252 1.57874 34.2239 0.106298 64.8393C-0.510858 77.6795 1.50532 86.873 7.57369 98.8884C19.4316 122.367 45.9723 137.412 72.2749 135.562C82.8826 134.816 90.7032 132.751 99.5955 128.35C103.415 126.459 106.724 124.735 106.948 124.518C107.171 124.302 104.96 120.678 102.034 116.464L96.7151 108.805L91.7054 111.472C72.6212 121.636 49.2238 118.06 33.5042 102.575C26.3206 95.4989 22.6841 89.3414 20.2919 80.2049C11.9027 48.1698 38.0803 17.142 71.6726 19.3051C79.9318 19.8373 89.0254 22.5709 94.6622 26.2166L97.6676 28.1608L92.9695 37.5967C85.511 52.5804 83.5931 66.158 86.7443 81.6856C88.3418 89.5624 95.2535 105.455 97.0812 105.455C97.6587 105.455 101.251 103.402 105.065 100.892L111.998 96.3306L118.861 100.846C126.616 105.95 126.053 106.139 130.748 96.8637C135.021 88.4234 137.038 79.2015 137.026 68.1434C137.012 54.6149 134.232 44.6192 127.326 33.2695L123.802 27.4793L126.086 25.7463C127.342 24.7929 131.272 22.8399 134.819 21.4073C142.666 18.2358 156.448 17.142 164.709 19.0331C181.918 22.9744 195.619 35.3354 201.436 52.1719C203.203 57.2856 203.732 60.9628 203.732 68.1434C203.732 75.324 203.203 79.0012 201.436 84.1148C194.328 104.686 175.324 118.265 153.738 118.196C144.304 118.166 139.069 116.979 130.878 113.011C127.316 111.286 124.117 109.743 123.769 109.583C123.421 109.424 120.874 112.373 118.107 116.137L113.078 122.98L117.747 125.937C138.501 139.079 167.34 139.225 188.846 126.297C197.023 121.382 207.127 111.206 211.981 103.001C234.016 65.7437 217.198 19.1814 176.267 4.12602C169.585 1.66834 166.072 1.01735 157.385 0.62361C141.317 -0.103971 128.22 3.23937 116.516 11.0562C111.454 14.4359 109.812 14.7923 108.193 12.8619C106.432 10.7616 93.0855 4.5335 86.6967 2.82992C78.0178 0.516582 62.3914 0.0914236 54.042 1.94229ZM107.775 47.1721C101.292 61.4832 101.513 77.0688 108.39 90.4588L110.748 95.0502L112.45 91.7952C117.37 82.3789 119.447 71.0243 117.947 61.7375C116.857 54.9831 113.875 46.152 111.685 43.1867C110.506 41.5911 110.13 41.974 107.775 47.1721Z"
          fill="black"
        />
      </svg>

      <svg
        width="138"
        height="136"
        viewBox="0 0 138 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="loading-logo"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.8583 1.63612C39.46 4.26599 25.6287 14.1375 17.7987 23.0763C5.34836 37.2886 -1.23907 58.7031 1.32315 76.6298C3.17493 89.5811 11.6443 108.155 13.818 105.936C17.0786 104.826 28.296 96.5911 27.9473 95.9499C22.4391 85.8363 19.2674 77.7848 19.2524 68.2105C20.0366 53.8536 23.5998 44.9095 33.607 32.7741C43.9441 22.4987 55.8385 18.115 70.335 18.2797C108.704 18.7151 129.465 58.9209 113.81 91.5116C100.583 115.795 71.3017 125.192 46.424 112.593C43.1173 110.92 39.9028 109.265 39.4529 109.603C38.7895 109.279 29.4786 121.55 29.4786 122.75C29.4786 124.012 37.1793 128.329 44.5433 131.195C82.3393 145.905 124.59 124.807 135.667 85.6941C138.186 76.7984 138.428 60.5927 136.17 51.9637C132.265 37.0356 121.316 21.0098 109.462 12.7319C92.7521 1.06415 71.1116 -2.44793 51.8583 1.63612Z"
          fill="white"
        />
      </svg>
      <p className="loading-text">BussLine</p>
    </div>
  );
};

export default LoadingScreen;
