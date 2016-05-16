var Keybaord = React.createClass({
  render: function() {
    var idjq = 'C4';
    var className="key key-white";

    var pitches = {
      'C': 'white',
      'Csh': 'black',
      'D': 'white',
      'Dsh': 'black',
      'E': 'white',
      'F': 'white',
      'Fsh': 'black',
      'G': 'white',
      'Gsh': 'black',
      'A': 'white',
      'Ash': 'black',
      'B': 'white',
    };

    return (
      <div>
        {[0,1,2,3,4,5,6].map((num) => {
          return Object.keys(pitches).map((pitch, i) => {
            return <Key id={`${pitch}${num}`} key={i} className={`key key-${pitches[pitch]}`}/>
          })
        })}
      </div>
    );
  }
});

var Key = React.createClass({
  render: function() {
    return (
      <div id={this.props.id} className={this.props.className}></div>
    );
  }
});

ReactDOM.render(
  <Keybaord/>,
  document.getElementById('content')
);
