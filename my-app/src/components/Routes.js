import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ChainInfo from "./pages/ChainInfo";
import FakeBayc from "./pages/FakeBayc";
import FakeBaycTokenInfo from "./pages/FakeBaycTokenInfo";
import FakeMeebits from "./pages/FakeMeebits";
import FakeNefturians from "./pages/FakeNefturians"
import FakeNefturiansUserInfo from "./pages/FakeNefturiansUserInfo";
import NotFound from "./pages/NotFound";
import WrongNetwork from "./pages/WrongNetwork";

function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chain-info" element={<ChainInfo />} />
        <Route path="/fakeBayc" element={<FakeBayc />} />
        <Route path="/fakeBayc/:tokenId" element={<FakeBaycTokenInfo />} />
        <Route path="/fakeMeebits" element={<FakeMeebits />} />
        <Route path="/fakeNefturians" element={<FakeNefturians />} />
        <Route path="/fakeNefturians/:userAdress" element={<FakeNefturiansUserInfo />} />
        <Route path="/wrongNetwork" element={<WrongNetwork />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;