import { useEffect, useState } from "react";
function Skillbar({ language, point, fullpoint, detail }) {
  const [animateClass, setAnimateClass] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => setIsLoading(false);
  useEffect(() => {
    // ページに来た瞬間にアニメーション再トリガー
    setAnimateClass(""); // 一瞬外す
    const timeout = setTimeout(() => {
      setAnimateClass("loading"); // 付け直す
    }, 10); // 10msくらいがちょうどいい

    return () => clearTimeout(timeout);
  }, []); // ← Worksページがマウントされたときだけ実行
  return (
    <p className="skill-bar" onMouseEnter={handleMouseEnter}>
      <span className="skill-bara">{language}</span>
      <span className="skill-barb">
        <span className="skill-barba">{point + " / " + fullpoint + " "}</span>

        <span
          className={`skill-barc ${isLoading ? animateClass : ""}`}
          style={{ width: `${(point / fullpoint) * 100}%` }}
        >
          {detail}
        </span>
        <span
          className={`skill-bard ${isLoading ? animateClass : ""}`}
          style={{ width: `${(point / fullpoint) * 100}%` }}
        ></span>
      </span>
    </p>
  );
}

function Skillslang() {
  return (
    <>
      <p className="skills-langttl">言語資格：</p>
      <div className="skills-language">
        <Skillbar
          language="日本語:N1"
          point={153}
          fullpoint={180}
          detail={"語彙42/60 読解60/60 聴解51/60"}
        />
        <Skillbar
          language="TOEIC"
          point={840}
          fullpoint={990}
          detail={"Reading470 Listening470"}
        />
      </div>
    </>
  );
}

export default Skillslang;
