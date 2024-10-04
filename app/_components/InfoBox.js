import React from "react";

function InfoBox({
  heading,
  backgroundColor = "bg-gray-50",
  textColor = "text-gray-700",
  buttenInfo,
  children,
}) {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`  ${textColor} text-2xl font-bold `}>{heading}</h2>
      <p className={`mt-2 mb-4 text-gray-500`}>{children}</p>
      <a
        href={`${buttenInfo.link}`}
        className={`inline-block ${buttenInfo.background} text-white rounded-lg px-4 py-2 hover:bg-opacity-80`}
      >
        {buttenInfo.text}
      </a>
    </div>
  );
}

export default InfoBox;
