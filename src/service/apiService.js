import axios from 'axios';
import moment from 'moment/moment';

// Local

const adminUrl = 'http://localhost:3000/';

// Server

//  const adminUrl = 'https://motofyx-api.wohlig.in/';

export default {
  // userlogin: (data, callback) => axios
  //     .post(`${adminUrl}User/login`, data)
  //     .then((responseData) => {
  //       callback(responseData);
  //     })
  //     .catch((err) => {
  //       callback(err);
  //     }),

  // USER APIS CALLING

  // get All User
  searchUser: (data, callback) => axios
      .get(`${adminUrl}User/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update user
  updateUser: (id, data, callback) => axios
      .put(`${adminUrl}User/updateUser/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save user
  saveUser: (data, callback) => axios
      .post(`${adminUrl}User/saveUser`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete user
  deleteUser: (id, callback) => axios
      .delete(`${adminUrl}User/deleteUser/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one user
  getOneUser: (id, callback) => axios
      .get(`${adminUrl}User/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // USER APIS CALLING END

  // TEAM APIS CALLING

  // get All Team
  searchTeam: (data, callback) => axios
      .get(`${adminUrl}Team/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Team
  updateTeam: (id, data, callback) => axios
      .put(`${adminUrl}Team/updateTeam/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Team
  saveTeam: (data, callback) => axios
      .post(`${adminUrl}Team/saveTeam`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Team
  deleteTeam: (id, callback) => axios
      .delete(`${adminUrl}Team/deleteTeam/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Team
  getOneTeam: (id, callback) => axios
      .get(`${adminUrl}Team/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // TEAM APIS CALLING END

  // export to excel
  generateExcel: (reportData, filename, callback) => axios({
      url: `${adminUrl}UserService/generateExcel`,
      reportData,
      method: 'POST',
      responseType: 'blob',
    })
      .then((response) => {
        const fileName = `${filename}-${moment().format('MMM-DD-YYYY-hh-mm-ss-a')}.xlsx`;
        const blob = new Blob([response.data]);
        const objectUrl = (window.URL || window.webkitURL).createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        callback(null, fileName);
      })
      .catch((err) => {
        callback(err);
      }),
};
