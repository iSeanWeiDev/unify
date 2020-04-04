import React, {useState, useEffect} from  'react';
import { equals } from 'ramda';
import { connect } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import TagActions from '../../actions/tag';

const TagSelect = ({onChange, defaultValue, tagData, isDone, getTags, saveTag}) => {
  useEffect(() => {
    getTags();
  }, []);

  let tags = [];
  const [tagsSelectData, setTagsData] = useState([]);

  useEffect(() => {
    if (isDone && tagData.length > 0) {
      tagData.forEach(v => {
        let tagSelect = {label: v.name, value: v.id};
        tags.push(tagSelect);
      })
    }

    setTagsData(tags);
  }, [tagData]);

  async function createOption(option) {
    //TODO we save the tag, but do not add it to the value, the user has to click back down and then select the tag
    await saveTag({name: option});
  }

  return  (
    <CreatableSelect
        value={defaultValue}
        onChange={onChange}
        onCreateOption={createOption}
        options={tagsSelectData}
        isMulti={true}
        className="multi-select"
    />
  );
}

const mapStateToProps = state => ({
  tagData: state.tag.data,
  isDone: equals(state.tag.getStatus, 'done'),
})

const mapDispatchToProps = dispatch => ({
  getTags: () => dispatch(TagActions.getAllTagsRequest()),
  saveTag: (payload) => dispatch(TagActions.createNewTagRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagSelect);