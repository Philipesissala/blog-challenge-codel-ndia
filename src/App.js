import React from "react";

import Header from "./Header";
import Card from "./Card";

import "./global.css";

const App = () => {
  return (
    <div>
      <Header />
      <Card
        date="02 de jul, 2021"
        title="Agora é oficial: o windows 11 está vindo"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        aperiam est sit error doloribus cupiditate magni itaque ducimus ab
        ratione, reprehenderit perspiciatis nisi? Fuga, quas error rerum dolor
        iure facere!
      </Card>
      <Card
        date="02 de jul, 2021"
        title="Tim Berners-Lee vai leiloar código-fonte da web"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        aperiam est sit error doloribus cupiditate magni itaque ducimus ab
        ratione, reprehenderit perspiciatis nisi? Fuga, quas error rerum dolor
        iure facere Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, aperiam est sit error doloribus cupiditate magni itaque
        ducimus ab ratione, reprehenderit perspiciatis nisi? Fuga, quas error
        rerum dolor iure facere!
      </Card>
      <Card
        date="02 de jul, 2021"
        title="Tem Firefox novo no pedaço e você vai querer migrar"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        aperiam est.
      </Card>
      <Card
        date="02 de jul, 2021"
        title="John McAfee, criador do antivirus McAfee, morre"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        aperiam est sit error doloribus cupiditate magni itaque ducimus ab
        ratione, reprehenderit perspiciatis nisi? Fuga, quas error rerum dolor
        iure facere,Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, aperiam est sit error doloribus cupiditate magni itaque
        ducimus ab ratione, reprehenderit perspiciatis nisi? Fuga, quas error
        rerum dolor iure facere!
      </Card>
    </div>
  );
};

export default App;
