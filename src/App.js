import React,{Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'
class App extends Component {

  id = 2
  state ={
    information:[
      {id:0,name:'이인훈',phone:'010-3951-7721'},
      {id:1,name:'지상훈',phone:'010-8373-2634'}
    ]
  }


  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information:information.concat({id:this.id++,...data})
    })
    console.log(data);
  }
  render(){
    const {information}= this.state;
    return(
    <div>
      <PhoneForm 
        onCreate ={this.handleCreate}
      />
      <PhoneInfoList data={this.state.information}/>
      {JSON.stringify(information)}
    </div>
    );
  }
}
export default App;
