export const galleryAPI = {
  getPhotos: async (page) => {
    console.log(page);
    return fetch(
      `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&per_page=20&page=${page}`,
      {
        method: 'GET',
      },
    );
  },
};
