import React from 'react';
import { CASES } from "../../constants";
import { CaseComponent } from "../Case/CaseComponent";
import "./CaseListComponent.scss";

export const CaseListComponent = () => {
  return (
    <div className="case-list">
      {CASES.map(item => item.imageUrl ? <CaseComponent key={item.id} {...item} /> : <div className="title"><h2>{item.title}</h2></div>)}
    </div>
  )
}
  
