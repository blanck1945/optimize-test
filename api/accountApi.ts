import { base } from "../fetch/airtable/airtable";

// to make post meaningful.
export const getMinifiedItem = (user: any) => {
  return {
    username: user.fields.username,
    tier: user.fields.tier,
    revalidate: user.fields.revalidate
  };
};

const accountApi = {
  fetch: async () => {
    try {
      const response = await base("account")
        .select({
          filterByFormula: 'username = "Dogs44"',
        })
        .firstPage();

      const formattedUsers = response.map((user) => getMinifiedItem(user));

      return formattedUsers[0];
    } catch (err) {
      console.error({ err });
    }
  },
  updateTier: async () => {
    const updatedAccount = await base("account").update([
      {
        id: "recu4VlBnh3AvFjzA",
        fields: {
          tier: "commercial",
          revalidate: true
        },
      },
    ]);

    return updatedAccount
  },
};

export default accountApi;
