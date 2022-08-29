const API_BASE_URL = "http://localhost:8080";
export const React_Base_URL = process.env.NODE_ENV === "production" ? "" : "";

const urls = {
  auth: {
    register: () => `${API_BASE_URL}/register`,
    login: () => `${API_BASE_URL}/login`,
    logout: () => `${API_BASE_URL}/logout`,
    profile: () => `${API_BASE_URL}/api/profile`,
  },
  project: {
    create: () => `${API_BASE_URL}/project/create`,
    getUserProjects: () => `${API_BASE_URL}/project/list`,
    getProjectToken: () => `${API_BASE_URL}/project/token`,
    addAdditionalTokenInfo: () => `${API_BASE_URL}/project/addTokenInfo`,
    finish: () => `${API_BASE_URL}/project/finish`,
    release: () => `${API_BASE_URL}/project/release`,
    cancel: () => `${API_BASE_URL}/project/cancel`,
  },
  sale: {
    getProjects: () => `${API_BASE_URL}/sale/projects`,
    getProjectById: () => `${API_BASE_URL}/sale/projects/get`,
    getProjectToken: () => `${API_BASE_URL}/sale/projects/token`,
    buyToken: () => `${API_BASE_URL}/sale/participate`
  },
  common: {},
};

export default urls;
