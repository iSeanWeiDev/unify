import {createActions} from 'reduxsauce';

const { Types, Creators } = createActions({
  getAllTagsRequest: null,
  getAllTagsSuccess: ['response'],
  getAllTagsFailure: ['response'],

  createNewTagRequest: ['payload'],
  createNewTagSuccess: ['response'],
  createNewTagFailure: null,
})

export const TagTypes = Types;
export default Creators;
