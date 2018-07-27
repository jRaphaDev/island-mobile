
import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, 
    Card, CardItem, Thumbnail, 
    Text, Button, Icon, 
    Left, Body, Right 
} from 'native-base';

export class CardComponent extends Component {

    constructor(){
        super();
        this.state = {}
    }

    render() {
        return (<Container>
            <Header />
            <Content>
                <Card>

                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../img/home_island.png')} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem cardBody>
                        <Image source={require('../img/home_island.png')} 
                            style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>)
    }
}