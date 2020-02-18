import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <pre>{`
        ┌───────────────────────────────────────────────┐
        │                         ? ChatXterm 12.4 ?                         │
        │           (SSH client, X-server and networking tools)              │
        │                                                                    │
        │ >  SSH session to root@10.80.9.3                                   │
        │    ? SSH compression :                                             │
        │    ? SSH-browser :                                                 │
        │    ? X11-forwarding :  (remote display is forwarded through SSH)   │
        │    ? DISPLAY :  (automatically set on remote server)               │
        │                                                                    │
        │ >  For more info, ctrl+click on help or visit our website          │
        └───────────────────────────────────────────────┘
          `}</pre>
        </div>
        <div>
          <p>
            Welcome to Ubuntu 16.04.6 LTS (GNU/Linux 4.4.0-97-generic x86_64)
          </p>
          <br />
          <p>* Documentation: https://help.ubuntu.com</p>
          <p>* Management: https://landscape.canonical.com</p>
          <p>* Support: https://ubuntu.com/advantage</p>
          <br />
          <p>198 packages can be updated.</p>
          <p>128 updates are security updates.</p>
          <br />
          <p>New release '18.04.3 LTS' available.</p>
          <p>Run 'do-release-upgrade' to upgrade to it.</p>
          <br />
          <p>
            <span style={{ color: "aqua" }}>Last login:</span> Mon Feb 10
            11:20:52 2020 from{" "}
            <span id="myip" style={{ color: "darkviolet" }}></span>
          </p>
          <br />
        </div>
        <div>
          <ul id="messages"></ul>
        </div>
        <div>
          <form action="/" method="POST" id="chatForm">
            <input
              id="txt"
              autocomplete="off"
              autofocus="on"
              placeholder="type your message here..."
            />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
