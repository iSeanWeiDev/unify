import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Select from '../Form/Select';
import TagSelect  from '../Form/TagSelect';
import { connect } from 'react-redux';
import FeatureRequestActions from '../../actions/featureRequest';
import { equals } from 'ramda';
import '../../styles/components/modal.scss';

const statusList = [
  {value: 'inbox', label: 'Inbox'},
  {value: 'next', label: 'Up Next'},
  {value: 'review', label: 'In Review'},
  {value: 'board', label: 'Moved to Feature Board'},
];

class FeatureRequestModal extends Component
{
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      form: {
        name: props.data ? props.data.name : '',
        description: props.data ? props.data.description : '',
        status: props.data ? props.data.status : props.defaultStatus,
        tags: []
      },
      isEditing: props.data ? true : false
    };
    if (props.data) {
      let tags = props.data.tags.reduce((accum, v) => {
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
      payload.id = this.props.data.id;
      this.props.updateFeature(payload);
    } else {
      payload.project_id = 1;
      this.props.createNewFeature(payload);
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
            <span>{this.state.isEditing ? 'Edit Feature Request' : 'Add Feature Request'}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {this.state.isEditing ? (
              <Select
                  label="Status"
                  options={statusList}
                  value={this.state.form.status}
                  name="status"
                  onChange={this.handleInputChange.bind(this)}
                />
            ) : (
              <> </>
            )}
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
            <Form.Group controlId="form.tag">
              <Form.Label>Add a Tag to Your Request</Form.Label>
              <TagSelect onChange={this.handleTagsChanges.bind(this)} defaultValue={this.state.form.tags} />
            </Form.Group>
            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  saveStatus: equals(state.featureRequest.saveStatus, 'done'),
  updateStatus: equals(state.featureRequest.updateStatus, 'done')
})

const mapDispatchToProps = dispatch => ({
  createNewFeature: payload => dispatch(FeatureRequestActions.createNewFeatureRequest(payload)),
  updateFeature: payload => dispatch(FeatureRequestActions.updateFeatureRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureRequestModal);
