import React from 'react';
import "./CaseComponent.scss";

export const CaseComponent = (props) => {
  return (
    <div className="case">
      <a href={props.imageUrl}><img src={props.imageUrl} alt={props.imageAlt} /></a>
    </div>
  );
};
