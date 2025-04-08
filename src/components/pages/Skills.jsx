import RadarChart from "./Skillschart";
import Skillslang from "./Skillslang";
function Skills() {
  const chartCoding = [
    "フロントエンド言語",
    [4, 4, 3, 2.5, 3],
    ["HTML", "JS", "React.js", "Next.js", "JSON"],
    ["rgba(34, 197, 94, 0.2)", "rgba(39, 197, 94, 1)"],
    100,
  ];
  const chartDesign = [
    "デザイン言語/ツール",
    [2, 1.5, 3, 4, 1],
    ["PS", "AI", "figma", "CSS", "PR"],
    ["rgba(189, 44, 162, 0.2)", "rgb(200, 55, 118)"],
    600,
  ];
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-details">
        <p className="skills-message">
          一年間で身につけたスキルをまとめました。
          <br />
          バックエンドはこれから学習を進めていく予定のため、現時点ではフロントエンドのみ対応できます。2年目はバックエンド系の言語の習得に加え、フロントエンドも含めて少しずつ専門性を高めていきたいと考えています。
        </p>
        <div className="skills-Radars">
          <RadarChart
            title={chartCoding[0]}
            level={chartCoding[1]}
            ß
            labels={chartCoding[2]}
            color={chartCoding[3]}
            delay={chartCoding[4]}
          />
          <RadarChart
            title={chartDesign[0]}
            level={chartDesign[1]}
            labels={chartDesign[2]}
            color={chartDesign[3]}
            delay={chartDesign[4]}
          />
        </div>
        <Skillslang />
      </div>
    </section>
  );
}

export default Skills;
