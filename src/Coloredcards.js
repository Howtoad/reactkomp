/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaTruck } from "react-icons/fa";
const Coloredcards = (props) => {
  const styles = {
    cardcontainer: css`
      display: flex;
      background-color: ${props.backgroundcolor};
      max-width: 260px;
      & .iconcontainer {
        font-size: 36px;
      }
    `,
  };
  return (
    <div css={styles.cardcontainer}>
      <div className="iconcontainer">{props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Coloredcards;
