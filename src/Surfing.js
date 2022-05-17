/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Surfing = (props) => {
  const styles = {
    card: css`
      border: 1px solid black;
      max-width: 300px;
      width: 100%;
      border-radius: 10px;
      & h3 {
        color: blue;
        font-size: 14px;
        padding-left: 15px;
        letter-spacing: 2.4px;
      }
      & h2 {
        font-size: 24px;
        padding-left: 15px;
      }
      & p {
        padding-left: 15px;
        padding-right: 15px;
        color: grey;
      }
      & img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    `,
  };
  return (
    <div css={styles.card}>
      <img src={props.image}></img>
      <h3>{props.category}</h3>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};
export default Surfing;
