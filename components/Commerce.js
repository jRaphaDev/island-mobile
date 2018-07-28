
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Title, Header, 
    Icon, Content, List,
    ListItem, Thumbnail, Text, 
    Left, Body, Right, Button 
} from 'native-base';

export class Commerce extends Component {

    constructor() {
        super()
        
        this.state = {
            commerces: [
                { title: 'Title I', discribe: 'Describe item I'},
                { title: 'Title II', discribe: 'Describe item II'},
                { title: 'Title III', discribe: 'Describe item III'}, 
            ]
        }
    }

    render() {
        const navigation  = this.props.navigation;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()} >
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List dataArray={this.state.commerces} 
                        renderRow={(item) =>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={require('../img/home_island.png')} /> 
                            </Left>
                            <Body>
                                <Text>{item.title}</Text>
                                <Text note>{item.discribe}</Text>
                            </Body>
                            <Right>
                                <Button transparent 
                                    onPress={() => Alert.alert('ops')}>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        )
    }
}