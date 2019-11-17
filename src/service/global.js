export default {
  uploadUrl: 'https://motofyx-file-upload.wohlig.in/api/upload',
  readFileUrl: 'https://motofyx-file-upload.wohlig.in/api/upload/readFile?file=',

  setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  },
  removeUser() {
    localStorage.removeItem('user');
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};
