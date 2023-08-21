import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
<<<<<<< HEAD:src/components/MainContainer/MainContainer.jsx
import { isSidebarShowState, isRightSubSidebarState } from '../../store/SidebarStore';
=======
import { isSidebarShowState } from '../../store/sidebarStore';
>>>>>>> parent of 44d5f37 (feat: today 작성중):src/components/MainConatiner/MainContainer.jsx
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
<<<<<<< HEAD:src/components/MainContainer/MainContainer.jsx
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    useEffect(()=> {
        return () => {
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            { children }
=======

    return (
        <div css={S.SContainer(isSidebarShow)}>
            {children}
>>>>>>> parent of 44d5f37 (feat: today 작성중):src/components/MainConatiner/MainContainer.jsx
        </div>
    );
}

export default MainContainer;