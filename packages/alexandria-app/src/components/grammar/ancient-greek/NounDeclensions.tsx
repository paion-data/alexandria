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

import { Table } from "../../index";

export default function NounDeclensions(): JSX.Element {
  return (
    <>
      <h2>Noun Declensions</h2>

      <p>
        Nouns of the First Declension end in <span className="greek-text">ᾱ</span>,{" "}
        <span className="greek-text">η</span>, or <span className="greek-text">α</span> (feminine), or in{" "}
        <span className="greek-text">ᾱς</span> or <span className="greek-text">ης</span> (masculine). Feminines
        generally end in <span className="greek-text">ᾱ</span>, if <span className="greek-text">ε</span>,{" "}
        <span className="greek-text">ι</span>, or <span className="greek-text">ρ</span> precedes the ending. All
        first-declension nouns ending in <span className="greek-text">η</span> or <span className="greek-text">ᾱ</span>{" "}
        are feminine. The first-declension <span className="greek-text">η</span> or{" "}
        <span className="greek-text">ᾱ</span> endings are:
      </p>

      <Table
        header={[
          "",
          <div key="dummy">
            singular{" "}
            <span key="dummy" className="greek-text">
              η
            </span>
          </div>,
          <div key="dummy">
            singular{" "}
            <span key="dummy" className="greek-text">
              ᾱ
            </span>
          </div>,
          <div key="dummy">
            plural{" "}
            <span key="dummy" className="greek-text">
              η
            </span>
          </div>,
          <div key="dummy">
            plural{" "}
            <span key="dummy" className="greek-text">
              ᾱ
            </span>
          </div>,
        ]}
        rows={[
          [
            "Nominative",
            <span key="dummy" className="greek-text">
              -η
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱ
            </span>,
            <span key="dummy" className="greek-text">
              -αι
            </span>,
            <span key="dummy" className="greek-text">
              -αι
            </span>,
          ],
          [
            "Genitive",
            <span key="dummy" className="greek-text">
              -ης
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱς
            </span>,
            <span key="dummy" className="greek-text">
              -ῶν
            </span>,
            <span key="dummy" className="greek-text">
              -ῶν
            </span>,
          ],
          [
            "Dative",
            <span key="dummy" className="greek-text">
              -ῃ
            </span>,
            <span key="dummy" className="greek-text">
              -ᾳ
            </span>,
            <span key="dummy" className="greek-text">
              -αις
            </span>,
            <span key="dummy" className="greek-text">
              -αις
            </span>,
          ],
          [
            "Accusative",
            <span key="dummy" className="greek-text">
              -ην
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱν
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱς
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱς
            </span>,
          ],
          [
            "Vocative",
            <span key="dummy" className="greek-text">
              -η
            </span>,
            <span key="dummy" className="greek-text">
              -ᾱ
            </span>,
            <span key="dummy" className="greek-text">
              -αι
            </span>,
            <span key="dummy" className="greek-text">
              -αι
            </span>,
          ],
        ]}
      />

      <p>
        Note that the <span className="greek-text">α</span> in <span className="greek-text">-ᾳ</span> is actually a long
        vowel. Since alpha with iota subscript is always long, we don&#39;t write it as
        <span className="greek-text">ᾱ</span>,
      </p>
    </>
  );
}
