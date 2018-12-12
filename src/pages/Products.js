import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [{
                "id": "b2e3e1fc-a6a3-4bf1-b7bc-35e950176e59",
                "name": "Sobe - Orange Carrot",
                "descriptions": "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": "237b9f29-c9ec-4ccd-a3e6-a1b24e77c4c1",
                "name": "Cake - Dulce De Leche",
                "descriptions": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "234b1a60-871d-42f8-9f65-5727971a7edd",
                "name": "Wine - Alicanca Vinho Verde",
                "descriptions": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "08b0f6d6-587f-4125-9f6e-6e0aea9327af",
                "name": "Macaroons - Two Bite Choc",
                "descriptions": "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
              }, {
                "id": "fa62f8cf-00fd-480a-9fcf-57600ce16624",
                "name": "Basil - Thai",
                "descriptions": "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "32bbfe86-17d0-4465-93ab-27393fb4024b",
                "name": "Filo Dough",
                "descriptions": "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
                "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
              }, {
                "id": "4ca16ad9-9016-4756-b304-d984c406be43",
                "name": "Lobster - Live",
                "descriptions": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "bd335350-0e80-40ba-aef1-7a4e38fd12cd",
                "name": "Sprite, Diet - 355ml",
                "descriptions": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "362ef9fe-ad70-4766-9e09-555c51b3dfc4",
                "name": "Syrup - Golden, Lyles",
                "descriptions": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "0163c12a-21aa-4c96-9b7c-4a9690f13e70",
                "name": "Veal - Leg, Provimi - 50 Lb Max",
                "descriptions": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "95c451d2-ad78-4422-b27c-2fdce4f90870",
                "name": "Tomatoes - Vine Ripe, Yellow",
                "descriptions": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "8c5f1057-b2c1-47b0-ada5-209e78afbecb",
                "name": "Salmon Steak - Cohoe 6 Oz",
                "descriptions": "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "646dbec6-5b75-4dcf-a292-afc9ba7fc1ef",
                "name": "Nectarines",
                "descriptions": "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "edc4a6ff-9e30-4dab-be3c-c36669f40976",
                "name": "Pork Ham Prager",
                "descriptions": "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "ef8ba441-a325-4405-85b0-47018341194a",
                "name": "Chutney Sauce - Mango",
                "descriptions": "arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "f23805a7-cc49-419c-b4a2-681a2c513dcb",
                "name": "Pork - Backfat",
                "descriptions": "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "c2764994-78eb-4e99-a741-2a9b4f29cb3b",
                "name": "Pork - Bacon,back Peameal",
                "descriptions": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "3c427eb2-65f9-433d-91cb-bca756e05bba",
                "name": "Vinegar - Raspberry",
                "descriptions": "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "6d788210-ea52-480e-b844-89e0cf420143",
                "name": "Flavouring - Rum",
                "descriptions": "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": "626534f0-51b2-4a7c-bbac-9ee69bc57281",
                "name": "Sole - Iqf",
                "descriptions": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }]
        };
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
                                <Button>Add to cart</Button>
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