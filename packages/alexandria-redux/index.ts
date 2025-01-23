/*
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

export {
  ANCIENT_GREEK,
  LATIN,
  CLASSICAL_HEBREW,
  CLASSICAL_SANSCRIT,
  type Language,
  setLanguage,
  setCardModalShow,
  selectLanguage,
  selectCardModalShow,
} from "./src/appSlice";

export { useAppSelector, useAppDispatch } from "./src/hooks";
export { store } from "./src/store";