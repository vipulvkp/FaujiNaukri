var ProfileFace=React.createClass({
getInitialState: function(){
 return {}
},
componentDidMount(){
$(".ui.dropdown").dropdown();
},
render : function(){
return (

       <div className="ui grid">
           <div className="one wide column"></div>
           <div className="two wide column">
		       <h4 style={{color:"#666"}}> Filter Results</h4><br/><br/>
		       <h5><i className="angle double right icon"></i>Active Since</h5>
		       <div className="ui selection dropdown">
				  <input type="hidden" name="active_since"></input>
				  <i className="dropdown icon"></i>
				  <div className="default text">Select</div>
				  <div className="menu">
					    <div className="item" data-value="1">Last 10 days</div>
					    <div className="item" data-value="0">Last one month</div>
					    <div className="item" data-value="0">Last one day</div>
				  </div>
		       </div> 
		       <br/><br/>
		       <h5><i className="angle double right icon"></i>Location</h5>
                       <div className="ui checkbox">
				  <input type="checkbox"></input>
				  <label>Bangalore</label>
			</div><br/>
                       <div className="ui checkbox">
                                  <input type="checkbox"></input>
                                  <label>Delhi</label>
                        </div><br/>
                       <div className="ui checkbox">
                                  <input type="checkbox"></input>
                                  <label>Chennai</label>
                        </div><br/>
                        <div className="ui checkbox">
                                  <input type="checkbox"></input>
                                  <label>Hyderabad</label>
                        </div><br/>
                        <div className="ui checkbox">
                                  <input type="checkbox"></input>
                                  <label>Noida</label>
                        </div><br/>
                        <div className="ui checkbox">
                                  <input type="checkbox"></input>
                                  <label>Gurugram</label>
                        </div>

           </div>
           <div className="one wide column">
                <div className="ui vertical divider"></div>
           </div>
           <div className="eight wide column">
               <div className="ui raised segment" style={{backgroundColor:"whitesmoke",cursor:"pointer"}}> 
                       <div className="ui grid" style={{color:"#2c8dad",fontWeight:"600"}}>
			       <div className="eight wide column">Post: Arms and Ammunition Engineer</div>
			       <div className="eight wide column">Company: IPV Electronics and Ammunitions</div>  
                       </div>
                       <div className="ui grid">
				<div className="five wide column"><i className="travel icon"></i>Experience : 20years</div>  
				<div className="five wide column"><i className="marker icon"></i>Location : Bangalore, Chennai</div>  
				<div className="five wide column"><i className="rupee icon"></i>Salary: Not disclosed</div>  
                       </div>
                       <div className="ui grid"> 
				 <div className="three wide column"> Skills Required:</div>
				 <div className="thirteen wide column"> Radar Fitter, thermostat application, Logical Arms Handling</div>
                       </div>
                       <div className="ui grid">
				<div className="three wide column">Description:</div> 
                                <div className="thirteen wide column">Looking for suitable candidate in handling french thermostat radars with active arms and ammuniton knowlegde. Must be willing.... </div>  
                       </div><br/>
                       <div style={{textAlign:"center",backgroundColor:"rgba(128, 128, 128, 0.12)"}}><h4>Posted by KV Anil On 12th Septemeber ,2017 at 5:43 pm</h4></div>
               </div>

               <div className="ui raised segment" style={{backgroundColor:"whitesmoke",cursor:"pointer"}}>
                       <div className="ui grid" style={{color:"#2c8dad",fontWeight:"600"}}>
                               <div className="eight wide column">Post: Radar Technician</div>
                               <div className="eight wide column">Company: ISRO</div>
                       </div>
                       <div className="ui grid">
                                <div className="five wide column"><i className="travel icon"></i>Experience : 20-25years</div>
                                <div className="five wide column"><i className="marker icon"></i>Location : Bangalore</div>
                                <div className="five wide column"><i className="rupee icon"></i>Salary: 30-40 LPA</div> 
                       </div>
                       <div className="ui grid"> 
                                 <div className="three wide column"> Skills Required:</div>
                                 <div className="thirteen wide column"> Radar Fitter, Transformer Handling</div>
                       </div>
                       <div className="ui grid">
                                <div className="three wide column">Description:</div>
                                <div className="thirteen wide column">Looking for suitable candidate in handling french thermostat radars with active arms and ammuniton knowlegde. Must be willing.... </div>
                       </div><br/>
                       <div style={{textAlign:"center",backgroundColor:"rgba(128, 128, 128, 0.12)"}}><h4>Posted by Prasanth On 12th Septemeber ,2017 at 5:43 pm</h4></div>
               </div>
              
               <div className="ui raised segment" style={{backgroundColor:"whitesmoke",cursor:"pointer"}}>
                       <div className="ui grid" style={{color:"#2c8dad",fontWeight:"600"}}>
                               <div className="eight wide column">Post: War Time Navigation Engineer</div>
                               <div className="eight wide column">Company: DRDO</div>
                       </div>
                       <div className="ui grid">
                                <div className="five wide column"><i className="travel icon"></i>Experience : 10-20years</div>
                                <div className="five wide column"><i className="marker icon"></i>Location : Bangalore, Chennai</div>
                                <div className="five wide column"><i className="rupee icon"></i>Salary: Not disclosed</div> 
                       </div>
                       <div className="ui grid"> 
                                 <div className="three wide column"> Skills Required:</div>
                                 <div className="thirteen wide column"> Marine War Experience, Navigation , Being a Co - pilot</div>
                       </div>
                       <div className="ui grid">
                                <div className="three wide column">Description:</div>
                                <div className="thirteen wide column">Looking for suitable candidate in handling french thermostat radars with active arms and ammuniton knowlegde. Must be willing.... </div>
                       </div><br/>
                       <div style={{textAlign:"center",backgroundColor:"rgba(128, 128, 128, 0.12)"}}><h4>Posted by KV Anil On 12th Septemeber ,2017 at 5:43 pm</h4></div>
               </div>
               <div className="ui raised segment" style={{backgroundColor:"whitesmoke",cursor:"pointer"}}>
                       <div className="ui grid" style={{color:"#2c8dad",fontWeight:"600"}}>
                               <div className="eight wide column">Post: Co Pilot</div>
                               <div className="eight wide column">Company: Internation Aviation Of India and Indigo Partners Aviation Ltd</div>
                       </div>
                       <div className="ui grid">
                                <div className="five wide column"><i className="travel icon"></i>Experience : 20-25years</div>
                                <div className="five wide column"><i className="marker icon"></i>Location : India</div>
                                <div className="five wide column"><i className="rupee icon"></i>Salary: 30 LPA</div> 
                       </div>
                       <div className="ui grid"> 
                                 <div className="three wide column"> Skills Required:</div>
                                 <div className="thirteen wide column"> Fighter Jet Pilot, Navigation, Quick Decision Maker, ATC Controller great to have</div>
                       </div>
                       <div className="ui grid">
                                <div className="three wide column">Description:</div>
                                <div className="thirteen wide column">Looking for suitable candidate in handling french thermostat radars with active arms and ammuniton knowlegde. Must be willing.... </div>
                       </div><br/>
                       <div style={{textAlign:"center",backgroundColor:"rgba(128, 128, 128, 0.12)"}}><h4>Posted by KV Anil On 12th Septemeber ,2017 at 5:43 pm</h4></div>
               </div>
           </div>
       </div>
)}
})
