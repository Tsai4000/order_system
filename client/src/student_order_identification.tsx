import Input from './Components/Login/input';
import React,{Component} from 'react';
import Button from './Components/Login/button'
import './student_order_identification.css'
import './Components/button.css';

interface IProps {
}

interface IState {
    total_price?: Number;
    special_needs?: String;
    onclick?: Boolean;
    price?: Number;
}

class Student_order_identification extends React.Component<IProps,IState> {
    constructor(props:any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSpecial_needsChange = this.handleSpecial_needsChange.bind(this);
        this.state={
            special_needs: '',
            onclick: false,
            total_price: 0,
            price: 80,
            //date: new Date(),
        }
    }

    handleClick = (e:any) => {
        this.setState({onclick: true});
    }

    handleSpecial_needsChange(e:any) {
        this.setState({special_needs: e.target.value});
    }

    // // handleTotalPrice = (prevState:Number,e:Number) => {
    // //     this.setState({total_price: prevState.total_price + e.})
    // }

    static defaultProps = {date:{}};

    render(){
        //const {total_price} = this.props;
        //const {date} = this.props;
        const TEN_MINUTES = 10 * 60 * 1000;
        //const timeNow = new Date().toLocaleTimeString();
        const timestamp = Date.now();
        const TEN_AFTER = timestamp + TEN_MINUTES;
        const TWENTY_AFTER = timestamp + 2*TEN_MINUTES;
        const THIRTY_AFTER = timestamp + 3*TEN_MINUTES;
        const FOURTY_AFTER = timestamp + 4*TEN_MINUTES;
        const timeNow = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
        const timeTEN_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(TEN_AFTER);
        const timeTWENTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(TWENTY_AFTER);
        const timeTHIRTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(THIRTY_AFTER);
        const timeFOURTY_AFTER = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(FOURTY_AFTER);

        return(
            <div className="Container">
                <h1>s1051318 Strawberry</h1>
                <div className="TimeNow">
                    <h3>{timeNow}</h3>
                </div>
                <div>
                    <h3>預定取餐時間：</h3>
                </div>
                <div className="PickTime">
                    <form>
                        <select name="TimeList">
                        　<option value="TenAfter">{timeTEN_AFTER}</option>
                        　<option value="TwentyAfter">{timeTWENTY_AFTER}</option>
                        　<option value="ThirtyAfter">{timeTHIRTY_AFTER}</option>
                        　<option value="FourtyAfter">{timeFOURTY_AFTER}</option>
                        </select>
                    </form>
                </div>
                <div className="Orders">
                    <h3>訂餐品項：</h3>
                    <p>無骨雞排 ${this.state.price}</p>
                    <p>無骨雞排 ${this.state.price}</p>
                    <p>無骨雞排 ${this.state.price}</p>
                    <p>無骨雞排 ${this.state.price}</p>
                    <p>無骨雞排 ${this.state.price}</p>
                </div>
                <div>
                    <h3>特殊需求：</h3>
                    <Input 
                     text="e.g.少油,不要滷汁" onChange={this.handleSpecial_needsChange}
                    />
                </div>
                <div className="Price">
                    <h3>總金額：{this.state.total_price}</h3>
                </div>
                <div>
                    <Button name="BackButton" onClick={this.handleClick} text="返回"/>
                </div>
                <div className="ButtonContainer">
                    <Button name="IdentifyButton" onClick={this.handleClick} text="確認"/>
                </div>
            </div>
        );
    }
}

export default Student_order_identification;