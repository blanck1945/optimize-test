import {base} from "../fetch/airtable/airtable";

// to make post meaningful.
export const getMinifiedItem = (user:any) => {
    return {
      id: user.fields.id,
      name: user.fields.name,
      email: user.fields.email
    };
  };
  

const userApi = {
  fetch: async () => {
    try {

      const response = await base('users').select().firstPage();

      const formattedUsers = response.map((user) => getMinifiedItem(user));
      
      const sortedUsers = formattedUsers.sort((a,b) => (a.id - b.id))

      return sortedUsers;
    } catch (err) {
      console.error({err});
    }
  },
};

export default userApi;