import './JopItem.css'
function JopItem ({AnyJop}){
    console.log(AnyJop.logo);
  
    return(
    <div id="maindiv">
        <div id="leftdiv">
        <img  className="imges" src={AnyJop.logo}/>
        <div id="infodiv">
<div className="infodiv">
    <button id="photosnpbtn">{AnyJop.company}</button>
    <button id="newbtn">NEW!</button>
    <button id="featuredbtn">FEATURED</button>
</div>
<div className="infodiv">
    <label id="medlab">{AnyJop.position}</label>
   
</div>
<div className="infodiv">
<label className="graylabs">{AnyJop.postedAt}</label>
            <label className="graylabs">{AnyJop.contract}</label>
            <label className="graylabs">{AnyJop.location}</label>
   
</div>
        </div>
        </div>
        <div id="rightdiv">
<button className="rightbtns" >Frontend</button>
<button className="rightbtns" >Senior</button>
<button className="rightbtns" >HTML</button>
<button className="rightbtns" >CSS</button>
<button className="rightbtns" >JavaScript</button>
</div>
    </div>
    )
}
    export default JopItem
