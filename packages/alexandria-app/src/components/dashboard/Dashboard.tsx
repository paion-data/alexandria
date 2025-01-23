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

import "./Dashboard.css";
import GitHubSection from "./GitHubSection";

import Greek from "./greek.svg";
import Latin from "./latin.svg";
import Hebrew from "./hebrew.svg";
import Sanskrit from "./sanskrit.svg";
import avatar from "./avatar.png";
import { useAppDispatch, ANCIENT_GREEK, LATIN, setLanguage } from "../../../../alexandria-redux";

function Dashboard(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="dashboard">
      <div className="project">
        <div className="imageCropper">
          <img src={avatar} alt="" />
        </div>
        <h3>Alexandria</h3>
        <p>Grammar</p>
      </div>
      <div className="links">
        <div className="link" onClick={() => dispatch(setLanguage(ANCIENT_GREEK))}>
          <div className="icon">
            <img src={Greek} alt="Greek" />
          </div>
          <h2>Ancient Greek</h2>
        </div>
        <div className="link" onClick={() => dispatch(setLanguage(LATIN))}>
          <div className="icon">
            <img src={Latin} alt="Latin" />
          </div>
          <h2>Latin</h2>
        </div>
        <div className="link">
          <div className="icon">
            <img src={Hebrew} alt="Hebrew" />
          </div>
          <h2>Classical Hebrew</h2>
          <h3>Coming Soon</h3>
        </div>
        <div className="link">
          <div className="icon">
            <img src={Sanskrit} alt="Sanskrit" />
          </div>
          <h2>Classical Sanskrit</h2>
          <h3>Coming Soon</h3>
        </div>
      </div>
      <GitHubSection />
    </div>
  );
}

export default Dashboard;
