/**
 * Copyright Jiaqi Liu
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

import './Grammar.css';
import {useState} from "react";

function Grammar() {

  const [cardModalShow, setCardModalShow] = useState<boolean>(false)

  return (
      <div className="audios">
        <div className="status">
          <h1>Ancient Greek</h1>
          <input type="text"/>
        </div>
        <div className="cards">
          <div className="card" onClick={() => setCardModalShow(true)}>
            <img src="images/first.png" width="10%" alt=""/>
            <div className="card-info">
              <h2>Noun Declensions</h2>
              <p>1st, 2nd, and 3rd declensions</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">10%</h2>
          </div>
          <div className={cardModalShow ? "card-modal active" : "card-modal"}>
            <div className={cardModalShow ? "overlay active" : "overlay"}
                 onClick={() => setCardModalShow(false)}></div>
            <div className={cardModalShow ? "card-modal-content active" : "card-modal-content"}>
              <h2>Noun Declensions</h2>

              <p>
                Nouns of the First Declension end <span className="greek-text">ᾱ</span>, <span className="greek-text">η</span>, or <span className="greek-text">α</span> (feminine),
                or in <span className="greek-text">ᾱς</span> or <span className="greek-text">ης</span> (masculine).
                Feminines generally end in <span className="greek-text">ᾱ</span>, if <span className="greek-text">ε</span>, <span className="greek-text">ι</span>, or <span className="greek-text">ρ</span> precedes the ending.
                All first-declension nouns ending in <span className="greek-text">η</span> or <span className="greek-text">ᾱ</span> are
                feminine. The first-declension <span className="greek-text">η</span> or <span className="greek-text">ᾱ</span> endings are:
              </p>

              <div className="img-block">
                <img src="./images/ancient-greek-first-declension.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Grammar;
