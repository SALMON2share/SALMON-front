import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './general.css';
import Login from "./components/login/Login";
import AddLink from "./components/addLink/AddLink";
import Settings from "./components/settings/Settings";
import ReferencesDashboard from "./components/dashboardTest/ReferencesDashboard";
import Home from "./components/home/Home";
import Board from "./components/board/Board";
import QrScanner from "./components/qrScanner/QrScanner";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Register from "./components/register/Register";
import PDFCollections from "./components/Collections/Collections";
import DemoCards from "./components/DemoCards/DemoCards";
import PdfAnnotatorController from "./components/PdfAnnotator/PdfAnnotatorController";
import YouTubeApi from "./components/YoutubeAPIV3/YT_API_CORE"
import MainSidbar from "./components/MainSidbar/MainSidbar";


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="sans-serif">
          <Route exact path="/" component={Home}/>
          {/*<Route path="/ForgotPassword" component={ForgotPassword}/>*/}
          {/*<Route path="/board" component={ReferencesDashboard}/>*/}
          {/*<Route path="/board?id=:id" component={ReferencesDashboard}/>*/}
          {/*<Route path="/boards" component={Board}/>*/}
          <Route path="/login" component={Login}/>
          {/*<Route path="/AddLink" component={AddLink}/>*/}
          {/*<Route path="/settings" component={Settings}/>*/}
          <Route path="/register" component={Register}/>
          <Route path="/youTubeApi" component={YouTubeApi}/>
          <Route path="/Qr-Scanner" component={QrScanner}/>
          <Route path="/PdfAnnotatorController" component={PdfAnnotatorController}/>
          <Route path="/Collections" component={PDFCollections}/>
          <Route path="/DemoCards" component={DemoCards}/>
          <Route path="/MainSidbar" component={MainSidbar}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;