export const filterUsersByQuery = (users, query) => {
  const queryLowercase = query.toLowerCase();
  return users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(queryLowercase) ||
      user.last_name.toLowerCase().includes(queryLowercase) ||
      user.email.toLowerCase().includes(queryLowercase)
  );
};
