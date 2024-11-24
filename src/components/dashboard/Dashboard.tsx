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

import './Dashboard.css';
import GitHubSection from "./GitHubSection";

function Dashboard() {
  return (
      <div className="dashboard">
        <div className="project">
          <div className="imageCropper">
            <img src="./images/avatar.png" alt=""/>
          </div>
          <h3>Alexandria</h3>
          <p>Library</p>
        </div>
        <div className="links">
          <div className="link">
            <img src="images/library.png" alt=""/>
            <h2>Aristotle</h2>
          </div>
          <div className="link">
            <img src="images/library.png" alt=""/>
            <h2>Herodotus</h2>
          </div>
          <div className="link">
            <img src="images/library.png" alt=""/>
            <h2>Xenophon</h2>
          </div>
          <div className="link">
            <img src="images/library.png" alt=""/>
            <h2>Hippocrates</h2>
          </div>
        </div>
        <GitHubSection />
      </div>
  );
}

export default Dashboard;
