import React from "react";
import { useState, useEffect } from "react"; //로딩없이 안에 페이지를 변경 해줌 (리액트 훅 변수)
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

//변수 : 저장 , 추가 , 변경 --> 자동으로 변경 (리액트 훅)

function Reference() {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
      .then((response) => response.json())
      // .then((result) => console.log(result.data.htmlRefer)) //데이터에 htmlRefer만 가져옴
      .then((result) => setReferences(result.data.htmlRefer)) //객체인지 배열인지 확인이 필요함
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Reference", "book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Reference;
