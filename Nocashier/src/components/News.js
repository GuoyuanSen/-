import React,{Component} from 'react';
import "../assets/css/App.css"
import imus from "../assets/images/logo.svg"
        class News extends Component{

            constructor(props){
                super(props)


                this.state={
                    msg: "牛逼啊",
                    list :[111111,2222222],
                    list2 : [<h2 key="1">12312312</h2>,<h3 key="2">ewrwerwer</h3>],
                    list3 : [{title:"xinwen 1"},{title:"xinwen 2"},{title:"xinwen 3"}]
                }
            }


            render(){

                    var isNB = this.state.list.map(function(value,key){
                    return <li key={key}>{value}</li>
                    })
                return(
                    <div>

                    <h3>{this.state.msg}</h3>
                    <img src={imus}></img>
                    <hr/>
                    <img className="news" src={require('../assets/images/logo.svg')}></img>
                    <hr/>
                    <img src="http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579855769&t=5fcd609941f1dc210afa16d1c35e3885"></img>
                    <hr/>

                    {this.state.list2}
                    <hr/>
                    {isNB}
                    <hr/>
                    <ul>
                        {
                            this.state.list3.map(function(value,key){
                            return ( <li key={key}>{value.title}</li>)
                            })
                        }
                    </ul>
                    </div>
                )
            }

           
        }

     export default News