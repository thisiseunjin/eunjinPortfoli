import * as React from "react";
import styles from "./stack.module.css";

//mui
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Stack() {
  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["stackHeader"]}>🛠 STACKS</div>
        <div>
          <Grid
            container
            spacing={5}
            columns={18}
            className={styles["stackContainer"]}
          >
            <Grid item xs={4}>
              <Paper className={styles["paper"]}>
                <div className={styles["stackName"]}>WEB BACK-END</div>
                <div className={styles["stackText"]}>JAVA</div>
                <div className={styles["stackText"]}>Spring Boot</div>
                <div className={styles["stackText"]}>Firebase</div>
                <div className={styles["stackText"]}>MySql</div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={styles["paper"]}>
                <div className={styles["stackName"]}>WEB FRONT-END</div>
                <div className={styles["stackText"]}>React</div>
                <div className={styles["stackText"]}>CSS</div>
                <div className={styles["stackText"]}>HTML</div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={styles["paper"]}>
                <div className={styles["stackName"]}>MOBILE APP</div>
                <div className={styles["stackText"]}>Andriod Studio</div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={styles["paper"]}>
                <div className={styles["stackName"]}>TEAM COLLABORATION</div>
                <div className={styles["stackText"]}>Git</div>
                <div className={styles["stackText"]}>Notion</div>
                <div className={styles["stackText"]}>Jira</div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={styles["leftPaper"]}>
                <div className={styles["projectName"]}>뭐먹냠 혼자 먹냠</div>
                <div>
                  {" "}
                  1인가구의 최소 주문 금액과 배달팁에 대한 부담을 덜어주기 위한
                  <br />
                  함께 주문 할 수 있는 어플리케이션
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={styles["rightPaper"]}>
                <div className={styles["projectName"]}>소통하는 주거 환경</div>
                <div> 층간 소음을 스스로 줄이도록 유도하는 어플리케이션</div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={styles["leftPaper"]}>
                <div className={styles["projectName"]}>Enjoy Trip</div>
                <div> 여행 계획 세우는 것을 쉽게 만들어주는 웹 사이트</div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={styles["rightPaper"]}>
                <div className={styles["projectName"]}>WEFFY</div>
                <div> SSAFY에 특화된 화상 미팅 서비스</div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
