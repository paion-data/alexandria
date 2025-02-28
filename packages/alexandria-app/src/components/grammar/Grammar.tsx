/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import "./Grammar.css";
import { useState } from "react";

import first from "./first.png";
import type { Language } from "alexandria-redux";
import { ANCIENT_GREEK, LATIN, setCardModalShow, useAppDispatch } from "alexandria-redux";
import { entries as greekEntries } from "./ancient-greek/entries";
import { entries as latinEntries } from "./latin/entries";
import { type Entry } from "./entry";
import Modal from "./modal/Modal";

interface GrammarProps {
  language: Language;
}

const CARDS_BY_LANGUAGE = new Map<Language, [Entry]>([
  [ANCIENT_GREEK, greekEntries],
  [LATIN, latinEntries],
]);

function Grammar(props: GrammarProps): JSX.Element {
  const [modalContent, setModalContent] = useState<JSX.Element>(null);

  const dispatch = useAppDispatch();

  return (
    <div className="grammar">
      <div className="language">
        <h1>{props.language}</h1>
        <input type="text" />
      </div>
      <div className="cards">
        {CARDS_BY_LANGUAGE.get(props.language)?.map((entry) => {
          return (
            <div
              key={props.language + entry.title}
              className="card"
              onClick={() => {
                setModalContent(entry.cardContent);
                dispatch(setCardModalShow(true));
              }}
            >
              <img src={first} width="10%" alt="" />
              <div className="card-info">
                <h2>{entry.title}</h2>
                <p>{entry.subTitle}</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">{entry.progress}</h2>
            </div>
          );
        })}
      </div>
      <Modal modalContent={modalContent} />
    </div>
  );
}

export default Grammar;
