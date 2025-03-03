/**
 * Copyright 2025 Paion Data. All rights reserved.
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

import "./App.css";
import { Grammar, Dashboard } from "./components";
import { useAppSelector, selectLanguage } from "alexandria-redux";

function App(): JSX.Element {
  const language = useAppSelector(selectLanguage);

  return (
    <>
      <main>
        <section className="glass">
          <Dashboard />
          <Grammar language={language} />
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>

      <div style={{ position: "absolute", left: "47%", bottom: "2%" }}>
        <a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备2024234224</a>
      </div>
    </>
  );
}

export default App;
