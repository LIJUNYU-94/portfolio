import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// 🔧 必須：Radarに必要な要素を登録！
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart({ title, level, labels, color }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: level,
        // backgroundColor: "rgba(34, 197, 94, 0.2)", // 薄い緑
        // borderColor: "rgba(39, 197, 94, 1)", // 緑線
        backgroundColor: color[0],
        borderColor: color[1],
        borderWidth: 2,
        pointBackgroundColor: "rgba(34, 197, 94, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff", // ← タイトルの文字色
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          color: "#333", // 目盛りの文字色（濃いグレー）
          font: {
            size: 14, // 目盛りのフォントサイズ
          },
          backdropColor: "transparent",
        },
        pointLabels: {
          color: "rgba(248, 238, 238, 0.7)", // 各項目（HTML, CSS...）の文字色
          font: {
            size: 14, // 各項目のフォントサイズ
            fontweight: "bold",
          },
        },
        grid: {
          color: "rgba(0,0,0,0.2)", // グリッド線の色（これが薄かったら調整）
        },
      },
    },
  };

  return (
    <div style={{ width: "280px", height: "280px" }}>
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
