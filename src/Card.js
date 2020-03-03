import React from 'react';
import store from './store';


function Card(props) {
    console.log(props.content)
return (
<div className="Card">
<h3>
{props.title}
</h3>
<br></br>
{props.content}

</div>

)

}

export default Card;