var Profile= React.createClass({
getinitialState: function(){

return {
}

},
render: function(){
return (
          <div>
            <Header/>
            <ProfileFace/>
          </div>
)}
})

var Header = React.createClass({
getInitialState: function(){
return {

}
},
componentDidMount(){
$('.ui.dropdown').dropdown();
},
render: function(){
return(
<div className="ui grid" style={{backgroundColor:"cadetblue"}}>
    <div className="three wide column"> <h2>My Logo</h2>
    </div>
    <div className="twelve wide column">        
		<div className="ui secondary  menu" style={{float:"right"}}>
                  <div className="ui vertical menu">
                          <div className="ui dropdown item">
                            Menu
                            <i className="dropdown icon"></i>
                           <div className="menu">
                                    <div className="ui dropdown item">
                                    New Jobs
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                      <a className="item"><i className="edit icon"></i>Jobs by Location</a>
                                      <a className="item"><i className="globe icon"></i>Jobs by company</a>
                                      <a className="item"><i className="settings icon"></i>Jobs by Salary</a>
                                    </div>
                                   </div>
                                  <div className="ui dropdown item">
                                    New Companies
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                      <a className="item"><i className="edit icon"></i>Manufacturing</a>
                                      <a className="item"><i className="globe icon"></i>Electronis</a>
                                      <a className="item"><i className="settings icon"></i>Electricals</a>
                                      <a className="item"><i className="settings icon"></i>Security</a>
                                      <a className="item"><i className="settings icon"></i>Aviation</a>
                                      <a className="item"><i className="settings icon"></i>Arms</a>
                                      <a className="item"><i className="settings icon"></i>Government Sector</a>
                                      <a className="item"><i className="settings icon"></i>Software</a>
                                    </div>
                                 </div>
                                 <div className="ui dropdown item">
                                    Inbox
                                    <div className="menu">
                                          <a className="item"><i className="edit icon"></i>Notifications</a>
                                      <a className="item"><i className="globe icon"></i>Sent Messages</a>
                                      <a className="item"><i className="settings icon"></i>Report</a>
                                    </div>
                                 </div>
                          </div>
                          </div>
                          </div>
		  <a className="item">
		    <h4>Notifications</h4>
		  </a>
		  <a className="item">
		    <h4>Account Settings </h4>
		  </a>
		    <div className="item">
		      <div className="ui icon input">
			<input type="text" placeholder="Search..."/>
			<i className="search link icon"></i>
		      </div>
		    </div>
	          <a className="ui item">
		      <h4>About Us </h4>
	          </a>
	      </div>
	  </div>
</div>

)}
})
