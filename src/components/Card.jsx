import React from "react";
import Emoji from "./Emoji";
import Detail from "./Detail";


function Card(props) {
    return (
        
          <div className="term">
            <dt>
              <Emoji emoji={props.emoji} />
              <span>{props.name}</span>
            </dt>
            <dd>
              <Detail detailInfo={props.meaning} />
            </dd>
          </div>
        
    );
}

export default Card;