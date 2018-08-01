import api from '../api.json';
import { normalize, schema } from 'normalizr';

// const media = new schema.Entity(key, definición de mi esquema, opciones);
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
});

const friend = new schema.Entity('friends');

const myPlaylist = new schema.Entity('myPlaylists');

const output = { 
  categories: new schema.Array(category), 
  myPlaylists: new schema.Array(myPlaylist), 
  friends: new schema.Array(friend)
};

const normalizedData = normalize(api, output);

export default normalizedData;