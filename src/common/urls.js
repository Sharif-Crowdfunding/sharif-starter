const API_BASE_URL = "http://localhost:8000";
export const React_Base_URL = process.env.NODE_ENV === "production" ? "" : "";

const urls = {
  auth: {
    register: () => `${API_BASE_URL}/user/register/`,
    login: () => `${API_BASE_URL}/user/login/`,
    logout: () => `${API_BASE_URL}/user/logout/`,
    profile: () => `${API_BASE_URL}/user/info/`,
  },
  wallet: {
    info: () => `${API_BASE_URL}/wallet/info/`,
  },
  project: {
    create: () => `${API_BASE_URL}/project/create/`,
    getUserProjects: () => `${API_BASE_URL}/project/my/`,
    fund: (id) => `${API_BASE_URL}/project/fund/${id}/`,
    // report: () => `${API_BASE_URL}/project/report/`,
    // upload: () => `${API_BASE_URL}/project/upload/`,
    release: (id) => `${API_BASE_URL}/project/release/${id}/`,
    cancel: (id) => `${API_BASE_URL}/project/cancel/${id}/`,
  },
  auction: {
    create: () => `${API_BASE_URL}/auction/create/`,
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
