import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          Hello, React + TypeScript Starter Kit👋
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));