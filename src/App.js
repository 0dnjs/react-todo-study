import { Reset } from "styled-reset";
import MainLayout from "./components/MainLayout/MainLayout";
import { Global } from "@emotion/react"
import * as S from "./styles/Common";
import { Route, Routes } from "react-router-dom";
import Today from "./pages/Today/Today";
import { useState } from "react";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes>
          {/* 경로에는 대문자쓰면 안됨 */}
          <Route path="/today" element={ <Today /> } /> 
          <Route path="upcoming" />
          <Route path="calendar" />
          <Route path="stickywall" />
        </Routes>

      </MainLayout>
    </>
  );
}

export default App;
