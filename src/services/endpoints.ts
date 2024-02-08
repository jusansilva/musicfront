export const endpoints = {
  URL: {
    music: {
      getAll: '/music',
      getByid: '/music/{id}',
      create: '/music',
      update: '/music',
      delete: '/music/{id}',
      getByArtist: '/music/artist/{id}',
      getByAlbum: '/music/album/{id}'
    },
    album: {
      getAll: '/album',
      getByid: '/album/{id}',
      create: '/album',
      update: '/album',
      delete: '/album/{id}'
    },
    artist: {
      getAll: '/artist',
      getByid: '/artist/{id}',
      create: '/artist',
      update: '/artist',
      delete: '/artist/{id}'
    },

  },
}
