import React from 'react'

const MyBtn = (props) => {
  const isActive = (props.number === props.activeBtn);
  return (
    <React.Fragment>
    <button onClick={()=> props.onEach(props.number)}
    className={`page-item page-link m-2 btn btn-secondary btnPage d-none d-md-block ${isActive ? 'active2' : ''}`}>
            {props.number}
    </button>
    </React.Fragment>
  );
};

export default MyBtn;