import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import './Members.css'

const Members = () => {

    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/everypolitician/everypolitician-data@79a6ca44788508be735a5fd7983913e7e4eb29b8/data/Bangladesh/House/ep-popolo-v1.0.json')
            .then(res => res.json())
            .then(data => setMembers(data.persons));
    }, [])

    

    const validItem = members.filter(e => e.birth_date !== undefined && e.image !== undefined && e.gender !== undefined && e.name !== undefined
    )
    
   

    return (
        <div>
            <h2>Members List <br /> Of 10th Parliament</h2>
            {
                validItem.map(member => <Member
                    key={member.id}
                    member={member}
                ></Member>)
            }
        </div>
    );
};

export default Members;