import axios from 'axios';
import moment from 'moment/moment';

// Local

// const adminUrl = 'http://localhost:3000/';

// Server

const adminUrl = 'http://api.mtcmarudharcup.com/';

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

  // Player APIS CALLING

  // get All Player
  searchPlayer: (data, callback) => axios
      .get(`${adminUrl}Player/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Player
  updatePlayer: (id, data, callback) => axios
      .put(`${adminUrl}Player/updatePlayer/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Player
  savePlayer: (data, callback) => axios
      .post(`${adminUrl}Player/savePlayer`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Player
  deletePlayer: (id, callback) => axios
      .delete(`${adminUrl}Player/deletePlayer/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Player
  getOnePlayer: (id, callback) => axios
      .get(`${adminUrl}Player/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Player APIS CALLING END

  // Setting APIS CALLING

  // get All Setting
  searchSetting: (data, callback) => axios
      .get(`${adminUrl}Setting/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Setting
  updateSetting: (id, data, callback) => axios
      .put(`${adminUrl}Setting/updateSetting/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Setting
  saveSetting: (data, callback) => axios
      .post(`${adminUrl}Setting/saveSetting`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Setting
  deleteSetting: (id, callback) => axios
      .delete(`${adminUrl}Setting/deleteSetting/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Setting
  getOneSetting: (id, callback) => axios
      .get(`${adminUrl}Setting/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Setting APIS CALLING END

  // export to excel
  generateUserExcel: (reportData, filename, callback) => axios({
      url: `${adminUrl}User/generateExcel`,
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
  generateTeamExcel: (reportData, filename, callback) => axios({
      url: `${adminUrl}Player/generateExcel`,
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
