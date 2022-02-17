import React from "react";
import userApi from "../api/userApi";
import accountApi from "../api/accountApi";

interface Props {
  users: any;
  account: any;
}

const Profile: React.FC<Props> = ({ users, account }) => {
  const [clientAccount, setClientAccount] = React.useState<any>(account);
  // const [clientAccountTier, setClientAccountTier] = React.useState<any>(
  //   window?.localStorage?.getItem("tier") || "none"
  // );
  // React.useEffect(() => {
  //   const clientValidation = async () => {
  //     if (tier === clientAccountTier) return;

  //     const clientAcc = await accountApi.fetch();
  //     setClientAccount(clientAcc);
  //     setClientAccountTier(clientAcc?.tier);
  //     window.localStorage.setItem("tier", clientAcc?.tier);
  //   };

  //   clientValidation();
  // });
  return (
    <div>
      <div className="text-3xl font-bold my-4 ">
      <h2>Account: {account.username}</h2>
      <h2>Tier: {account.tier}</h2>
      </div>
      <ul>
        {users.map((el: any) => (
          <li key={el.id}>
            {el.name} - {el.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

export const getStaticProps = async (ctx: any) => {
  console.warn({ msg: "usando esto", state: true });
  // Get posts from Airtable
  const [respose1, response2] = await Promise.all([
    userApi.fetch(),
    accountApi.fetch(),
  ]);

  if (ctx.params.profile.includes('@activate')) {
    const account = await accountApi.fetch();
    //tier = account?.tier;
    console.warn({msg: "Revalidando la cuenta"})

    // // return {
    // //   props: {
    // //     users: respose1,
    // //     tier: response2,
    // //     revalidate: 0,
    // //   },
    // // };
  }

  return {
    props: {
      users: respose1,
      account: response2,
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    // Map slugs as params
    paths: [],
    // Build not relevant ones on demand
    fallback: "blocking",
  };
};
