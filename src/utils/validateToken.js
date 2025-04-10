export const getValidToken = () => {
  const savedToken = JSON.parse(localStorage.getItem("authData"));
  const currentTime = new Date().getTime();

  if (savedToken && savedToken.token && currentTime < savedToken.expiry) {
    return savedToken.token;
  } else {
    localStorage.removeItem("authData");
    return null;
  }
};
