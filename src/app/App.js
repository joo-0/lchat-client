import React, { Component } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

// const socket = socketio.connect('http://localhost:8000/');

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      ip: "",
      message: [],
      endpoint: "http://127.0.0.1:8000"
    };
  }

  componentDidMount() {
    const { endpoint, message } = this.state;
    const socket = socketIOClient(endpoint);
    // socket.on("FromAPI", data => this.setState({ response: data }));
    socket.on("my_message", data => {
      this.setState({
        message: message.concat({ class: "my", data: data })
      });
      // $('#messages').append($('<li class="my">').html(msg));
      // $(document).scrollTop($(document).height());
    });
    socket.on("chat_message", data => {
      this.setState({
        message: message.concat({ class: "else", data: data })
      });
      // $('#messages').append($('<li>').html(msg));
      // $(document).scrollTop($(document).height());
    });
    socket.on("is_online", data => {
      this.setState({
        message: message.concat({ class: "online", data: data })
      });
      // $('#messages').append($('<li class="online">').html(msg));
      // $(document).scrollTop($(document).height());
    });
    socket.on("is_offline", data => {
      this.setState({
        message: message.concat({ class: "offline", data: data })
      });
      // $('#messages').append($('<li class="offline">').html(msg));
      // $(document).scrollTop($(document).height());
    });
    socket.on("my_ip", data => {
      // $('#myip').text(ip);
      this.setState({
        ip: data
      });
    });
    socket.on("username", msg => {
      socket.emit("username", this.username);
    });
  }

  render() {
    const { ip, message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <pre>{`
  ┌──────────────────────────────────────┐
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
  └──────────────────────────────────────┘
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
              <span id="myip" style={{ color: "darkviolet" }}>
                {ip}
              </span>
            </p>
            <br />
          </div>
          <div>
            {message}
            {/* <ul id="messages"></ul> */}
          </div>
          <div>
            <form action="/" method="POST" id="chatForm">
              <input
                id="txt"
                autoFocus="on"
                placeholder="type your message here..."
              />
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
