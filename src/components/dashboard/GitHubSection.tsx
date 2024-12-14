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
import {useState} from "react";

function GitHubSection() {

  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleClick = () => {
    setIsVisible(false)

    // This side effect is used to make the GH button fade back in on browser backward operation
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }

  return (
      <>
        <a
            href="https://github.com/QubitPi/alexandria"
            onClick={handleClick}
            style={{
              textDecoration: "none",
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.0s ease-in-out'
            }}
        >
          <div className={`github ${isVisible ? "" : "up"}`}>
            <h2>Fork it on GitHub</h2>
            <img src="images/github.png" width="80%" alt=""/>
          </div>
        </a>
      </>
  );
}

export default GitHubSection;
