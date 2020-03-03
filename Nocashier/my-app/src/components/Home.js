import React,{Component} from 'react';
     class Home extends Component{

        constructor(props){
            super(props)

            this.state ={
                name:"牛逼",
                niHome:{
                    names:"你真是俗爱"
                }
            }
        }

        render(){
            return(
                <div>
                    <h2> 你好</h2>   
                   <h2 title={this.state.name}> 你sdfsdf好---{this.state.name}</h2>   
                   <h1> 你好啊---{this.state.niHome.names}</h1>   
                   <h1 style={{"color":"red"}}> 你好啊---行内样式</h1>   
                </div>
                ) 
        }
     }
export default Home