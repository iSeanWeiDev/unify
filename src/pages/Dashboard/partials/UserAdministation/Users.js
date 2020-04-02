import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Plus, Person } from 'react-bootstrap-icons';
import UserData from '../../../../constants/users.json';
import '../../../../styles/pages/dashboard/user-administration/users.scss'
import '../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import '../../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function createCustomModalHeader(onClose, onSave) {
  return (
    <div className='modal-header'>
      <h3>That is my custom header</h3>
      <button className='btn btn-info' onClick={ onClose }>Close it!</button>
    </div>
  );
}

class Checkbox extends React.Component {
  componentDidMount() { this.update(this.props.checked); }
  componentWillReceiveProps(props) { this.update(props.checked); }
  update(checked) {
    ReactDOM.findDOMNode(this).indeterminate = checked === 'indeterminate';
  }
  render() {
    return (
      <input className='react-bs-select-all'
        type='checkbox'
        name={ 'checkbox' + this.props.rowIndex }
        id={ 'checkbox' + this.props.rowIndex }
        checked={ this.props.checked }
        onChange={ this.props.onChange } />
    );
  }
}

function customMultiSelect(props) {
  const { type, checked, disabled, onChange, rowIndex } = props;
  if (rowIndex === 'Header') {
    return (
      <div className='checkbox-personalized'>
          <Checkbox {...props}/>
          <label htmlFor={ 'checkbox' + rowIndex }>
            <div className='check'></div>
          </label>
      </div>);
  } else {
    return (
      <div className='checkbox-personalized'>
          <input
            type={ type }
            name={ 'checkbox' + rowIndex }
            id={ 'checkbox' + rowIndex }
            checked={ checked }
            disabled={ disabled }
            onChange={ e=> onChange(e, rowIndex) }
            ref={ input => {
              if (input) {
                input.indeterminate = props.indeterminate;
              }
            } }/>
          <label htmlFor={ 'checkbox' + rowIndex }>
            <div className='check'></div>
          </label>
      </div>);
  }
}

function actionFormater(cell, row) {   // String example
  return (
    <div className="actions-btn-group">
      <button className="btn-trash">
        <Image src="/images/assets/icon-trash.png" />
      </button>
      <button className="btn-edit">
        <Image src="/images/assets/icon-edit.png" />
      </button>
      
    </div>
  );
}

function userNameFormater(cell, row) {
  return (
    <div className="username-formater">
      <Image src={`/images/assets/${row.profileImgName}`} />
      <span> {row.userName} </span>
    </div>
  )
}

function accountStatusFormater(cell, row) {
  return (
    <span>
      { row.accountStatus === 1 ? "Active" : "Inactive" }
    </span>
  )
}

function accountTypeFormater(cell, row) {
  let accountType = "";
  switch(row.accountType) {
    case 1:
      accountType = "User";
      break;
    case 2:
      accountType = "Semi Admin";

      break;
    case 3: 
      accountType = "Master Admin";
      break;
    case 4:
      accountType = "Admin";
      break;
    default:
      accountType = "User";
      break;
  }
  return (
    <span>
      { accountType }
    </span>
  )
}

function createCustomInsertButton(onClick) {
  return(
    <div className="add-user">
      <button
        className="btn-add-user"
      >
        <Plus /> &nbsp;
        {/* <Person /> */}
        Add User
      </button>
    </div>
  )
}

const options = {
  insertModalHeader: createCustomModalHeader,
  insertBtn: createCustomInsertButton,
};
function handleRowSelect(row, isSelected, e) {
  // console.log(isSelected, row, e)
}

const selectRow = {
  mode: 'checkbox',
  customComponent: customMultiSelect,
  onSelect: handleRowSelect
}

function Users () {
  return (
    <div className="users">
      <div className="table-title">
        <span>Dashboard Users</span>
      </div>
      <BootstrapTable 
        data={ UserData } 
        options={ options } 
        selectRow = {selectRow}
        insertRow
        // deleteRow
      >
        <TableHeaderColumn 
          dataField='id' 
          isKey={ true } 
          hidden
        >
          ID
        </TableHeaderColumn>

        <TableHeaderColumn 
          dataField='' 
          dataFormat={ accountStatusFormater }
          width="15%"
        >
          Account Status
        </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='' 
          dataFormat={ userNameFormater }
          width="20%"
        >
          User Name
        </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='email'
          width="25%"
        >
          Email
        </TableHeaderColumn>
        <TableHeaderColumn 
          dataField=''
          dataFormat={ accountTypeFormater }
          width="15%"
        >
          Account Type
        </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='' 
          dataFormat={ actionFormater } 
          className="text-center"
          width="12%"
        >
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default Users;