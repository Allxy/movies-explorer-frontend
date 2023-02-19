import classNames from "classnames";
import Flex from "../../shared/ui/Flex";
import styles from "./Timeline.module.css";

function Timeline({ children, className }) {
  return (
    <Flex className={classNames(styles.timeline, className)}>{children}</Flex>
  );
}

Timeline.Section = ({ size, children, className, times }) => {
  return (
    <div style={{ flex: size }}>
      <div className={classNames(styles.timeline__section, className)}>
        {size} {times}
      </div>
      <div className={styles.timeline__label}>{children}</div>
    </div>
  );
};

export default Timeline;
