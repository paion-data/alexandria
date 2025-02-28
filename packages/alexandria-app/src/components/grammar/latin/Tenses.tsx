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
import "./Tenses.css";

export default function Tenses(): JSX.Element {
  return (
    <table className="latin-tenses-table">
      <thead>
        <tr>
          <th> </th>
          <th>Present</th>
          <th>Past</th>
          <th>Future</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Simple</b>
          </td>
          <td>Present</td>
          <td>Perfect</td>
          <td>Future</td>
        </tr>
        <tr>
          <td>
            <b>Continuous (Progressive)</b>
          </td>
          <td>Present</td>
          <td>Imperfect</td>
          <td>Future</td>
        </tr>
        <tr>
          <td>
            <b>Completed</b>
          </td>
          <td>Perfect</td>
          <td>Pluperfect</td>
          <td>Future Perfect</td>
        </tr>
      </tbody>
    </table>
  );
}
