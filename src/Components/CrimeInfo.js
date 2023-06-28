import React from 'react';
import image1 from '../Assets/robbery.png';
import image2 from '../Assets/batteryassualt.png';
import image3 from '../Assets/deadlyweapon.png';
import image4 from '../Assets/kidnapping.png';
import image5 from '../Assets/vandalism.png';
import image6 from '../Assets/childcrime.png';
import image7 from '../Assets/petty.png';
import image8 from '../Assets/purse.png';
import image9 from '../Assets/rape.png';
import "../styles/CrimeInfo.css";

function CrimeInfo(){
    return(
<div className='featuremain'>
<h1>
            <span>Different types of crime</span><br/>
            <span >and their information</span>
           </h1> 
<div className='graphdiv10'>
<div className='graphsubdiv10'>
<img className="image10" src={image1} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://en.wikipedia.org/wiki/Robbery'><h2 >Robbery</h2></a>
<p>Robbery is defined as taking the property of another, with the intent to permanently deprive the person of that property, by means of force or fear accomplished by an assault</p>
</div></div>
<div className='graphsubdiv20'>
<img className="image20" src={image2} alt="my image"></img>
<div className='graphparadiv20'>
<a href='https://en.wikipedia.org/wiki/Battery_(crime)'><h2>Battery Assault</h2></a>
<p>Battery is a criminal offense involving unlawful physical contact, distinct from assault which is the act of creating apprehension of such contact.
  </p>
</div>
</div>
<div className='graphsubdiv10'>
<img className="image10" src={image3} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://www.shouselaw.com/ca/blog/what-is-assault-with-a-deadly-weapon/'><h2>Assualt with deadly weapon</h2></a>
<p>Assault with a deadly weapon is a crime that involves attacking or threatening someone with a weapon or object that can kill or cause great bodily injury</p>
</div></div>
</div>
<div className='graphdiv10'>
<div className='graphsubdiv10'>
<img className="image10" src={image4} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://en.wikipedia.org/wiki/Battery_(crime)'><h2>Kidnapping</h2></a>
<p>In criminal law, kidnapping is the unlawful confinement of a person against their will, often including transportation/asportation.</p>
</div></div>
<div className='graphsubdiv20'>
<img className="image10" src={image5} alt="my image"></img>
<div className='graphparadiv20'>
<a href='https://en.wikipedia.org/wiki/Vandalism'><h2>Vandalism</h2></a>
<p>Vandalism is the action involving deliberate destruction of or damage to public or private property</p>
</div>
</div>
<div className='graphsubdiv10'>
<img className="image10" src={image6} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://en.wikipedia.org/wiki/Battery_(crime)'><h2>Crime against child</h2></a>
<p>Crime against children can be in any form of abuse including physical, emotional, neglect, and exploitation of the child as through sex trafficking .</p>
</div></div>
</div>
<div className='graphdiv10'>
<div className='graphsubdiv10'>
<img className="image10" src={image7} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://recordsfinder.com/guides/petty-theft-definition-and-consequences/'><h2>Theft plan-petty</h2></a>
<p>Petty theft refers to the act of stealing something from another person that is not of high value.</p>
</div></div>

<div className='graphsubdiv20'>
<img className="image10" src={image8} alt="my image"></img>
<div className='graphparadiv20'>
<a href='https://www.notafraidtowin.com/pickpocketing-and-purse-snatching/'><h2>Purse Snatching </h2></a>
<p>Purse snatching is the act of grabbing or snatching a purse or handbag from the custody of an individual1. The victim must have physical possession of the purse for it to be considered purse-snatching.</p>
</div>
</div>

<div className='graphsubdiv10'>
<img className="image10" src={image9} alt="my image"></img>
<div className='graphparadiv10'>
<a href='https://en.wikipedia.org/wiki/Rape'><h2>Rape Attempted</h2></a>
<p>Rape is a type of sexual assault involving sexual intercourse or other forms of sexual penetration carried out against a person without their consent</p>
</div></div>
</div>
<div className='buttondiv'>
<div className='buttondiv'>
<a href="https://app.powerbi.com/view?r=eyJrIjoiYTI5MDJlZGQtNTA2OS00N2ZiLWIwN2QtM2ZjMmI2MDE4YjdiIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D&pageName=ReportSection7c1f37014e6dd1c4cae3" ><button type="button"  className="buttonanalysis1">Analysis</button></a></div>
</div>
</div>
    );
}

export default CrimeInfo;