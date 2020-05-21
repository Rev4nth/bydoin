import React, { useState } from "react";
import "./App.css";
import {
  Header,
  Container,
  Segment,
  Accordion,
  Icon,
  Image,
} from "semantic-ui-react";

import bit1 from "./images/bit1.png";
import bit2 from "./images/bit2.png";
import bit4 from "./images/bit4.png";
import bit6 from "./images/bit6.png";

function App() {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <div>
      <Container className="app-container">
        <Header as="h2">Build a todo with html and javascript</Header>
        <Segment>
          Your objective is to build a todo with minimal features using
          javascript and html like this{" "}
          <a
            href="https://xyffv.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mini Todo
          </a>
          <p>Will build the app by following steps</p>
        </Segment>
        <br />
        <Accordion styled fluid>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 1
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>Create an index.html page. Create a heading "Todos"</p>
            <Image src={bit1} size="medium" bordered></Image>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 2
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Write a list using ul and li. let's have the following in li - ,
            </p>
            <ul>
              <li>Wake up at 6:00 am.</li>
              <li>Go for a walk.</li>
              <li>Drink Coffee.</li>
            </ul>
            <Image src={bit2} size="medium" bordered></Image>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 3
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Let's load the todos from javascript array. Use Script tag at the
              bottom to run javascript.
            </p>
            <pre>
              var todos = [Wake up at 6:00 am, Go for a walk, Drink Coffee ]
            </pre>
            <p>
              You should not have write the li elements.
              <pre>
                Use document.getElementById, document.createElement, innerHTML,
                appendChild, for loop to solve this bit.
              </pre>
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 4
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>Add an add input element to the page with a add button</p>
            <Image src={bit4} size="medium" bordered></Image>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 5
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>Now add the input value to the array by clicking on Add</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bit 6
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              Update the li elements when the input value gets added to the
              array
            </p>
            <Image src={bit6} size="medium" bordered></Image>
          </Accordion.Content>
        </Accordion>
      </Container>
    </div>
  );
}

export default App;
