import * as React from "react";
import styles from "./project.module.css";
//mui
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

//imgage
import enjoyTrip from "../image/enjoyTrip.png";
import weffy from "../image/weffy.png";
import happyHome from "../image/happyHome.png";
import nyam from "../image/nyam.png";

export default function Project() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}
    >
      <TimelineItem className={styles["timelineItem"]}>
        <TimelineOppositeContent>
          <img src={weffy} alt="weffy" className={styles["image"]} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <Paper elevation={3} className={styles["detailContainer"]}>
              <div className={styles["pjtTitle"]}>
                💻 WEFFY
                <Button
                  variant="contained"
                  className={styles["gitBtn"]}
                  onClick={() =>
                    window.open("https://github.com/thisiseunjin/WEFFY")
                  }
                >
                  readme.md
                </Button>
              </div>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={enjoyTrip} alt="enjoyTrip" className={styles["image"]} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <Paper elevation={3} className={styles["detailContainer"]}>
              <div className={styles["pjtTitle"]}>
                ✈️ Enjoy Trip
                <Button
                  variant="contained"
                  className={styles["gitBtn"]}
                  onClick={() =>
                    window.open("https://github.com/thisiseunjin/enjoytrip")
                  }
                >
                  readme.md
                </Button>
              </div>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
      {}
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={happyHome} alt="happyHome" className={styles["image"]} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <Paper elevation={3} className={styles["detailContainer"]}>
              <div className={styles["pjtTitle"]}>
                🏠 소통하는 주거환경
                <Button
                  variant="contained"
                  className={styles["gitBtn"]}
                  onClick={() =>
                    window.open("https://github.com/thisiseunjin/happyHome")
                  }
                >
                  readme.md
                </Button>
              </div>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
      {}
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={nyam} alt="nyam" className={styles["image"]} />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <Paper elevation={3} className={styles["detailContainer"]}>
              <div className={styles["pjtTitle"]}>
                🥘 뭐먹냠 혼자먹냠
                <Button
                  variant="contained"
                  className={styles["gitBtn"]}
                  onClick={() =>
                    window.open("https://github.com/thisiseunjin/nyamProject")
                  }
                >
                  readme.md
                </Button>
              </div>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
