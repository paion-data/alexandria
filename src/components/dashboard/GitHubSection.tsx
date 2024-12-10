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

import './GitHubSection.css';

function GitHubSection() {

  return (
      <>
        <a href="https://github.com/QubitPi/alexandria" style={{textDecoration: "none"}}>
          <div className="github">
            <h2>Fork it on GitHub</h2>
            <img src="images/github.png" width="80%" alt=""/>
          </div>
        </a>
      </>
  );
}

export default GitHubSection;
