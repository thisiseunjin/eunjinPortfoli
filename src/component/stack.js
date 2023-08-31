import * as React from "react";
import styles from "./stack.module.css";

//mui
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Stack() {
  return (
    <div className={styles["container"]}>
      <div className={styles["aboutMeBox"]}>
        <Grid container spacing={2} className={styles["items"]}>
          <Grid item xs={12} sm={6} className={styles["item"]}>
            <Paper sx={{ p: 2 }} className={styles["paper"]}>
              <div className={styles["title"]}>PROFILE</div>
              <div className={styles["text"]}>
                영남대학교 컴퓨터공학과 졸업 (2018.03 ~ 2023.02)
              </div>
              <div className={styles["text"]}>
                대구 상원 고등학교 졸업 (2015.03 ~ 2018.02)
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={styles["item"]}>
            <Paper sx={{ p: 2 }} className={styles["paper"]}>
              <div className={styles["title"]}>EDUCATION</div>
              <div className={styles["text"]}>
                삼성 청년 SW아카데미 9기 (2023.01 ~ )
              </div>
              <div className={styles["text"]}>
                삼성SDS 2022 하계 대학생 알고리즘 특강 (2022.07.18 ~ 2022.07.29)
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={styles["item"]}>
            <Paper sx={{ p: 2 }} className={styles["paper"]}>
              <div className={styles["title"]}>CONTACT</div>
              <div className={styles["text"]}>
                {/* <span style={{ backgroundColor: "red" }}> ✉ Email </span> */}
                <span> hara0822@naver.com</span>
              </div>
              <div className={styles["text"]}>
                {/* <span style={{ backgroundColor: "red" }}> Github </span> */}
                <span> https://github.com/thisiseunjin</span>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={styles["item"]}>
            <Paper sx={{ p: 2 }} className={styles["paper"]}>
              <div className={styles["title"]}>AWARDS</div>
              <div className={styles["text"]}>
                삼성 청년 SW 아카데미 1학기 프로젝트 우수상
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className={styles["item"]}>
            <Paper sx={{ p: 2 }} className={styles["paper"]}>
              <div className={styles["title"]}>CERTIFICATE</div>
              <div className={styles["text"]}>정보처리기사</div>
              <div className={styles["text"]}>SQLD</div>
              <div className={styles["text"]}>OPIC IH</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div>
        <div className={styles["container"]}>
          <div className={styles["stackHeader"]}>🛠 STACKS</div>
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6} className={styles["stackContainer"]}>
                <Paper className={styles["paper"]}>
                  <div className={styles["stackName"]}>WEB BACK-END</div>
                  <div className={styles["stackText"]}>JAVA</div>
                  <div className={styles["stackText"]}>Spring Boot</div>
                  <div className={styles["stackText"]}>Firebase</div>
                  <div className={styles["stackText"]}>MySql</div>
                </Paper>
              </Grid>
              <Grid item xs={6} className={styles["stackContainer"]}>
                <Paper className={styles["paper"]}>
                  <div className={styles["stackName"]}>WEB FRONT-END</div>
                  <div className={styles["stackText"]}>React</div>
                  <div className={styles["stackText"]}>CSS</div>
                  <div className={styles["stackText"]}>HTML</div>
                </Paper>
              </Grid>
              <Grid item xs={6} className={styles["stackContainer"]}>
                <Paper className={styles["paper"]}>
                  <div className={styles["stackName"]}>MOBILE APP</div>
                  <div className={styles["stackText"]}>Andriod Studio</div>
                </Paper>
              </Grid>
              <Grid item xs={6} className={styles["stackContainer"]}>
                <Paper className={styles["paper"]}>
                  <div className={styles["stackName"]}>TEAM COLLABORATION</div>
                  <div className={styles["stackText"]}>Git</div>
                  <div className={styles["stackText"]}>Notion</div>
                  <div className={styles["stackText"]}>Jira</div>
                </Paper>
              </Grid>
            </Grid>
            {/* s
            <Grid
              container
              spacing={5}
              columns={18}
              className={styles["stackContainer"]}
            ></Grid> */}
          </div>
        </div>
      </div>
    </div>
  );
}
