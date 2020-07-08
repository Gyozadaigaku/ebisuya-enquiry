import React, { useState, useCallback, useEffect } from "react";
import "./assets/styles/style.css";
import { db } from "./firebase/index";
import {
  AnswersList,
  Chats,
  Footer,
  Header,
  Loading,
  LanguageList,
} from "./components/index";
import { ReservationForm } from "./components/Forms/index";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Ebisuke from "./assets/img/ebisuke.jpg";

const App = () => {
  const [answers, setAnswers] = useState([]); // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]); // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState("init"); // 現在の質問ID
  const [dataset, setDataset] = useState({}); // 質問と回答のデータセット
  const [open, setOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理
  const [languageSettingOpen, setLanguageSettingOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理

  // 問い合わせフォーム用モーダルを開くCallback関数
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  // 問い合わせフォーム用モーダルを閉じるCallback関数
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // 言語設定用モーダルを開くCallback関数
  const languageSettingHandleOpen = useCallback(() => {
    setLanguageSettingOpen(true);
  }, [setLanguageSettingOpen]);

  // 言語設定用モーダルを閉じるCallback関数
  const languageSettingHandleClose = useCallback(() => {
    setLanguageSettingOpen(false);
  }, [setLanguageSettingOpen]);

  // 新しいチャットを追加するCallback関数
  let isAfterSecondQuestion = false;
  const addChats = useCallback(
    (chat) => {
      if (isAfterSecondQuestion === false) {
        const firstQustion = {
          text:
            "こんちゃっす！<br>えびす屋で人力車をひいてる<br>えびすけっす♡えびっ♪",
          type: "question",
        };

        setChats((prevChats) => {
          return [...prevChats, firstQustion];
        });
        isAfterSecondQuestion = true;
      }
      setChats((prevChats) => {
        return [...prevChats, chat];
      });
    },
    [setChats]
  );

  // 次の質問をチャットエリアに表示する関数
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    // 選択された回答と次の質問をチャットに追加
    addChats({
      text: nextDataset.question.replace(/\\n/g, "<br>"),
      type: "question",
    });

    // 次の回答一覧をセット
    setAnswers(nextDataset.answers);

    // 現在の質問IDをセット
    setCurrentId(nextQuestionId);
  };

  // 回答が選択された時に呼ばれる関数
  const selectAnswer = useCallback(
    (selectedAnswer, nextQuestionId) => {
      switch (true) {
        // お問い合わせが選択された場合
        case nextQuestionId === "contact":
          handleOpen();
          break;

        // リンクが選択された時
        case /^https:*/.test(nextQuestionId):
          const a = document.createElement("a");
          a.href = nextQuestionId;
          a.target = "_blank";
          a.click();
          break;

        // 電話が選択された時
        case nextQuestionId === "call":
          const a2 = document.createElement("a");
          a2.href = "tel:09012345678";
          a2.click();
          break;

        // 選択された回答をchatsに追加
        default:
          // 現在のチャット一覧を取得
          addChats({
            text: selectedAnswer,
            type: "answer",
          });

          setTimeout(
            () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
            0 //750
          );
          break;
      }
    },
    [answers]
  );

  // 最初の質問をチャットエリアに表示する
  useEffect(() => {
    (async () => {
      const initDataset = {};

      // Fetch questions dataset from Firestore
      await db
        .collection("questions")
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            initDataset[doc.id] = doc.data();
          });
        });

      // Firestoreから取得したデータセットを反映
      setDataset(initDataset);

      // 最初の質問を表示
      // displayNextQuestion(currentId, initDataset[currentId]);
      displayNextQuestion(currentId, initDataset[currentId]);
    })();
  }, []);

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  // addChats({
  //   text: "hoge",
  //   type: "question",
  // });
  // const chat2 = { text: "hoge", type: "question" };

  return (
    <>
      <Header
        languageSettingOpen={languageSettingOpen}
        languageSettingHandleOpen={languageSettingHandleOpen}
        languageSettingHandleClose={languageSettingHandleClose}
      />
      <section className="c-section">
        <div className="c-box">
          {Object.keys(dataset).length === 0 ? (
            <Loading />
          ) : (
            <>
              {/* <ListItem className="chat__row">
                <ListItemAvatar>
                  <Avatar alt="icon" src={Ebisuke} />
                </ListItemAvatar>
                <div className="p-chat__bubble">aaaaa</div>
              </ListItem> */}
              {/* <Chats chats={chat2} /> */}
              <Chats chats={chats} />
              <AnswersList answers={answers} select={selectAnswer} />
            </>
          )}
          <ReservationForm
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          <LanguageList
            languageSettingOpen={languageSettingOpen}
            languageSettingHandleOpen={languageSettingHandleOpen}
            languageSettingHandleClose={languageSettingHandleClose}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
