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
import { NounDeclensions } from "./ancient-greek";

function Grammar(): JSX.Element {
  const [cardModalShow, setCardModalShow] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element>(null);

  return (
    <div className="audios">
      <div className="status">
        <h1>Ancient Greek</h1>
        <input type="text" />
      </div>
      <div className="cards">
        <div
          className="card"
          onClick={() => {
            setModalContent(NounDeclensions);
            setCardModalShow(true);
          }}
        >
          <img src={first} width="10%" alt="" />
          <div className="card-info">
            <h2>Noun Declensions</h2>
            <p>1st, 2nd, and 3rd declensions</p>
            <div className="progress"></div>
          </div>
          <h2 className="percentage">10%</h2>
        </div>
        <div className={cardModalShow ? "card-modal active" : "card-modal"}>
          <div className={cardModalShow ? "overlay active" : "overlay"} onClick={() => setCardModalShow(false)}></div>
          <div className={cardModalShow ? "card-modal-content active" : "card-modal-content"}>{modalContent}</div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;
