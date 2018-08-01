import React, {Component} from "react";
import HomeLayout from "../components/home-layout.jsx";
import Categories from "../../categories/components/categories.jsx";
import Related from "../components/related.jsx";
import ModalContainer from "../../widgets/containers/modal.jsx";
import Modal from "../../widgets/components/modal.jsx";
import HandleError from "../../error/containers/handle-error.jsx";
import VideoPlayer from "../../player/containers/video-player.jsx";;
import { connect } from "react-redux";
import { List as list } from 'immutable'
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';


class Home extends Component {

  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related friends={this.props.friends} medias={this.props.myPlaylists} handleOpenModal={this.handleOpenModal}/>
          <Categories 
            categories={this.props.categories} 
            handleOpenModal={this.handleOpenModal} 
            search={this.props.search} 
            isLoading={this.props.isLoading}/>
          {
            this.props.modal.get('visibility') && 
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer autoplay mediaId={this.props.modal.get('mediaId')} />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  const friends = state.get('data').get('friends').map((id) => {
    return state.get('data').get('entities').get('friends').get(id)
  })

  const myPlaylists = state.get('data').get('myPlaylists').map((id) => {
    return state.get('data').get('entities').get('myPlaylists').get(id)
  })

  let searchResults = list();
  const search = state.get('data').get('search');

  if(search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList();
  }

  return {
    categories: categories,
    friends: friends,
    myPlaylists: myPlaylists,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);