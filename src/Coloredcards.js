/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaTruck } from "react-icons/fa";
const Coloredcards = (props) => {
  const styles = {
    cardcontainer: css`
      display: flex;
      background-color: ${props.backgroundcolor};
      max-width: 260px;
      border-radius: 10px;
      display: grid;
      padding: 20px;
      color: white;
      & .iconcontainer {
        font-size: 36px;
        margin-left: auto;
      }
      & h2 {
        padding-top: 20px;
      }
      & p {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    `,
  };
  console.log(FaTruck);
  return (
    <div css={styles.cardcontainer}>
      <div className="iconcontainer">
        <FaTruck />
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Coloredcards;
