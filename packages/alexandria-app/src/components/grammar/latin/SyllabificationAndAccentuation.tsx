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

export const TITLE = "Syllabification & Accentuation";

export default function SyllabificationAndAccentuation(): JSX.Element {
  return (
    <>
      <h2>{TITLE}</h2>
      <h3>Syllabification</h3>
      <p>
        Every Latin word has as many syllables as it has vowels or diphthongs. In dividing a word into syllables, a
        consonant after a vowel goes with the following syllable:
      </p>
      <p>mu/tam; ta/men</p>
      <p>
        When a vowel or diphthong is followed by two or more consonants, the first consonant goes with the first
        syllable, the remainder with the next syllable:
      </p>
      <p>for/tU/na; ad/lo/que/rer</p>
      <h3>Accentuation</h3>
      Every Latin word has one syllable which is slightly stressed over the others.
      <ul>
        <li>ultima = the last syllable</li>
        <li>penult = the second syllable from the end</li>
        <li>antepenult = third syllable from the end</li>
      </ul>
      <p>In words of two syllables, the penult receives the accent:</p>
      <p>
        In words of more than two syllables, the penult receives the accent if it is long; if the penult is short, the
        accent is placed on the antepenult.
      </p>
    </>
  );
}
