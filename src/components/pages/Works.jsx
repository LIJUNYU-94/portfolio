import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Worksdetail from "./Worksdetail";
function Work({ kv, name, onHover, onClick }) {
  return (
    <div className="works-show">
      <img
        src={kv}
        alt={name}
        className="works-showimg"
        onMouseEnter={onHover}
        onMouseLeave={() => onHover("")}
        onClick={(e) => onClick(e)}
      />
    </div>
  );
}

function Works() {
  const [selectedIntro, setSelectedIntro] = useState("");
  const [workNow, setWork] = useState(0);
  const [detailshow, detailshowOn] = useState("off");
  useEffect(() => {
    setWork(0);
  }, []);
  const worksData = [
    {
      id: 1,
      kv: "1.jpeg",
      description:
        "初心者としてWebデザイン科に入ってから最初のサイト制作、成長の第一歩でした。CSSの勉強が始まる前に、調べながらやってみて、勉強が進んでからは、2.0バージョンも作ってみました。普段からのWebサイトのイメージや機能をできる範囲に真似して、試しながら作りました。",
      period: "2024.5(2.0は2024.6)",
      skills: "HTML、CSS",
      url: "https://lijunyu.vercel.app/index.html",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],

      name: "自己紹介サイト",
      intro:
        "初心者からの最初のサイト制作試しーーー自己紹介サイト。CSSの授業が始まる前に独学でやってみました。",
    },
    {
      id: 2,
      kv: "1.jpeg",
      description:
        "初めての全過程サイト制作。地方/海外の入学検討者もWebデザイン科をよく知れるため、日常に使われている三つの教室をベースに、実技体験、企画体験と在校生日常の三つのコンテンツを作りました。JavaScriptでゲームっぽいの体験流れを実装しました。CSSでレスポンシブ対応。ブラッシュアップ予定あります。",
      period: "2024.5-2024.7(企画から実装まで)",
      skills: "HTML、CSS、JavaScript",
      url: "https://online-opencampus.vercel.app/",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "Online Open Campus",
      intro:
        "初めての企画から実装まで全過程サイト制作、一年前期課題：Webデザイン科スペシャルサイトーーーオンラインオープンキャンパス。それぞれの教室に入って学科の内容を体験できます。",
    },
    {
      id: 3,
      kv: "1.jpeg",
      description:
        "JavaScriptの授業の内容に基づいて、試作でブロック崩しゲームを作ってみました。正しい判定には一番工夫しました。まだPC版しかないですが、スマホ版、そしてゲーム性アップのコンテンツ、そしてバックエンドでランキングも追加予定です。レベル3をクリアしたらboss戦に入ります。よかったら遊んでみてください。",
      period: "2024.11(一週間)",
      skills: "HTML、JavaScript、Canvas",
      url: "https://lijunyu-94.github.io/brickgame/",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "ブロック崩しゲーム",
      intro:
        "仕組みを理解させるJavaScriptの授業を受けてから自力で作りました。UIはまだシンプルですが、クリアでレベルアップ、レベル3までクリアしたらboss戦に入るの仕組みを作りました。",
    },
    {
      id: 4,
      kv: "1.jpeg",
      description:
        "一年生としてチームワークに参加、そして多くの部分を担当できてとても貴重な経験でした。ポスターを再現してキービジュアル作り、そして出店情報のswiperの細かい設定が一番工夫しました。レスポンシブも細かく設定。サブページの文字流れ効果は、なんとvanilla.jsでした（笑）。",
      period: "2024.9-2024.10",
      skills: "HTML、CSS、JavaScript",
      url: "https://event.jec.ac.jp/nissensai/",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "日専祭2024HP",
      intro:
        "日本電子専門学校毎年恒例の学園祭「日専祭」のイベントページの制作チーム（デザイナー3人、エンジニア2人）に参加しました。一年生としてサブページと共通部分を実装、そしてJavaScriptの動きとCSSのレスポンシブと公開後の修正対応を担当しました。",
    },
    {
      id: 5,
      kv: "1.jpeg",
      description:
        "時代のチャンスとも言えるシニア市場では、オンラインツールの導入が不確定性が高いけどうまく活用すれば競争優位性を確立できます。圧倒的なコスパ、シニアにも使いやすい、カスタマイズ対応などの強みを持つ会議ツールであることを伝えるサイトとして作成しました。サイト内でZION-MEETを体験できる機能の実装、そして強みを直感的にアピールするデザインに工夫しました。",
      period: "2024.11-2025.1(企画→実装、実装は15日間)",
      skills: "React.js、CSS",
      url: "https://github.com/LIJUNYU-94/Promotion-Project",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "ZION-MEET LP",
      intro:
        "一年後期の進級制作の産学連携授業での作品です。ZION-MEETという製品は、安い、登録不要、カスタマイズ対応の強みを持ち、日本の高齢化時代を見据えて、シニア市場に進出している企業をターゲットにしました。（ロゴなど著作権の関係から、GitHubのみ公開されます）",
    },
    {
      id: 6,
      kv: "1.jpeg",
      description:
        "私は推し活をしています。いつも挑戦が大好き、コールの難易度が鬼レベルの妄想slaveの現場にハマりました。グループの魅力と情報をもっと広く知ってもらえるために、このツールを作りました。現在20人くらいコール覚え用で使っています。「自分なりの貢献ができてよかった！」と思っています。",
      period: "2025.1-2025.2(二週間)",
      skills: "Next.js、TypeScript、Tailwind.CSS、Youtube.api、JSON",
      url: "https://mousoufan.vercel.app/",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "妄想slave非公式応援アプリ",
      intro:
        "「妄想slave」は、東京で活動している地下アイドルグループ、個性派、盛り上がる現場と高難度のコールで知られています。本気でコールを練習したい方々は、ネットで調べてもバラバラすぎてかなり不便なので苦戦に陥り、現場の楽しさを感じてグループに少し気になった方は、コールの内容がわからなくて入りづらい現状があり、このアプリを作りました。",
    },
    {
      id: 7,
      kv: "1.jpeg",
      description:
        "イベントで多くのユーザーが楽しんでもらえたら嬉しかったです。イベント前日までの限られた時間でデザイナーの方と協力し合って無事に出展しました。Webの枠を超えてシステムとして形にする中で、60種類（郷土料理19種）の料理データと材料の膨大な情報を整理し、JSONファイルに適切に格納する作業が、最も苦戦したポイントでした。",
      period: "2025.1-2025.2(２週間)",
      skills: "HTML、CSS、JavaScript、Chart.js、JSON",
      url: "https://event.jec.ac.jp/zentsuji/",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "色いろイーツ",
      intro:
        "参×官×学プロジェクト「善通寺デジフェス2024」で、出展コンテンツ「色いろイーツ」の実装を担当しました。色センサー＋Webシステムブロックを組み立て、地域の郷土料理と栄養素、バランスの良い給食について学べる。子どもたちが組み立てたレゴブロックをカメラで色を認識、その色の割合をもとに栄養素の比率を計算し、最も近い栄養構成を持つ郷土料理の栄養、給食の情報を表示するシステムです。",
    },
    {
      id: 8,
      kv: "1.jpeg",
      description:
        "「フロントエンドエンジニアとして、ポートフォリオはサイト形式の方が適している」と思いました。まずReact.jsを用いて、1からテンプレートを作り、最後に内容を入力するだけで簡単に仕上がります。テンプレートをご希望の方は、ぜひContactページよりお気軽に連絡してください",
      period: "2025.3(10日間)",
      skills: "React.js、Chart.js、CSS",
      url: "",
      details: [
        { img: "1.jpeg", imgintro: "1" },
        { img: "1.jpeg", imgintro: "2" },
        { img: "1.jpeg", imgintro: "3" },
      ],
      name: "ポートフォリオサイト",
      intro:
        "このWebページです、自分の経歴、日本電子専門学校に入ってから一年間の制作を全部載せています。",
    },
  ];
  const detailRef = useRef(null);
  const closeBtnRef = useRef(null);
  const textRef = useRef(null);
  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        detailshowOn("off"); // アニメ終了後に非表示
      },
    });

    // ① transformOriginを「右上」にセット
    gsap.set(detailRef.current, {
      transformOrigin: "top right",
    });

    // ② ✖️ボタンを先に消す
    tl.to(closeBtnRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // ③ detail本体を右上に吸い込むように閉じる
    tl.to(
      detailRef.current,
      {
        scale: 0.01,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      },
      "-=0.2"
    );
  };
  return (
    <>
      <section className="works">
        <h1>Works</h1>
        <div className="works-container">
          <p className="works-message">{selectedIntro}</p>
          {worksData.map((item, index) => (
            <Work
              key={index}
              kv={item.kv}
              name={item.name}
              onHover={() => setSelectedIntro(item.intro)}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = rect.left + rect.width / 2;
                const clickY = rect.top + rect.height / 2;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const offsetX = clickX - centerX;
                const offsetY = clickY - centerY;
                setWork(item.id), detailshowOn("on");
                setTimeout(() => {
                  if (
                    detailRef.current &&
                    closeBtnRef.current &&
                    textRef.current
                  ) {
                    const tl = gsap.timeline();
                    gsap.set(detailRef.current, {
                      x: offsetX,
                      y: offsetY,
                      opacity: 0.1,
                      scale: 0.01,
                    });
                    gsap.set(closeBtnRef.current, {
                      opacity: 0,
                      y: -10, // 上からスッと降りてくる感じ
                      x: 10,
                    });
                    gsap.set(textRef.current, {
                      opacity: 0,
                      y: 10, // 上からスッと降りてくる感じ
                    });
                    tl.to(detailRef.current, {
                      x: 0,
                      y: 0,
                      opacity: 0.7,
                      scale: 1,
                      duration: 0.4,
                      ease: "power3.out",
                    });
                    tl.to(detailRef.current, {
                      opacity: 1,
                      duration: 0.1,
                      ease: "power2.out",
                    });
                    tl.to(
                      closeBtnRef.current,
                      {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 0.2,
                        ease: "power2.out",
                      },
                      "+=0.1"
                    ); // ← 本体のあと、0.1秒待ってから
                    tl.to(
                      textRef.current,
                      {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                      },
                      "+=0.1"
                    );
                  }
                }, 50);
              }}
            />
          ))}
          {detailshow === "on" && (
            <div className="works-detail" ref={detailRef}>
              <div className="works-detail-text" ref={textRef}>
                <Worksdetail now={worksData[workNow - 1]} />
              </div>
              <p
                ref={closeBtnRef}
                className="works-detail-off"
                onClick={() => handleClose()}
              >
                ✖️
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Works;
