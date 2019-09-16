import React from 'react'
import GlobalContext from '../context'

class Home extends React.Component{
    render(){
        return <GlobalContext.Consumer>
            {
                (context)=>{
                    return <div>
                        Home {context.lgg}
                    </div>        
                }
            }
        </GlobalContext.Consumer>
    }
}

export default Home;