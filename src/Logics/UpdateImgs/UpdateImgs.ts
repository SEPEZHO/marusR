import React from 'react';
import { connect } from 'react-redux';
import { UpdateImgs } from 'src/Store/Actions/UpdateImgsAction';

const UpdateImgsFunc: React.FC = (props) => {
  fetch('http://www.instagram.com/mrs_skv/?__a=1', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      props.UpdateImgs(response);
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateImgs: (imgs) => dispatch(UpdateImgs(imgs)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateImgsFunc);
