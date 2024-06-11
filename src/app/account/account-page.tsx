import AccountForm from "@/components/forms/account-form";

const AccountPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      {/* hero */}
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex flex-col py-10 justify-start items-start space-y-5">
        <h4 className="font-black md:text-5xl text-3xl ">SETTINGS</h4>
        {/* HACK: Should have buttom line */}
        <div className="flex flex-row space-x-5">
          <p> ACCOUNT </p>
          <p>BILLING</p>
        </div>
      </div>

      {/* forms */}
      <AccountForm />
    </div>
  );
};

export default AccountPage;
