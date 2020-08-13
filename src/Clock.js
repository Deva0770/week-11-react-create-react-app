class Clock extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        displayTime: ''
        }
      this.state = {
        visitorName: 'Deva'
        }
    }
    componentDidMount () {
      this.timerId = setInterval(() => {
        this.tick()
      }, 1000);
    }
  
    tick () {
      console.log("In tick")
      this.setState({
        displayTime: new Date().toString()
      })
    }
    
    render () {
      const {displayTime, visitorName} = this.state;
      return (
        <div className="clock">
          <h2>Time is {displayTime}</h2>
          <div>Thanks for Visiting {visitorName}</div>
        </div>
      )
    }
  }
  