import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
                {(() => {
                    
                    return (
                        this.props.products.map(p => {
                            return (
                                <div className="col s12 l4" key={p.id}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={p.imgSrc} className="responsive-img"/>
                                            {/* <img src={require(`${p.imgSrc}`)} /> */}
                                            {/* <a href="#" className="halfway-fab btn-floating pink pulse">
                                <i className="material-icons">favorite</i>
                            </a> */}
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title truncate">{p.name}</span>
                                            <p>{p.type}</p>
                                        </div>
                                        <div className="card-action indigo">
                                            <a href="#">More details</a>
                                            {/* <a href="#">View Ingredients</a> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                })()}

            </div>
        )
    }
}

export default ProductItem