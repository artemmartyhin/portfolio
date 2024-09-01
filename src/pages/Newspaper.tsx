import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import "./Newspaper.css";

interface Article {
  token: string;
  symbol: string;
  summary: string;
  references: string[];
}

const Newspaper: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://the-crypto-times.onrender.com/crypto-summary"
        );
        console.log("Data fetched successfully:", result.data);
        setArticles(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateAndCleanURL = (url: string): string | null => {
    const cleanedURL = url.match(/https?:\/\/[^\s]+/i)?.[0];
    if (cleanedURL) {
      try {
        new URL(cleanedURL);
        return cleanedURL;
      } catch (error) {
        console.error("Invalid URL:", cleanedURL);
        return null;
      }
    }
    return null;
  };

  return (
    <div className="newspaper-container">
      <header className="newspaper-header">
        <h1>The Crypto Times</h1>
        <h2>AI powered daily crypto news</h2>
        <p className="newspaper-date">{new Date().toLocaleDateString()}</p>
      </header>
      <div className="flipbook-container">
        <HTMLFlipBook
          width={isMobile ? 400 : 800}
          height={isMobile ? 600 : 1000}
          minWidth={isMobile ? 300 : 600}
          maxWidth={isMobile ? 400 : 1200}
          minHeight={isMobile ? 500 : 800}
          maxHeight={isMobile ? 800 : 1800}
          maxShadowOpacity={0.5}
          className="newspaper"
          size="stretch"
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          usePortrait={isMobile} 
          startZIndex={0}
          autoSize={true}
          showCover={false}
          clickEventForward={true}
          swipeDistance={30}
          mobileScrollSupport={true}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{ margin: "0 auto" }} // Explicitly passing the style prop
        >
          {articles.map((article, index) => (
            <div className="page" key={index}>
              <div className="page-content">
                <h2 className="article-title">
                  {article.token} ({article.symbol})
                </h2>
                <p className="article-body drop-cap">{article.summary}</p>
                <div className="references">
                  <h3>References:</h3>
                  <ul>
                    {article.references.map((ref, i) => {
                      const validURL = validateAndCleanURL(ref);
                      return validURL ? (
                        <li key={i}>
                          <a
                            href={validURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {validURL}
                          </a>
                        </li>
                      ) : (
                        <li key={i}>Invalid reference link</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Newspaper;