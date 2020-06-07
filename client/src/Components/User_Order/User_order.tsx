import React,{Component} from 'react';

class UserOrder extends Component{
  constructor(props:any) {
    super(props);
    this.state = {
      user_id: '',
      user_password: '',
      onclick: false,
    };
  }
  render(){
    return (
      <div className="Container">
        <div>
          <div className="Support"></div>
          <h1 className="Title">Call me daddy!!</h1>
        </div>
      </div>
    );
}
}
export default UserOrder;