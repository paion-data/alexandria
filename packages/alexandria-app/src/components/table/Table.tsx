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

import "./Table.css";

interface TableProps {
  header: JSX.Element[];
  rows: JSX.Element[JSX.Element[]];
}

export default function Table(props: TableProps): JSX.Element {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {props.header.map((it) => {
            return <th key={it}>{it}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => {
          return (
            <tr key={row.toString()}>
              {row.map((it) => {
                return <td key={it}>{it}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
