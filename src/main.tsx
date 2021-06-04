import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sample } from './components/sample';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello, React + TypeScript Starter Kit👋</h1>
          <Sample/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));