import classNames from "classnames";
import Flex from "../../shared/ui/Flex";
import Link from "../../shared/ui/Link";
import Heading from "../../shared/ui/Heading";
import styles from "./Links.module.css";

function Links({ className, title, titleComponent = "h3", children }) {
  return (
    <section className={classNames(className, styles.links)}>
      {title && (
        <Heading className={styles.links__title} component={titleComponent}>
          {title}
        </Heading>
      )}
      <Flex direction="column" component="ul" className={styles.links__list}>{children}</Flex>
    </section>
  );
}

Links.Link = ({ children, className, ...rest }) => {
  return (
    <li className={classNames(styles.link, className)}>
      <Link className={styles.link__a} {...rest}>
        {children}
        <span className={styles.links__arrow}>&#8599;</span>
      </Link>
    </li>
  );
};

export default Links;