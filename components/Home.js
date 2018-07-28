
import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
    Container, Header, Title, Content, 
    Footer, FooterTab, Button, Left, 
    Right, Body, Icon, Text,
    Item, Input
} from 'native-base';

export class Home extends Component {
    
    constructor() {
        super();
    }
    render() {
        const navigation  = this.props.navigation;

        return (<Container>

                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Image
                        style={{
                            width: 320, height: 450,
                            marginTop: 10, marginLeft: 30
                        }}
                        source={require('../img/home_island.png')} />

                    <Item rounded
                        style={{
                            marginTop: 50
                        }}>
                        <Input placeholder='O que voce deseja ?'/>
                    </Item>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Developed by Raphael Freitas | 2018</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>)
    }
}