import React,{Component} from 'react';
import GlobalContext from './views/context';

class App extends Component{
  render(){
    return <GlobalContext.Provider value={{
      lgg:"zhenshuai"
    }}>
      <div>
        {this.props.children}
      </div>
    </GlobalContext.Provider>
  }
}

export default App
