/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Outdoor = (props) => {
  const styles = {
    outdoor: css`
      max-width: 700px;
      grid-row: 1/2;
      height: 377px;
      padding: 20px;
      display: flex;
      background-color: white;
      border-radius: 10px;
      margin-left: 20px;
      & .outdoor__secondbox {
        padding-left: 20px;
      }
      & .secondboximg {
        height: 330px;
      }
      & .secondbox__tag {
        background-color: blue;
        max-width: 80px;
        text-align: center;
        color: white;
        border-radius: 10px;
        margin-left: auto;
      }
      & .secondbox__h2 {
        font-size: 36px;
        max-width: 270px;
      }
      & .secondbox__p {
        max-width: 240px;
        color: grey;
        padding-top: 20px;
      }
      & .secondbox__imgs {
        display: flex;
        justify-content: space-between;
        & img {
          padding-top: 60px;
          max-width: 70px;
          border-radius: 10px;
        }
      }
    `,
  };

  return (
    <div css={styles.outdoor}>
      <div className="outdoor__firstbbox">
        <img className="secondboximg" src={props.imagedefault}></img>
      </div>
      <div className="outdoor__secondbox">
        <p className="secondbox__tag">Leisure</p>

        <h2 className="secondbox__h2">{props.title}</h2>
        <p className="secondbox__p">{props.text}</p>
        <div className="secondbox__imgs">
          {props.smallimages.map((smallimg) => (
            <img src={smallimg}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
