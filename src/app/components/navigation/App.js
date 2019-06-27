import React, {Component} from 'react';
import '../../../css/App.css';
import {connect} from "react-redux";
import {createItem, deleteItem} from "../../state/actions";
import {Container, Card, CardBody, CardFooter, Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';


const mapStateToProps = state => {
  return state
};

const dispatchToProps = {
    handleCreateItem: createItem,
    handleDeleteItem: deleteItem
};

class App extends Component {
    constructor(props) {
        super(props);

        this.handleCreateItem = this.handleCreateItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleCreateItem(event) {
        this.props.handleCreateItem(event)
    }

    handleDeleteItem(event) {
        this.props.handleDeleteItem(event)
    }

    render() {
        let thisTask = null;
        let taskToDelete = null;
        const updateTasks = (event) => {
            event.preventDefault();
            if (thisTask) {
                this.handleCreateItem(thisTask);
                thisTask = null;
            }
            if (taskToDelete != null) {
                this.handleDeleteItem(taskToDelete);
                taskToDelete = null;
            }
        };
        return (
            <div className="App">
                <Container id="task-page" className="mb-5">
                    <Card className="mt-5">
                        <Form onSubmit={updateTasks}>
                            <Row>
                                <Col md={6} className="ml-3">
                                    <FormGroup>
                                        <Label htmlFor="task-input" className="form-required">Task to add</Label>
                                        <Input
                                            id="task-input" type="text" name="task" maxLength={255}
                                            onChange={(e) => {
                                                thisTask = e.target.value;
                                            }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <FormGroup>
                                        <Label htmlFor="task-delete" className="form-required">Task ID to Remove</Label>
                                        <Input
                                            id="task-delete" type="number" name="task" maxLength={255}
                                            onChange={(e) => {
                                                taskToDelete = e.target.value;
                                            }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <CardFooter>
                                <Button type="submit">Add Task</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                    <Col>
                        {this.props && this.props.items.length > 0 && <ul id="tasks-todo" className="center-list">
                            {this.props.items.map((item) =>
                                <Card className="mt-1">
                                    <Row>
                                        <CardBody key={item.id} onClick={() => { this.handleDeleteItem(item.id) }}>
                                            {"Task " + item.id + ": " + item.description}
                                        </CardBody>
                                    </Row>
                                </Card>
                            )}
                        </ul>}
                    </Col>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, dispatchToProps)(App);
