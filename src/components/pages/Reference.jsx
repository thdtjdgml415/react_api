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
    fetch("https://thdtjdgml415.github.io/react_api/src/utils/reference.json")
      .then((response) => response.json())
      .then((result) => setReferences(result.cssRef))
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
