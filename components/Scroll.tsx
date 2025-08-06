import React from "react";

interface ScrollProps {
  text: string;
  speed?: number; 
}

const Scroll: React.FC<ScrollProps> = ({ text, speed = 15 }) => {
  const repeatedText = Array(10).fill(text).join(" "); 

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          background-color: white;
          height: 3rem;
          display: flex;
          align-items: center;
          position: relative;
        }

        .scroll-track {
          display: inline-block;
          white-space: nowrap;
          animation: scroll ${speed}s linear infinite;
        }

        .scroll-text {
          display: inline-block;
          white-space: nowrap;
          padding-right: 4rem;
        }
      `}</style>

      <div className="scroll-container">
        <div className="scroll-track">
          <span className="scroll-text">{repeatedText}</span>
          <span className="scroll-text">{repeatedText}</span> 
        </div>
      </div>
    </>
  );
};

export default Scroll;
