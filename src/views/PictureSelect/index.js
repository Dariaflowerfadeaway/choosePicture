import React from 'react'
import Pictures from '../Picture'
import Css from './index.module.scss'
class PictureSelect extends React.Component{ 
    state={
        pictures:Pictures,
        count:0,
        checked:[false,false,false],
        checkall:false
    }
    render(){
        return <div>
            <div className={Css.div}>
                <input type="checkbox" className={Css.input+' '+Css.flo} onChange={()=>this.handleClickInput()} checked={this.state.checkall}/>
                <p className={Css.p}>已选中{this.state.checked.filter((item)=>item===true).length}个文件</p>
            </div>
            {
                // console.log(this.state)
                this.state.pictures.pictures.map(item=>
                    <div className={Css.picture} key={item.id}>
                        <input type="checkbox" className={Css.input+' '+Css.pos} onChange={()=>this.handleClick(item.id)} checked={this.state.checked[item.id-1]}/>
                        <img src={item.url} />
                    </div>
                    )
            }
        </div>
    }
    handleClick(id){
        console.log(id)
        var thische = this.state.checked[id-1]
        this.setState({
            newchecked:this.state.checked.splice(id-1,1,!thische),
            checked:this.state.checked
           })
        console.log(this.state.checked)
        if(this.state.checked.filter((item)=>item===true).length===3){
            this.setState({
                checkall:true
            })
        }else{
            this.setState({
                checkall:false
            })
        }
    } 
    handleClickInput(){
        this.setState({
            checkall:!this.state.checkall,
        })
        console.log(this.state.checkall)
        if(this.state.checkall){
            this.setState({
                checked:[false,false,false]
            })
        }else{
            this.setState({
                checked:[true,true,true]
            })
        }
    }
    findTrue(item,index){
        item=true
    }
}

export default PictureSelect;