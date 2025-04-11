import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Worksdetail from "./Worksdetail";
import useIsMobile from "../isMobile";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Work({ kv, name, onHover, onClick }) {
  const isMobile = useIsMobile();
  return (
    <div className="works-show">
      {isMobile ? <p className="works-show-ttl">{name}</p> : <></>}
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
  const isMobile = useIsMobile();
  const [selectedName, setSelectedName] = useState(
    <>
      この1年間で制作した作品です。
      <br />
      初心者から少しずつ成長してきた過程が伝わるように構成しています。ご覧いただけましたら嬉しいです。
      <br />
      マウスホバーでここに詳細が表示されます。
    </>
  );
  useEffect(() => {
    setWork(0);
  }, []);
  const worksData = [
    {
      id: 1,
      kv: "1kv.png",
      description:
        "初心者としてWebデザイン科に入ってから最初のサイト制作、成長の第一歩でした。CSSの勉強が始まる前に、調べながらやってみて、勉強が進んでからは、2.0バージョンも作ってみました。普段からのWebサイトのイメージや機能をできる範囲に真似して、試しながら作りました。",
      period: "2024.5(2.0は2024.6)",
      skills: "HTML、CSS",
      url: "https://lijunyu.vercel.app/index.html",
      details: [
        {
          img: "1a.png",
          imgintro:
            "最初のバージョン、CSSの授業が始まる前に自分で調べながらやってみました。ずっと気になってたサイト内広告をつけてみました。",
        },

        {
          img: "1kv.png",
          imgintro:
            "CSSの授業を受けた後にリメイクしたものです。レスポンシブはまだちょっと雑ですが、とにかく作ってみたかったので挑戦しました。ハスキーが大好きでアイコンの画像として使いました。ホバーをしたらぐるぐる回ります。",
        },
        {
          img: "1d.png",
          imgintro:
            "授業の振り返りとして初めてスマホ対応のレイアウトを作りました。色の感覚、デザインの苦手は多分見えます。苦手だから挑戦したい気持ちでWebデザイン科に入りました。",
        },
        {
          img: "1c.png",
          imgintro:
            "趣味のページでは、当時の挑戦としてさまざまな動きを取り入れてみました。ホバーで角度が変化するアニメーションや、左側の画像が趣味に応じて切り替わるようにしています。",
        },
      ],
      name: "自己紹介サイト",
      intro:
        "初心者からの最初のサイト制作試しーーー自己紹介サイト。CSSの授業が始まる前に独学でやってみました。",
    },
    {
      id: 2,
      kv: "2kv.png",
      description:
        "初めての全過程サイト制作。地方/海外の入学検討者もWebデザイン科をよく知れるため、日常に使われている三つの教室をベースに、実技体験、企画体験と在校生日常の三つのコンテンツを作りました。JavaScriptでゲームっぽいの体験流れを実装しました。CSSでレスポンシブ対応。ブラッシュアップ予定あります。",
      period: "2024.5-2024.7(企画から実装まで)",
      skills: "HTML、CSS、JavaScript",
      url: "https://online-opencampus.vercel.app/",
      details: [
        {
          img: "2kv.png",
          imgintro: "キービジュアル、背景でグラデーションのアニメを付き。",
        },
        {
          img: "2e.png",
          imgintro:
            "三つのコンテンツは、オープンキャンパスの雰囲気を作るために、三つの教室に分けて入り口を作りました。",
        },
        {
          img: "2d.png",
          imgintro:
            "スマホ版のサイト、レイアウトはPCと大きく変わり、pc-onlyとsp-onlyのclassでレスポンシブ表示を制御します。",
        },
        {
          img: "2a.png",
          imgintro:
            "実技体験のページ、771教室の実際の背景を入れて、ゲームっぽいの文字出し方と動きで体験の流れを作りました。HTML,CSS,JSを編集することで、ブラウザの画面でちゃんと結果が出てくる仕組みを制作しました。指示とホワイトボードを参考して、誰でも最初のサイトを作れます。",
        },
        {
          img: "2b.png",
          imgintro:
            "企画体験のページ、772教室の一列目で座ってる実際の様子。学校の近くにあるまいばすけっとを仮クライエントにして、企画の考え方と流れを伝えます。",
        },
        {
          img: "2c.png",
          imgintro:
            "在校生日常のページ、ランダムで7~8名の一年生が教室にいる。背中を押したらその人っぽいの台詞が出てくる。そして、おみくじに関わりがある齊藤くんまたは作者の自分が教室にいる場合は、本日の運勢のおみくじを引くことができます。教室にあちこちを押してみたらいろんなことが起きます。",
        },
      ],
      name: "Online Open Campus",
      intro:
        "初めての企画から実装まで全過程サイト制作、一年前期課題：Webデザイン科スペシャルサイトーーーオンラインオープンキャンパス。それぞれの教室に入って学科の内容を体験できます。",
    },
    {
      id: 3,
      kv: "3kv.png",
      description:
        "JavaScriptの授業の内容に基づいて、試作でブロック崩しゲームを作ってみました。正しい判定には一番工夫しました。まだPC版しかないですが、スマホ版、そしてゲーム性アップのコンテンツ、そしてバックエンドでランキングも追加予定です。レベル3をクリアしたらboss戦に入ります。よかったら遊んでみてください。",
      period: "2024.11(一週間)",
      skills: "HTML、JavaScript、Canvas",
      url: "https://lijunyu-94.github.io/brickgame/",
      details: [
        {
          img: "3a.png",
          imgintro:
            "ゲームの画面です、UIデザインまだはスマホ対応、そしてバックエンドでのランキング表示はブラッシュアップ予定です。",
        },
      ],
      name: "ブロック崩しゲーム",
      intro:
        "仕組みを理解させるJavaScriptの授業を受けてから自力で作りました。UIはまだシンプルですが、クリアでレベルアップ、レベル3までクリアしたらboss戦に入るの仕組みを作りました。",
    },
    {
      id: 4,
      kv: "4kv.png",
      description:
        "一年生としてチームワークに参加、そして多くの部分を担当できてとても貴重な経験でした。ポスターを再現してキービジュアル作り、そして出店情報のswiperの細かい設定が一番工夫しました。レスポンシブも細かく設定。サブページの文字流れ効果は、なんとvanilla.jsでした（笑）。",
      period: "2024.9-2024.10",
      skills: "HTML、CSS、JavaScript",
      url: "https://event.jec.ac.jp/nissensai/",
      details: [
        {
          img: "4kv.png",
          imgintro:
            "ポスターをキービジュアルにしました。このデザイン案を実装するのは苦戦しました。",
        },
        { img: "4b.png", imgintro: "スマホ版のキービジュアルです。" },
        {
          img: "4c.png",
          imgintro:
            "一番工夫した出店情報のパーツ。二つのswiperを用いてちゃんと表示しました。そしてランダムで出展情報が流れてきます",
        },
        {
          img: "4d.png",
          imgintro:
            "スマホはメインデバイスを考えて、階数の表示まで表示させました。",
        },
        {
          img: "4e.png",
          imgintro:
            "サブページの文字流れ効果、vanilla.jsで挑戦しました。異なる幅にしても同じ効果で表れる仕組みが一番苦戦しました。",
        },
      ],
      name: "日専祭2024HP",
      intro:
        "日本電子専門学校毎年恒例の学園祭「日専祭」のイベントページの制作チーム（デザイナー3人、エンジニア2人）に参加しました。一年生としてサブページと共通部分を実装、そしてJavaScriptの動きとCSSのレスポンシブと公開後の修正対応を担当しました。",
    },
    {
      id: 5,
      kv: "5kv.jpg",
      description:
        "時代のチャンスとも言えるシニア市場では、オンラインツールの導入が不確定性が高いけどうまく活用すれば競争優位性を確立できます。圧倒的なコスパ、シニアにも使いやすい、カスタマイズ対応などの強みを持つ会議ツールであることを伝えるサイトとして作成しました。サイト内でZION-MEETを体験できる機能の実装、そして強みを直感的にアピールするデザインに工夫しました。",
      period: "2024.11-2025.1(企画→実装、実装は15日間)",
      skills: "React.js、CSS",
      url: "https://github.com/LIJUNYU-94/Promotion-Project",
      details: [
        {
          img: "5kv.jpg",
          imgintro:
            "キービジュアルです、見やすさを重視しながら強みをパッと出しているようなデザインにしました。ナビーの重要性が資料ダウンロードとお問い合わせより一層下なので、右側に収める設計にしました。",
        },
        {
          img: "5kva.png",
          imgintro:
            "スマホ版のキービジュアルです、一番重要性が高いボタンを画面の下に付いています。PC版右側のナビーはハンバーガーメニューになっています。",
        },
        {
          img: "5b.png",
          imgintro:
            "埋め込みを活用して実装した体験機能です。ONに切り替えると、下の画像が実際のZION-MEETに切り替えます。ルームがランダムで生成ですが、Test IDを入力することで、複数の体験者が同じ会議に入ることができます。ZION-MEETを使わせて、直感的に魅力を感じさせる仕組みを作りました。",
        },
        {
          img: "5c.png",
          imgintro:
            "契約までの流れです、画像を一切使わず、レスポンシブまで全部コードで対応しました。",
        },
        {
          img: "5e.png",
          imgintro:
            "LPに対してとても大事な料金プランの部分です、真ん中のイラスト以外は全部コード対応して、見やすさを重視しながら内容をうまく伝えることに工夫しました。",
        },
        {
          img: "5f.png",
          imgintro:
            "料金プランの部分のスマホ版です、PCのレイアウトと異なり、タグ式で表現しました。",
        },
        {
          img: "5d.jpeg",
          imgintro: "このサイトは進級制作の最優秀賞を受賞しました。",
        },
      ],
      name: "ZION-MEET LP",
      intro:
        "一年後期の進級制作の産学連携授業での作品です。ZION-MEETという製品は、安い、登録不要、カスタマイズ対応の強みを持ち、日本の高齢化時代を見据えて、シニア市場に進出している企業をターゲットにしました。（ロゴなど著作権の関係から、GitHubのみ公開されます）",
    },
    {
      id: 6,
      kv: "6kv.png",
      description:
        "私は推し活をしています。いつも挑戦が大好き、コールの難易度が鬼レベルの妄想slaveの現場にハマりました。グループの魅力と情報をもっと広く知ってもらえるために、このツールを作りました。現在20人くらいコール覚え用で使っています。「自分なりの貢献ができてよかった！」と思っています。",
      period: "2025.1-2025.2(二週間)",
      skills: "Next.js、TypeScript、Tailwind.CSS、Youtube.api、JSON",
      url: "https://mousoufan.vercel.app/",
      details: [
        {
          img: "6a.png",
          imgintro:
            "トップページです。全曲の歌詞、映像。全曲のコール。関連のリンクとスケジュール、グループの情報をまとめて一つのツールに収めました。",
        },
        {
          img: "6b.png",
          imgintro:
            "全部14曲があります、14曲全部の曲、コール情報をまとめて一つのJSONファイルで管理されています。",
        },
        {
          img: "6c.png",
          imgintro:
            "全14曲の歌詞と映像（ライブ映像・公式MV）は、著作権に配慮し、グループの運営やカメラマンご本人から許可を得たうえで掲載しています。全曲やコールのページに入ってからの流れはモード選択→曲選択です。もちろん入ってからナビゲーションを通して変更するのも可能です。",
        },
        {
          img: "6d.png",
          imgintro:
            "コールモードはこのツールの主な機能です。全ての曲のそれぞれのパーツに何のコールを入れたのかを全て一目でチェックできます。右側の+で詳しいコール内容をチェックすることができます。コールを覚えるのも便利です。",
        },
        {
          img: "6e.png",
          imgintro:
            "さらに練習しやすくなるために付けた練習機能、ライブ映像見ながらコールが自動流れで出てくるのでリズムに合わせて練習することが可能です。今ファンたちに一番使われている機能です。",
        },
        {
          img: "6f.png",
          imgintro:
            "ライブ中には、タブレットなどの大きい画面で便利に使えるライブ機能です、手動モードと自動モードを揃え、見ながらコールすることも可能です。多くの人が一緒にコールできればさらに盛り上がります。",
        },
        {
          img: "6g.png",
          imgintro:
            "ライブ中の写真です。難しいコールのときは、タブレットのライブモードで画面を見ながらみんなでコールしています。",
        },
      ],
      name: (
        <>
          妄想slave
          <br className="sp-only" />
          非公式応援アプリ
        </>
      ),
      intro:
        "「妄想slave」は、東京で活動している地下アイドルグループ、個性派、盛り上がる現場と高難度のコールで知られています。本気でコールを練習したい方々は、ネットで調べてもバラバラすぎてかなり不便なので苦戦に陥り、現場の楽しさを感じてグループに少し気になった方は、コールの内容がわからなくて入りづらい現状があり、このアプリを作りました。",
    },
    {
      id: 7,
      kv: "7kv.png",
      description:
        "イベントで多くのユーザーが楽しんでもらえたら嬉しかったです。イベント前日までの限られた時間でデザイナーの方と協力し合って無事に出展しました。Webの枠を超えてシステムとして形にする中で、60種類（郷土料理19種）の料理データと材料の膨大な情報を整理し、JSONファイルに適切に格納する作業が、最も苦戦したポイントでした。",
      period: "2025.1-2025.2(２週間)",
      skills: "HTML、CSS、JavaScript、Chart.js、JSON",
      url: "https://event.jec.ac.jp/zentsuji/",
      details: [
        {
          img: "7c.png",
          imgintro:
            "カメラで取得したレゴブロックの色割合情報で計算式を通して栄養構成が一番近い郷土料理を表示させます。全部19種類が表示可能です。この画面は郷土料理の栄養構成情報です。材料は主な栄養素のパーツに表示されます。",
        },
        {
          img: "7d.png",
          imgintro:
            "次は、郷土料理の栄養構成比例です、このチャート図を通して、料理の栄養をもっと詳しく知れます。ここのchart.jsでデザイン通りの実装は工夫点でした。",
        },
        {
          img: "7e.png",
          imgintro:
            "次は、給食センターからいただいた給食のデータを基づいて、郷土料理の栄養のバランスがいい給食を紹介します。ホバーをしたら詳細が出てきます（スマホはクリック）",
        },
        {
          img: "7f.jpg",
          imgintro:
            "デジフェス当日会場の様子。遊び方がそれぞれだけど、たくさんの来場者が楽しんで貰えて嬉しかったです！",
        },
      ],
      name: "色いろイーツ",
      intro:
        "参×官×学プロジェクト「善通寺デジフェス2024」で、出展コンテンツ「色いろイーツ」の実装を担当しました。色センサー＋Webシステムブロックを組み立て、地域の郷土料理と栄養素、バランスの良い給食について学べる。子どもたちが組み立てたレゴブロックをカメラで色を認識、その色の割合をもとに栄養素の比率を計算し、最も近い栄養構成を持つ郷土料理の栄養、給食の情報を表示するシステムです。",
    },
    {
      id: 8,
      kv: "8kv.png",
      description:
        "「フロントエンドエンジニアとして、ポートフォリオはサイト形式の方が適している」と思いました。まずReact.jsを用いて、1からテンプレートを作り、最後に内容を入力するだけで簡単に仕上がり、バックエンドの試しでcontactページを実装しました。何が気になるところがあればぜひ気軽にご連絡ください。",
      period: "2025.3(10日間)",
      skills: "React.js+Express、Chart.js、CSS",
      url: "https://portfolio-three-neon-20.vercel.app/",
      details: [
        {
          img: "8a.png",
          imgintro:
            "今のページのPCブラウザー画面です。文章の表現には一番工夫をこらしましたが、不自然な日本語が残っているかもしれません。その点もご理解いただけると嬉しいです。",
        },
        // { img: "8b.png", imgintro: "今のページのスマホ画面です〜" },
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
  useEffect(() => {
    if (isMobile) {
      const targets = gsap.utils.toArray(".works-show");
      console.log("見つかった要素数:", targets.length);
      targets.forEach((target) => {
        ScrollTrigger.create({
          trigger: target,
          start: "top 60%",
          end: "bottom 30%",
          onEnter: () => {
            gsap.to(target, {
              scale: 1.1,
              opacity: 1,
              duration: 0.3,
              ease: "power3.out",
            });
          },
          onEnterBack: () => {
            gsap.to(target, {
              scale: 1.1,
              opacity: 1,
              duration: 0.3,
              ease: "power3.out",
            });
          },
          onLeave: () => {
            gsap.to(target, {
              scale: 1,
              opacity: 0.5,
              duration: 0.3,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(target, {
              scale: 1,
              opacity: 0.5,
              duration: 0.3,
              ease: "power3.out",
            });
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile]);
  useEffect(() => {
    if (isMobile && detailshow === "on") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [detailshow, isMobile]);
  return (
    <>
      <section className="works">
        <h1>Works</h1>
        <div className="works-container">
          {isMobile ? (
            <p className="works-messagesp">
              この1年間で制作した作品です。
              <br />
              初心者から少しずつ成長してきた過程が伝わるように構成しています。
              <br />
              ご覧いただけましたら嬉しいです。
              <br />
            </p>
          ) : (
            <p className="works-message">
              <span>{selectedName} </span> <br />
              {selectedIntro}
            </p>
          )}

          {worksData.map((item, index) => (
            <Work
              key={index}
              kv={item.kv}
              name={item.name}
              onHover={() => {
                setSelectedIntro(item.intro);
                setSelectedName(item.name);
              }}
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
