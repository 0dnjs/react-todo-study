import { css } from "@emotion/react";

export const SLayout = (isShow) => {
    return css`
<<<<<<< HEAD
    position: absolute;
    transition: all 0.8s ease;
    right: 20px;
    z-index: -1;
    border-radius: 10px;
    width: ${isShow ? "300px" : "0px"};
    height: 560px;
    background-color: #eee;
=======
        position: absolute;
        transition: all 0.8s ease;
        right: 20px;
        z-index: -1;
        border-radius: 10px;
        width: 300px;
        height: 560px;
        background-color: #eee;
>>>>>>> parent of 44d5f37 (feat: today 작성중)
    `;
};