import React from "react";
import restApiData from '../restApi.json';

const Team = () => {
    return(
        <>
        <section className="team" id="team">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">OUR TEAM</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        molestias fugit dicta, lpsum impedit quam laboriosam quas doloremque quia 
                        perferendis laboriosam
                    </p>
                </div>
                <div className="team_continer">
                    {restApiData[0].team.map((element) => {
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name}/>
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                                </div>
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Team;