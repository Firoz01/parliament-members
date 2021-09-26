import React from 'react';
import './Member.css'

const Member = (props) => {
    //console.log(props.member);
    const { birth_date, image, gender, name } = props.member;

    
    console.log(birth_date);
    
    return (
        <div className='member'>
            <div>
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <h4>Birth Date: {birth_date}</h4>
            <p>Gender: {gender }</p>
           </div>
        </div>
    );
};

export default Member;