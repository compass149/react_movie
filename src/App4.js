import React from "react";

class App4 extends React.Component{
    state = {
        count:0,
    };

    add = () => {
        //0.
        console.log('add');
        //1.
        //this.state.count=1;
        //2.
        //this.setState({count:1});
        //3.
        //this.setState({count:this.state.count+1});
        //4.
        this.setState(cnt1 => ({count: cnt1.count+1}));
    };
    minus = () => {
        //0.
        //console.log('minus');
        //1.
        //this.state.count=-1;
        //2.
        //this.setState({count:-1});
        //3.
        //this.setState({count:this.state.count-1});
        //4.
        this.setState(cnt1 => ({count: cnt1.count-1}));
    };

    componentDidMount()
    {
        console.log('2.did 마운트 -> 컴포넌트 렌더링');
    }

    componentDidUpdate()
    {
        console.log('3.did 업데이트 -> 화면 업데이트');
    }

    componentWillUnmount()
    {
        console.log('4.did 마운트 해제 -> 화면 떠날 때');
    }

    render(){
        console.log('1.화면 그리기 렌더링');
        return(
            <div>
                <h1>현재 카운터 :{this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>MINUS</button>
            </div>
        );
    }
}

export default App4;