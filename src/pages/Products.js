import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CartContext } from "../contexts/Cart";

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("https://zkqr80z29x.sse.codesandbox.io/products").then(res => {
            // console.log(res);
            this.setState({
                products: res.data
            });
        });
    }

    render() {
        const { products } = this.state;

        return (
            <Container >
                <Row>
                    {products.map(product => (
                        // 12 / 4 = 3 (product)
                        <Col sm="4">       
                            <Card>
                                <CardImg top width="100%" src={product.imageUrl}/>
                                <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>{product.descriptions}</CardText>
                                <CartContext.Consumer>
                                    { ({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                                </CartContext.Consumer>
                                </CardBody>
                           </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Products;