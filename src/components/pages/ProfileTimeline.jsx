import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
const x = "文字です";
const timelineData = [
  {
    year: "2013",
    event: "大学時代（中国・西安交通大学・英語専攻）",
    details: [
      "英語専攻、TEM8資格を取得。第二外国語はフランス語。",
      "アルバイトオフィスにて1年間学生リーダー務めました。",
      "バスケが好き、学内の試合にも数回出場しました。",
      "2pacが好き、ラッパーとして多くのステージに出演しました。",
    ],
  },
  {
    year: "2017",
    event: "短時間の就労と療養期間",
    details: [
      "深圳の輸出系企業で勤務。時差に合わせて9時出社・23時退勤の日常を送りました。",
      "もともと強くなかった体調をさらに崩してしまい、残念ながら1ヶ月で退職しました。",
      "この後半年間、実家で療養。",
      "自分のこれからについて考え直す時間に...",
      "たくさんの本を読み、自分の人生の道を探しながら、有意義に時間を過ごしていました。",
    ],
  },
  {
    year: "2018",
    event: "フリーター時期",
    details: [
      "学校から見放された高校三年生を中心に指導、短時間で大きく成績を伸ばした生徒が数人いました。",
      "2018年8月から留学を真剣に考え始め、日本語の学習に集中し、12月にN1に合格しました。",
      "歴史研究にも熱心に取り組み、東北大学を目指して、多くの歴史書を読みました。",
      "最終的には日本語力が足りず、教授の指示を誤解してしまい、うまくいきませんでした。",
      "前半はフリーランスの家庭教師、後半は勉強しながら旅をし、様々な町を巡りました。",
    ],
  },
  {
    year: "2020",
    event: "コロナ禍・留学待機期間",
    details: [
      "日本語力の不足を痛感し、まずは日本語学校へ通うことを決めました。",
      "2020.4日本語学校への入学予定でしたが、コロナ禍の影響で無期限に延期となりました。",
      "ゲームでアイテム販売とサービス提供で生計を立て、多くの貯金をすることができました。",
      "ロックダウン政策の中、封鎖対象外の地域を見極めながら移動し、3つの長距離ルートを走破しました。",
      "歴史や政治に関する勉強を継続し、日本に渡った後も引き続き挑戦していきたいと考えていました。",
    ],
  },
  {
    year: "2022",
    event: "日本語学校に在籍",
    details: [
      "2年間で3クラスの優秀賞をすべて受賞、皆勤賞も2回取りました。",
      "セブンイレブンで週20時間以上アルバイトしてました。",
      "推し活にどハマりして、日本語のモチベが爆上がり、会話もどんどん上達しました。",
      "校外イベントやサークルにも積極的に参加。",
      "進路を何度も考え直して、自分の趣味に合った専門学校を選びました。",
    ],
  },
  {
    year: "2024",
    event: "日本電子専門学校に在学",
    details: [
      "「プログラミングに興味はあるけれど、デザインが苦手」という理由でWebデザイン科を選びました。",
      "1年間優秀な成績を収め、出席率は100％を維持しました。",
      "色彩検定3級やビジネス検定などの資格を無事取得しました。",
      "エンジニアを目指してプログラミング知識や経験がたくさん増えました。",
      "日専祭サイト制作チームに参加し、進級制作ではチームリーダーを務め、デジフェスにも出展しました。",
    ],
  },
];

const ProfileTimeline = () => {
  const slidesRef = useRef([]);
  const swiperRef = useRef(null);
  const shownSlides = useRef(new Set());
  const [activeIndex, setActiveIndex] = useState(0); // ← 追加！

  const animateSlide = (index) => {
    const el = slidesRef.current[index];
    if (!el || shownSlides.current.has(index)) return;

    shownSlides.current.add(index);
    const detail = el.querySelector(".exp-right");
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
    if (detail) {
      gsap.fromTo(
        detail.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1, // ← ふわっと一個ずつ出る
          delay: 0.2,
        }
      );
    }
  };

  return (
    <div className="exp-tl">
      {/* 中央縦線 */}
      <div className="exp-line" />

      <Swiper
        direction="vertical"
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel
        modules={[Pagination, Mousewheel]}
        onSwiper={(swiper) => {
          // 初期表示のスライドにアニメーション
          setActiveIndex(swiper.activeIndex); // ← 最初のindexをセット！
          requestAnimationFrame(() => {
            animateSlide(swiper.activeIndex);
          });
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          // スライド切り替え後にアニメーション
          animateSlide(swiper.activeIndex);
          setActiveIndex(swiper.activeIndex); // ← スライド変更時に更新
        }}
        className="mySwiper"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => (slidesRef.current[index] = el)}
              className={`slide-wrapper exp-slide ${
                swiperRef?.current?.activeIndex === index
                  ? "active"
                  : "inactive"
              }`}
            >
              {/* 左：年 */}
              <div className="exp-left">
                <p className="exp-left-year">{item.year + "~"}</p>
              </div>

              {/* 右：出来事 */}
              <div className="exp-right">
                {activeIndex === index ? (
                  <>
                    <p className="exp-right-ttl">{item.event}</p>
                    <div className="exp-right-detail">
                      {item.details.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileTimeline;
