import * as React from "react";
import styles from "./introduce.module.css";
import eunjin from "../image/eunjin.jpg";

function Introduce() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Back-End Developer, 서은진입니다.</h1>
      </div>
      <div className={styles["Box"]}>
        <img src={eunjin} alt="" className={styles["photo"]} />

        <div className={styles["introContainer"]}>
          <h2 className={styles["infoHeader"]}>
            실질적인 가치 창출에 집중하는 개발자
          </h2>
          <div className={styles["explainHeader"]}>
            🌟 실질적인 가치를 창출하는 솔루션에 집중하는 개발자입니다.
          </div>
          <div className={styles["explain"]}>
            학부 시절부터 시작해 사용자에게 직접적인 도움이 되는 프로그램 개발을
            진행하였으며, <br />
            이를 통해 사용자 중심의 IT 솔루션 제공에 관한 역량을 쌓아왔습니다.
          </div>
          <div className={styles["explainHeader"]}>
            🌟 도전을 즐기며 기술 습득하는 개발자입니다.
          </div>
          <div className={styles["explain"]}>
            프로젝트에서 새로운 포지션, 기술에 두려워하지 않고 <br />
            기술 스택을 넓혀가는 개발자 입니다.
          </div>
          <div className={styles["explainHeader"]}>
            🌟 리더십과 커뮤니케이션 능력을 가진 개발자입니다.
          </div>
          <div className={styles["explain"]}>
            다양한 프로젝트를 진행하며 주로 리더의 역할을 수행해오며, <br />이
            과정에서 강화된 리더십과 뛰어난 커뮤니케이션 능력을 바탕으로
            프로젝트 목표를 효과적으로 달성해왔습니다.
          </div>
        </div>
      </div>
      <div className={styles["aboutMe"]}>
        <h2 className={styles["aboutMeHeader"]}>ABOUT ME</h2>
      </div>
    </div>
  );
}
export default Introduce;
