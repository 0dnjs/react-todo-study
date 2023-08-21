import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
<<<<<<< HEAD
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/SidebarStore';

function RightSubSidebar({ children }) {
    const [ isrightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    return (
        <div css={S.SLayout(isrightSubSidebar)}>
            { children }
=======

function RightSubSidebar({ children }) {
    return (
        <div css={S.SLayout}>
            {children}
>>>>>>> parent of 44d5f37 (feat: today 작성중)
        </div>
    );
}

export default RightSubSidebar;