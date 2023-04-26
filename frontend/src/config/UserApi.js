const UserApi = {
  getUserData: async () => {
    const res = await fetch("http://localhost:8000/auth/google/callback", {
      method: "GET",
    });
    return res.json();
  },
};

module.exports = { UserApi }; 
