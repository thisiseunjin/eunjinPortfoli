import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./introduce.module.css";
import eunjin from "../eunjin.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Introduce() {
  return (
    <div>
      <div className={styles["header"]}>
        <h1>Back-End Developer, 서은진입니다.</h1>
      </div>
      <div className={styles["Box"]}>
        <img src={eunjin} className={styles["photo"]} />

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
      <div className={styles["aboutMeBox"]}>
        <Grid container spacing={1} className={styles["items"]}>
          <Grid item xs={12} sm={5} className={styles["item"]}>
            <div className={styles["title"]}>PROFILE</div>
            <div className={styles["text"]}>
              영남대학교 컴퓨터공학과 졸업 (2018.03 ~ 2023.02)
            </div>
            <div className={styles["text"]}>
              대구 상원 고등학교 졸업 (2015.03 ~ 2018.02)
            </div>
          </Grid>
          <Grid item xs={12} sm={5} className={styles["item"]}>
            <div className={styles["title"]}>EDUCATION</div>
            <div className={styles["text"]}>
              삼성 청년 SW아카데미 9기 (2023.01 ~ )
            </div>
            <div className={styles["text"]}>
              삼성SDS 2022 하계 대학생 알고리즘 특강 (2022.07.18 ~ 2022.07.29)
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={styles["item"]}>
            <div className={styles["title"]}>CONTACT</div>
            <div className={styles["text"]}>
              {/* <span style={{ backgroundColor: "red" }}> ✉ Email </span> */}
              <span> hara0822@naver.com</span>
            </div>
            <div className={styles["text"]}>
              {/* <span style={{ backgroundColor: "red" }}> Github </span> */}
              <span> https://github.com/thisiseunjin</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={styles["item"]}>
            <div className={styles["title"]}>AWARDS</div>
            <div className={styles["text"]}>
              삼성 청년 SW 아카데미 1학기 프로젝트 우수상
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={styles["item"]}>
            <div className={styles["title"]}>CERTIFICATE</div>
            <div className={styles["text"]}>정보처리기사</div>
            <div className={styles["text"]}>SQLD</div>
            <div className={styles["text"]}>OPIC IH</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Introduce;
