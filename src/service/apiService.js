import axios from 'axios';
import moment from 'moment/moment';

// Local

    // const adminUrl = 'http://localhost:3001/';

// Server

   const adminUrl = 'https://motofyx-api.wohlig.in/';

export default {
  userlogin: (data, callback) => axios
    .post(`${adminUrl}User/adminLogin`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all Brand in dropdown
  getAllBrand: (data, callback) => axios
    .post(`${adminUrl}Brand/getAllBrand`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // getAll config
  getAllConfig: callback => axios
    .post(`${adminUrl}Config/getAllConfig`, {})
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // get All User

  getAllUser: (data, callback) => axios
    .post(`${adminUrl}User/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

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
  // getAll Brand
  getAllBrandList: (data, callback) => axios
    .post(`${adminUrl}Brand/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // getAll Blog
  getAllBlog: (data, callback) => axios
    .post(`${adminUrl}Blog/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // afterBefore
  getAllBeforeAfter: (data, callback) => axios
    .post(`${adminUrl}AfterBefore/getAllAfterBefore`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // getallWarranty
  getallWarranty: (data, callback) => axios
    .post(`${adminUrl}Warranty/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // getAllTermsAndCondition
  getallTermsAndConditions: (data, callback) => axios
    .post(`${adminUrl}TermsAndCondition/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all Cars
  getAllCar: (data, callback) => axios
    .post(`${adminUrl}Car/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // getAll cars without pagination
  getAllCarList: (data, callback) => axios
    .post(`${adminUrl}Car/getAllCar`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all Faq
  getAllFaq: (data, callback) => axios
    .post(`${adminUrl}Faq/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // getAll Header
  getAllHeader: callback => axios
    .post(`${adminUrl}AllHeader/getAll`)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all howitWorks
  getAllHowItWork: (data, callback) => axios
    .post(`${adminUrl}howitwork/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all Location
  getAllLocation: (data, callback) => axios
    .post(`${adminUrl}location/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all service
  getAllService: (data, callback) => axios
    .post(`${adminUrl}service/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

    // getallFeatures
    getallFeatures: (data, callback) => axios
    .get(`${adminUrl}Features/getAllFeatures`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all serviceprocess
  getAllServiceProcess: (data, callback) => axios
    .post(`${adminUrl}serviceprocess/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

    searchServicePlan: (data, callback) => axios
    .post(`${adminUrl}ServicePlan/searchServicePlan`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

    searchFeatures: (data, callback) => axios
    .post(`${adminUrl}Features/searchFeatures`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),


  // get all PricingStructure
  getAllPricingStructure: (data, callback) => axios
    .post(`${adminUrl}pricingstructure/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all serviceprocess
  getAllServiceInfos: (data, callback) => axios
    .post(`${adminUrl}ServiceInfo/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  
  // get all testimonial
  getAllTestimonial: (data, callback) => axios
    .post(`${adminUrl}Testimonial/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // get all userservice
  getAllUserService: (data, callback) => axios
    .post(`${adminUrl}UserService/search`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // update user Service
  updateUserService: (data, callback) => axios
    .post(`${adminUrl}UserService/updateData`, data)
    .then((responseData) => {
      console.log('ressss', responseData);
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // updateData common api
  updateData: (url, data, callback) => axios
    .post(`${adminUrl}${url}`, data)
    .then((responseData) => {
      console.log('ressss', responseData);
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // update Brand
  updateBrand: (data, callback) => axios
    .post(`${adminUrl}Brand/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // update user
  updateUser: (data, callback) => axios
    .post(`${adminUrl}User/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // update Blog
  updateBlog: (data, callback) => axios
    .post(`${adminUrl}Blog/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  updateHeader: (data, callback) => axios
    .post(`${adminUrl}AllHeader/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // update before after
  updateBeforeAfter: (data, callback) => axios
    .post(`${adminUrl}AfterBefore/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // update testimonial
  updateTestimonail: (data, callback) => axios
    .post(`${adminUrl}Testimonial/updateData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // save
  saveData: (url, data, callback) => axios
    .post(`${adminUrl}${url}`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  // save user
  createUser: (url, data, callback) => axios
    .post(`${adminUrl}${url}`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // save

  // edit brand
  getOne: (url, callback) => axios
    .get(`${adminUrl}${url}`)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  getOneData: (url, callback) => axios
    .get(`${adminUrl}${url}`)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // delteAll
  deleteAll: (url, obj, callback) => axios
    .post(`${adminUrl}${url}`, {
      _id: obj._id,
    })
    .then((responseData) => {
      callback(responseData);
    }),

  // get dashboard Details
  getDashboard: (data, callback) => axios
    .post(`${adminUrl}UserKyc/getDashboard`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  // pending kyc

  getAllKyc: (data, callback) => axios
    .post(`${adminUrl}UserKyc/getAllKycDetails`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  getOneUser: (data, callback) => axios
    .post(`${adminUrl}User/findOneUser`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  getOneKyc: (data, callback) => axios
    .post(`${adminUrl}UserKyc/getOneKycDetails`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  saveData1: (data, callback) => axios
    .post(`${adminUrl}User/editProfile`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  acceptRejectKyc: (data, callback) => axios
    .post(`${adminUrl}UserKyc/acceptRejectKYC`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  acceptRejectDeposit: (data, callback) => axios
    .post(`${adminUrl}Tether/acceptRejectDeposit`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  acceptDeposit: (data, callback) => axios
    .post(`${adminUrl}Tether/acceptDeposit`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  acceptRejectWithdraw: (data, callback) => axios
    .post(`${adminUrl}Tether/acceptRejectWithdraw`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  rejectAndRefund: (data, callback) => axios
    .post(`${adminUrl}Tether/rejectAndRefund`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

  deleteUser: (obj, callback) => axios
    .post(`${adminUrl}User/deleteUser`, {
      // eslint-disable-next-line no-underscore-dangle
      _id: obj._id,
    })
    .then((responseData) => {
      callback(responseData);
    }),

  deleteKyc: (obj, callback) => axios
    .post(`${adminUrl}UserKyc/deleteKyc`, {
      // eslint-disable-next-line no-underscore-dangle
      _id: obj._id,
    })
    .then((responseData) => {
      callback(responseData);
    }),
  getAllChangePass: (data, callback) => axios
    .post(`${adminUrl}User/getAllChangePassData`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  saveToken: (data, callback) => axios
    .post(`${adminUrl}Order/saveSymbol`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getAllToken: (data, callback) => axios
    .post(`${adminUrl}Order/getAllSymbol`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getOneScript: (data, callback) => {
    // eslint-disable-next-line no-console
    console.log('data in ui', data);
    return axios
      .post(`${adminUrl}Order/getOneScript`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      });
  },
  saveScript: (data, callback) => axios
    .post(`${adminUrl}Order/saveScript`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getAllScriptData: (data, callback) => axios
    .post(`${adminUrl}Order/getAllScript`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getToken: (data, callback) => axios
    .post(`${adminUrl}Order/getSymbol`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  changeStatus: (data, callback) => axios
    .post(`${adminUrl}Order/editScript`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getuserOrders: (data, callback) => axios
    .post(`${adminUrl}User/getuserOrders`, data)
    .then((responseData) => {
      // console.log("response", responseData)
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getUserWallet: (data, callback) => axios
    .post(`${adminUrl}User/getUserWalletWitoutAccesstoken`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getWithdrawStatement: (data, callback) => axios
    .post(`${adminUrl}Tether/getWithdrawStatement`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getDepositeStatement: (data, callback) => axios
    .post(`${adminUrl}Tether/getDepositStatement`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getAllDeposits: (data, callback) => axios
    .post(`${adminUrl}Tether/getAllDepositStatement`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getAllWithdraws: (data, callback) => axios
    .post(`${adminUrl}Tether/getAllWithdrawStatement`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getOneDeposit: (data, callback) => axios
    .post(`${adminUrl}Tether/getOneDeposit`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),
  getOneWithdraw: (data, callback) => axios
    .post(`${adminUrl}Tether/getOneWithdraw`, data)
    .then((responseData) => {
      callback(responseData);
    })
    .catch((err) => {
      callback(err);
    }),

};
