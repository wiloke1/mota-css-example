import { css } from "mota-css";

export const styles = css`
  .container {
    padding: 30px;
    background-color: #eee;
    &:hover {
      .text {
        color: blue;
      }
    }
  }
  .title {
    font-size: 50px;
  }
  .text {
    font-size: 15px;
    color: red;
  }
`;
