import React, { useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../isMobile";
function About() {
  const isMobile = useIsMobile();
  const motionProps = isMobile
    ? { whileInView: { opacity: 1, x: 0 } }
    : { animate: { opacity: 1, x: 0 } };
  const [mode, setMode] = useState("points");
  const intro = [
    "30代を迎える直前で、「人生の道を考え直すのもありかもしれない」と悩んでいました。",
    "高校時代からずっと文系で、語学や歴史が好きだったものの、「何かが違う」という違和感がありました。改めて考えてみると、「歴史が好き」というのは、必ずしも「歴史研究が好き」ということではなかったし、語学も、ただ言語力を活かして働くことに魅力を感じていたわけではありませんでした。",
    "そんなとき、ふと幼い頃の自分を思い出しました。",
    "小さい頃から好奇心が旺盛で、小学1年生のときにすでにマウス操作もタイピングも自然にできて、よく親のいない間にこっそりゲームを遊んでいました。ある日、出張に行く前の親が、こっそりゲームを防ぐためにパソコンを完全に解体しました。それでも自力で元通りに復元し、最高なゲーム時間を過ごしました。",
    "手先は不器用でも、パソコンを使ったものづくりが好きでした。道具を使ってオリジナルのゲームを作ったり、小学生の頃に好きなゲームに自分ルールをつけて「このエリアに入ったら特典がある」みたいな設定を考え、FrontPageで説明ページを試作しました。フリーター時代にはHTML5ゲームにハマり、プログラミングの知識がなくでも、裏技やバグを見つけるために検証機能を使いました。",
    "もう迷いません。",
    "「30代からでも、やってみたいことを選んでいい」と思い、日本電子専門学校のWebデザイン科を選びました。プログラミングだけでなく、「苦手だったデザイン」にもあえて挑戦したのは、できないことにこそ自分の成長の可能性を感じたからです。",
    "1年が経った今、あの時この道を選んで本当に良かったと、心から感じています。",
    "この1年間の成果をまとめたポートフォリオを通して、少しでも私のことを知っていただけたら嬉しいです。",
  ];
  return (
    <section>
      <img className="lefttop-img about-img" src="my.jpeg" alt="自分の写真" />
      {mode === "points" && (
        <div className="about-aboutme">
          <p className="about-onephrase">
            一言で自分を表すと：
            <br className="sp-only" />
            <span>まっすぐに挑み続ける実行派</span>
          </p>
          <p className="about-onephrase2">
            この三つの力をちゃんと意識しながら <br className="sp-only" />
            成長しています：
          </p>
          <div className="about-abilitys">
            <div className="about-ability">
              <p>考える力</p>
              <ul>
                <li>論理的に物事を整理するのが得意</li>
                <li>企画立案の経験が豊富</li>
                <li>企画から実装までを一貫して担当した実績あり</li>
              </ul>
            </div>
            <div className="about-ability">
              <p>伝える力</p>
              <ul>
                <li>家庭教師の経験があり、教えるのが得意</li>
                <li>チームリーダーとしてメンバーをまとめた経験あり</li>
                <li>相手に合わせた伝え方や言葉選びを工夫している</li>
              </ul>
            </div>
            <div className="about-ability">
              <p>作れる力</p>
              <ul>
                <li>新しい技術や知識の吸収が早い</li>
                <li>相手の要望に応じた柔軟なものづくりが得意</li>
                <li>個人・チーム制作実績が多数</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {mode === "article" && (
        <div className="about-message">
          {intro.map((para, i) => (
            <p key={i}>
              {para.split(/(?<=[。])/).map((line, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, x: -30 }}
                  {...motionProps}
                  transition={{ delay: j * 0.2 + i * 0.5, duration: 0.25 }}
                  viewport={{ once: true, amount: 1 }}
                >
                  {line}
                  <br />
                </motion.span>
              ))}
            </p>
          ))}
        </div>
      )}
      <div
        className="about-switch"
        onClick={() => setMode(mode === "points" ? "article" : "points")}
      >
        {mode === "points" ? <p>マイストーリーへ</p> : <p>戻る</p>}
      </div>
    </section>
  );
}

export default About;
