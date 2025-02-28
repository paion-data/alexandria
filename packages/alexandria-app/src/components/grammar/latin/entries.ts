/**
 * Copyright 2025 Jiaqi Liu
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

import type { Entry } from "../entry";
import SyllabificationAndAccentuation, { TITLE } from "./SyllabificationAndAccentuation";
import Tenses from "./Tenses";

export const entries: Entry[] = [
  {
    title: TITLE,
    subTitle: "Basic Latin",
    progress: "50%",
    cardContent: SyllabificationAndAccentuation,
  },
  {
    title: "Latin Tenses",
    subTitle: "There are 6 tenses in indicative mood",
    progress: "100%",
    cardContent: Tenses,
  },
];
