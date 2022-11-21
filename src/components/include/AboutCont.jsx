import React from "react";

function AboutCont() {
  return (
    <section className="cont__about">
      <div className="container">
        <img
          src="https://github.com/thdtjdgml415/codingclass/blob/main/javascript/assets/img/effect_bg_16.jpg?raw=true"
          alt=""
        />
        <p className="about__desc">
          북극성이 가장 밝은 별이 아니라는 것을 알고 있으신가요?
          <br />
          <br />
          사람들은 북극성의 찬란한 반짝임을 통해 바닷길을 찾을 수 있다고
          생각하는데요? 하지만 저는 북극성이 아닌 다른 별자리의 도움을 받고
          바람과 물결 등 자연의 조화에 도움을 받았다고 생각합니다. <br /> 홀로
          전진하기보다 조화와 공존의 힘으로 올바른 길을 찾을 수 있었다고
          생각합니다. 저는 조화와 공존이라는 것에 중요한 가치를 두는 개발자가
          되겠습니다.
        </p>
        <div className="about__desc2">
          <img
            src="https://github.com/thdtjdgml415/react_api/blob/master/src/assets/img/josh-miller-vWBKt9Dto1g-unsplash.jpg?raw=true"
            alt=""
          />
          <p className="about__inner__desc">
            열심히 할수록 기회는 따른다. 운이 좋은 사람은 없다. <br />
            단지 운을 만들뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가
            하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이
            보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는
            것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 단지
            행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지
            않는다. 열심히 할수록 운은 나에게 온다.
          </p>
        </div>
        <div className="about__desc3"></div>
      </div>
    </section>
  );
}

export default AboutCont;
