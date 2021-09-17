import React from 'react';


const PortfolioPage = (props)=>(
    <div>
        This the Portfolio Page for portfolio with Id of {props.match.params.id}
    </div>
);

export default PortfolioPage;