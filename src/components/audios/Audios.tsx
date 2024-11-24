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

import './Audios.css';

function Audios() {
  return (
      <div className="audios">
        <div className="status">
          <h1>Aristotle</h1>
          <input type="text"/>
        </div>
        <div className="cards">
          <div className="card">
            <img src="images/first.png" width="10%" alt=""/>
            <div className="card-info">
              <h2>Categories</h2>
              <p>Aristotle's Six Works on Logics</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">10%</h2>
          </div>
          <div className="card">
            <img src="images/second.png" width="10%" alt=""/>
            <div className="card-info">
              <h2>On Interpretation</h2>
              <p>Aristotle's Six Works on Logics</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">0%</h2>
          </div>
          <div className="card">
            <img src="images/third.png" width="10%" alt=""/>
            <div className="card-info">
              <h2>Prior Analytics</h2>
              <p>Aristotle's Six Works on Logics</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">0%</h2>
          </div>
        </div>
      </div>
  );
}

export default Audios;
