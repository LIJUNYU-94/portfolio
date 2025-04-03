import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";

const timelineData = [
  { year: "2022", event: "aaaaaaaaa", details: "1" },
  { year: "2023", event: "bbbbbbbbb", details: "2" },
  { year: "2024", event: "ccccccccc", details: "3" },
  { year: "2025", event: "ddddddddd", details: "4" },
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
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={40}
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
                    <p className="exp-right-detail">{item.details}</p>
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
