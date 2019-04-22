import config from './config';
import defaultAvatar from './components/images/nasa-audio-cast.jpg';

const toQueryString = object => Object.keys(object)
  .map(key => `${key}=${object[key]}`)
  .join('&');

const transformItem = item => {
  const data = item.data[0];
  const newItem = {
    id: data.nasa_id,
    description: data.description,
    title: data.title,
    type: data.media_type,
    keywords: [data.keywords],
    date: data.date_created,
  };

  if (newItem.type === 'image') {
    newItem.thumb = item.links[0].href;
  }
  if (newItem.type === 'video') {
    newItem.imgVideo = item.links[0].href;
  }
  if (newItem.type === 'audio') {
    newItem.thumb = defaultAvatar;
  }

  return newItem;
};


function search({
  audio, video, id, image, query
}) {
  const queryObject = {};

  if (query) {
    queryObject.q = query;
  }

  if (audio) {
    queryObject.media_type = 'audio';
  }
  if (video) {
    queryObject.media_type = 'video';
  }

  if (image) {
    queryObject.media_type = 'image';
  }

  if (id) {
    queryObject.nasa_id = id;
  }

  const uri = `${config.BASE_URL}/search?${toQueryString(queryObject)}`;

  const encodedURI = encodeURI(uri);

  return fetch(encodedURI)
    .then(result => result.json())
    .then(({ collection: { items } }) => items)
    .then(items => items
      // .filter(item => item.links)
      .map(transformItem));
}

function getAssetImageById(id) {
  const uri = `${config.BASE_URL}/asset/${id}`;

  const encodedURI = encodeURI(uri);

  return fetch(encodedURI)
    .then(result => result.json())
    .then(({ collection: { items } }) => items[1].href);
}

function getAssetById(id) {
  return Promise.all([getAssetImageById(id), search({ id })]).then(
    ([href, items]) => ({
      ...items[0],
      href
    })
  );
}

export default {
  getAssetById,
  search
};
