import React, { Component } from 'react';

import ProductItem from './ProductItem';

class Product extends Component {
    render() {
        return (
            <div>
                <ProductItem products={this.props.products}/>
            </div>
        )
    }
}

export default Product