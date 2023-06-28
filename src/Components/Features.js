import React from 'react';
import "../styles/Feature.css";
// import image1 from '../Assets/garph1.png';
import image2 from '../Assets/graph10.png';
import image3 from '../Assets/graph7.png';
import image4 from '../Assets/graph6.png';
import image1 from '../Assets/graph8.png';
import image5 from '../Assets/graph11.png';
import { Link, useLocation } from "react-router-dom";
function Feature(){
    return(
<div className='featuremain'>
<h1>Features of Analysis</h1>
<div className='graphdiv'>

<div className='graphsubdiv'>
<img className="image1" src={image2} alt="my image"></img>
<div className='graphparadiv'>
<p >pie chart</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div></div>

<div className='graphsubdiv2'>
<img className="image2" src={image4} alt="my image"></img>
<div className='graphparadiv2'>
<p>Bar graph</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div>

</div>

<div className='graphsubdiv'>
<img className="image1" src={image3} alt="my image"></img>
<div className='graphparadiv'>
<p >pie chart</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div></div>

</div>

<div className='graphdiv'>

<div className='graphsubdiv'>
<img className="image1" src={image5} alt="my image"></img>
<div className='graphparadiv'>
<p >pie chart</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div></div>

<div className='graphsubdiv2'>
<img className="image2" src={image1} alt="my image"></img>
<div className='graphparadiv2'>
<p>Bar graph</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div>

</div>

{/* <div className='graphsubdiv'>
<img className="image1" src={image3} alt="my image"></img>
<div className='graphparadiv'>
<p >pie chart</p>
<p>To show distribution of various crime rates by their names, types and cities</p>
</div></div> */}


</div>

<div className='buttondiv'>
<a href="https://app.powerbi.com/view?r=eyJrIjoiYTI5MDJlZGQtNTA2OS00N2ZiLWIwN2QtM2ZjMmI2MDE4YjdiIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D" ><button type="button"  className="buttonanalysis1">Analysis</button></a>
{/* <button className="buttonanalysis1"> */}
    {/* <Link style={{color: "#030303", fontSize:20}} src="https://app.powerbi.com/view?r=eyJrIjoiYTI5MDJlZGQtNTA2OS00N2ZiLWIwN2QtM2ZjMmI2MDE4YjdiIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D">Analysis</Link> */}
    {/* Analysis */}
{/* </button> */}
</div>



</div>

    );
}

export default Feature;