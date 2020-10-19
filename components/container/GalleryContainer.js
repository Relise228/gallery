import React from 'react';
import {connect} from 'react-redux';
import Gallery from '../presentational/Gallery';
import {getPhotos, addPhotos} from '../../redux/thunks/gallery-thunks';
import {nextPage} from '../../redux/actions/gallery-actions';
import Loader from '../presentational/Loader';

class GalleryContainer extends React.Component {
  componentDidMount() {
    this.props.getPhotos(this.props.page);
  }

  render() {
    return this.props.isFetching ? (
      <Loader />
    ) : (
      <Gallery photos={this.props.photos} {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  photos: state.gallery.photos,
  isFetching: state.gallery.isFetching,
  page: state.gallery.page,
});

export default connect(mapStateToProps, {getPhotos, nextPage, addPhotos})(
  GalleryContainer,
);
