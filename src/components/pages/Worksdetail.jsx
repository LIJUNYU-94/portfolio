import { useState, useEffect, useRef } from "react";
import React from "react";
function Worksdetail({ now }) {
  const x = "文字です";
  const [imgnow, setimg] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState("");
  const galleryRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);
  return (
    <>
      <div className="works-detail-text-left">
        <h2>
          <span>{now.name}</span>
        </h2>
        <h3>
          <span>紹介</span>
        </h3>
        <p>
          {" "}
          {now.description.split(/(?<=[。])/).map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        <div className="works-detail-text-leftbottom">
          <a className="works-detail-link" href={now.url}>
            公開リンク
          </a>
          <h3>
            <span>制作期間</span>
          </h3>
          <p>{now.period}</p>
          <h3>
            <span>使用した技術</span>
          </h3>
          <p>{now.skills}</p>
        </div>
      </div>
      <div className="works-detail-text-right">
        <div className="works-detail-text-right-gallery">
          <div
            className={`works-detail-text-right-imggallery ${
              isOverflowing ? "scroll-active" : ""
            }`}
            ref={galleryRef}
          >
            {now.details.map((item, index) => (
              <img
                key={index}
                alt={item.imgintro}
                src={item.img}
                onClick={() => setimg(index)}
              />
            ))}
          </div>
        </div>
        <div className="works-detail-text-right-imgfull">
          <img
            src={now.details[imgnow].img}
            alt="拡大表示"
            onClick={() => setFullscreenImg(now.details[imgnow].img)}
          />
        </div>
        <div
          className="works-detail-text-right-imgfullscreen"
          onClick={() => setFullscreenImg("")}
          style={{ display: fullscreenImg ? "flex" : "none" }}
        >
          <img src={fullscreenImg} alt="" />
        </div>
        <div className="works-detail-text-right-imgdetail">
          {now.details[imgnow].imgintro}
        </div>
      </div>
    </>
  );
}

export default Worksdetail;
