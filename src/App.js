import React, { Component } from 'react';
import './app.css';
import AppHeader from './components/app-header';
import PostAddForm from './components/post-add-form';
import PostList from './components/post-list';
import PostStatusFilter from './components/post-status-filter';
import SearchPanel from './components/search-panel';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addForm = this.addForm.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateState = this.onUpdateState.bind(this);
    this.onStatusFilter = this.onStatusFilter.bind(this);
    this.state = {
      data: [
        {label: 'I feel so gooooood...', important: true, like: false, id: uuidv4()},
        {label: 'lets do this', important: false, like: false, id: uuidv4()},
        {label: 'hello', important: false, like: false, id: uuidv4()},
      ],
      term: '',
      filter: 'all'
    } 
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArray = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

      return {
        data: newArray
      }
    })
  }
  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArray = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

      return {
        data: newArray
      }
    })
  }

  deleteItem(id) {
    const {data} = this.state;
    const index = data.findIndex(elem => elem.id === id);
    const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
    this.setState(() => ({
      data: newArray
    }))
  }

  filterPosts(items, filter) {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items
    }
  }

  addForm(body) {
    const item = {
      label: body, 
      important: false, 
      id: uuidv4()
    };
    this.setState(({data}) => {
      const newArray = [...data, item];
      return {
        data: newArray
      }
    })
  }

  searchPosts(data, term) {
    if(term.length === 0) {
      return data;
    } 

    return data.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  }

  onUpdateState(term) {
    this.setState({term});
  }

  onStatusFilter(filter) {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(elem => elem.like === true).length;
    const length = data.length;
    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);
    console.log(visiblePosts);
    return (
      <div className="app">
        <AppHeader liked={liked} length={length}/>
        <div className="search-panel d-flex">
          <SearchPanel onUpdateState={this.onUpdateState}/>
          <PostStatusFilter filter={filter} onStatusFilter={this.onStatusFilter}/>
        </div>
        <PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleLiked={this.onToggleLiked} onToggleImportant={this.onToggleImportant}/>
        <PostAddForm onAdd={this.addForm}/>
      </div>
    );
  }
}

export default App;
