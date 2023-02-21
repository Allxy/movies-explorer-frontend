import classNames from "classnames";
import { Flex, Heading, Link } from "../../shared/";
import styles from "./Links.module.css";

function Links({
  className,
  title,
  titleComponent = "h3",
  titleVariant,
  children,
}) {
  return (
    <section className={classNames(className, styles.links)}>
      {title && (
        <Heading
          className={styles.links__title}
          component={titleComponent}
          variant={titleVariant}
        >
          {title}
        </Heading>
      )}
      <Flex direction="column" component="ul" className={styles.links__list}>
        {children}
      </Flex>
    </section>
  );
}

Links.Link = ({ children, className, ...rest }) => {
  return (
    <li className={classNames(styles.link, className)}>
      <Link
        className={styles.link__a}
        rel="noreferrer"
        targer="_blank"
        {...rest}
      >
        {children}
        <span className={styles.links__arrow}>&#8599;</span>
      </Link>
    </li>
  );
};

export default Links;
