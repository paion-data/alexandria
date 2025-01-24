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

import "./StandingCardList.css";
import type { ListItem } from "./ListItem";

interface StandingCardListProps {
  items: ListItem[];
}

export default function StandingCardList(props: StandingCardListProps): JSX.Element {
  return (
    <ol className="standingCardList">
      {props.items.map((item) => {
        return (
          <li key={item.title}>
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.desc}</div>
          </li>
        );
      })}
    </ol>
  );
}
