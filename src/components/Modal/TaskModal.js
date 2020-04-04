import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Select from '../Form/Select';
import TagSelect  from '../Form/TagSelect';
import { connect } from 'react-redux';
import UserStoryActions from '../../actions/userStory';
import { equals } from 'ramda';
import '../../styles/components/modal.scss';

const priorityList = [
  {value: 'low', label: 'Low Priority'},
  {value: 'medium', label: 'Medium Priority'},
  {value: 'high', label: 'High Priority'},
];

const statusList = [
  {value: 'backlog', label: 'Backlog'},
  {value: 'in-progress', label: 'In Progress'},
  {value: 'review', label: 'Review'},
  {value: 'complete', label: 'Complete'},
];

class TaskModal extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: props.task ? props.task.name : '',
        description: props.task ? props.task.description : '',
        status: props.task ? props.task.status : props.defaultStatus,
        priority: props.task ? props.task.priority : 'medium',
        tags: []
      },
      isEditing: props.task ? true : false
    };
    if (props.task) {
      let tags = props.task.tags.reduce((accum, v) => {
        accum.push(v.value);
        return accum;
      }, []);
      this.state.form.tags = tags;
    }
  }

  handleInputChange(e) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleTagsChanges(tags) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        tags: tags
      }
    })
  }

  handleSubmit() {
    let payload = this.state.form;
    if (this.state.isEditing) {
      payload.id = this.props.task.id;
      this.props.updateTask(payload);
    } else {
      this.props.createNewTask(payload);
    }
    //TODO add spinner and wait for request to finish
    this.props.onHide();
  }

  render() {
    let {show, onHide} = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>{this.state.isEditing ? 'Edit User Story' : 'Add User Story'}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Select
              label="Status"
              options={statusList}
              value={this.state.form.status}
              name="status"
              onChange={this.handleInputChange.bind(this)}
            />
            <Input
              label="Task Title"
              placeholder="Input task title.."
              value={this.state.form.name}
              name="name"
              onChange={this.handleInputChange.bind(this)}
            />
            <TextArea
              label="What is your request?"
              value={this.state.form.description}
              name="description"
              onChange={this.handleInputChange.bind(this)}
            />
            <Select
              label="Priority"
              options={priorityList}
              value={this.state.form.priority}
              name="priority"
              onChange={this.handleInputChange.bind(this)}
            />
            <Form.Group controlId="form.tag">
              <Form.Label>Add a Tag to Your Request</Form.Label>
              <TagSelect onChange={this.handleTagsChanges.bind(this)} defaultValue={this.state.form.tags} />
            </Form.Group>
            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  saveStatus: equals(state.userStory.saveStatus, 'done'),
  updateStatus: equals(state.userStory.updateStatus, 'done')
})

const mapDispatchToProps = dispatch => ({
  createNewTask: payload => dispatch(UserStoryActions.createNewTaskRequest(payload)),
  updateTask: payload => dispatch(UserStoryActions.updateTaskRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);