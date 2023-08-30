import * as React from "react";
import styles from "./stack.module.css";

//mui
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Stack() {
  return (
    <div className={styles["container"]}>
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
