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
import type { Language } from "../../appSlice";
import { ANCIENT_GREEK, selectCardModalShow, setCardModalShow } from "../../appSlice";
import { entries } from "./ancient-greek/entries";
import { type Entry } from "./entry";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface GrammarProps {
  langauge: Language;
}

const CARDS_BY_LANGUAGE = new Map<Language, [Entry]>([[ANCIENT_GREEK, entries]]);

function Grammar(props: GrammarProps): JSX.Element {
  const cardModalShow = useAppSelector(selectCardModalShow);
  const [modalContent, setModalContent] = useState<JSX.Element>(null);

  const dispatch = useAppDispatch();

  return (
    <div className="audios">
      <div className="status">
        <h1>{props.langauge}</h1>
        <input type="text" />
      </div>
      <div className="cards">
        {CARDS_BY_LANGUAGE.get(props.langauge)?.map((entry) => {
          return (
            <div
              key={props.langauge + entry.title}
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
        <div className={cardModalShow ? "card-modal active" : "card-modal"}>
          <div
            className={cardModalShow ? "overlay active" : "overlay"}
            onClick={() => dispatch(setCardModalShow(false))}
          ></div>
          <div className={cardModalShow ? "card-modal-content active" : "card-modal-content"}>{modalContent}</div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;