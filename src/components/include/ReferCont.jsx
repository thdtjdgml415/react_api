import React from "react";

const ReferText = ({ id, title, desc, desc2, element, use }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{id}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="desc">{desc2}</span>
        <span className="desc">{element}</span>
        <span className="star">{use}</span>
      </a>
    </li>
  );
};

const ReferCont = ({ references }) => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((el, idx) => (
              <ReferText
                key={idx}
                id={el.id}
                title={el.title}
                desc={el.desc}
                desc2={el.desc2}
                element={el.element}
                use={el.use}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
