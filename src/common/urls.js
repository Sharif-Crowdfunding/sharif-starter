const API_BASE_URL = "http://localhost:8000";
export const React_Base_URL = process.env.NODE_ENV === "production" ? "" : "";

const urls = {
  auth: {
    register: () => `${API_BASE_URL}/user/register/`,
    login: () => `${API_BASE_URL}/user/login/`,
    logout: () => `${API_BASE_URL}/user/logout/`,
    profile: () => `${API_BASE_URL}/user/info/`,
  },
  wallet:{
    details: () => `${API_BASE_URL}/wallet/info/`
  },
  project: {
    create: () => `${API_BASE_URL}/project/create`,
    getUserProjects: () => `${API_BASE_URL}/project/list`,
    getProjectToken: () => `${API_BASE_URL}/project/token`,
    addAdditionalTokenInfo: () => `${API_BASE_URL}/project/addTokenInfo`,
    finish: () => `${API_BASE_URL}/project/finish`,
    report: () => `${API_BASE_URL}/project/report`,
    upload: () => `${API_BASE_URL}/project/upload`,
    release: () => `${API_BASE_URL}/project/release`,
    cancel: () => `${API_BASE_URL}/project/cancel`,
  },
  sale: {
    getProjects: () => `${API_BASE_URL}/user/info/`,
    getProjectById: () => `${API_BASE_URL}/sale/projects/get`,
    getProjectToken: () => `${API_BASE_URL}/sale/projects/token`,
    buyToken: () => `${API_BASE_URL}/sale/participate`,
  },
  common: {
    joinWaitlist: () => `${API_BASE_URL}/join`,
    image: (address) => `${API_BASE_URL}/${address}`,
  },
};

export default urls;
