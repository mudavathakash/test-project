import React from 'react';
import ChatWindow from './components/ChatWindow';
import SideNav from './components/SideNav';
import WorkflowForm from './components/WorkflowForm';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="main">
        <SideNav />
        <ChatWindow />
        <WorkflowForm />
      </div>
    </div>
  );
}
