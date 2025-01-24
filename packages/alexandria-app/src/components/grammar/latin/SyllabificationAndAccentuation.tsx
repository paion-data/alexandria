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
import StandingCardList from "../../list/StandingCardList";

import Ultima from "./ultima.svg";
import Penult from "./penult.svg";
import Antepenult from "./antepenult.svg";

export const TITLE = "Syllabification & Accentuation";

export default function SyllabificationAndAccentuation(): JSX.Element {
  return (
    <>
      <h2>{TITLE}</h2>
      <h3>Syllabification</h3>
      <p>In dividing a word into syllables, a consonant after a vowel goes with the following syllable:</p>
      <p>mū/tam; ta/men</p>
      <p>
        When a vowel or diphthong is followed by two or more consonants, the first consonant goes with the first
        syllable, the remainder with the next syllable:
      </p>
      <p>for/tū/na; ad/lo/que/rer</p>
      <h3>Accentuation</h3>

      <p>Every Latin word has one syllable which is slightly stressed over the others.</p>

      <StandingCardList
        items={[
          {
            icon: <img style={{ width: "70px" }} src={Ultima} alt="Ultima" />,
            title: "Ultima",
            desc: "the last syllable",
          },
          {
            icon: <img style={{ width: "70px" }} src={Penult} alt="Penult" />,
            title: "Penult",
            desc: "the second syllable from the end",
          },
          {
            icon: <img style={{ width: "70px" }} src={Antepenult} alt="Antepenult" />,
            title: "Antepenult",
            desc: "third syllable from the end",
          },
        ]}
      />
      <p>The only two syllables in a Latin word which may receive accent are the penult and the antepenult.</p>
      <p>In words of two syllables, the penult receives the accent: múltās, géntēs, véctus</p>
      <p>
        In words of more than two syllables, the penult receives the accent if it is long; if the penult is short, the
        accent is placed on the antepenult. A syllable can be long in one of two ways:
      </p>
      <p>
        1. <i>Length by nature</i>: If the syllable contains a long vowel or a diphthong, it is said to be long{" "}
        <i>by nature</i>
      </p>
      <p>
        2. <i>Length by position</i>: If the syllable contains a vowel which is followed by 2 consonants, it is said to
        be long <i>by position</i>. <i>x</i> (=ks), by the way, is a double consonant
      </p>
    </>
  );
}
