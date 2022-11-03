import React from "react";

const ReferText = ({ num, title, desc, descBasic, definition, descStar }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="desc">{descBasic}</span>
        <span className="desc">{definition}</span>
        <span className="star">{descStar}</span>
      </a>
    </li>
  );
};

const ReferCont = ({ references }) => {
  console.log(references);
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((el, idx) => (
              <ReferText
                key={idx}
                num={el.num}
                title={el.title}
                desc={el.desc}
                descBasic={el.descBasic}
                definition={el.definition}
                descStar={el.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
