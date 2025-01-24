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

import "./Modal.css";
import { selectCardModalShow, setCardModalShow, useAppDispatch, useAppSelector } from "../../../../../alexandria-redux";

interface ModalProps {
  modalContent: JSX.Element;
}

export default function Modal(props: ModalProps): JSX.Element {
  const cardModalShow = useAppSelector(selectCardModalShow);

  const dispatch = useAppDispatch();

  return (
    <div className="grammar">
      <div className="cards">
        <div className={cardModalShow ? "card-modal active" : "card-modal"}>
          <div
            className={cardModalShow ? "overlay active" : "overlay"}
            onClick={() => dispatch(setCardModalShow(false))}
          ></div>
          <div className={cardModalShow ? "card-modal-content active" : "card-modal-content"}>{props.modalContent}</div>
        </div>
      </div>
    </div>
  );
}
