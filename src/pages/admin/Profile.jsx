import React, { useState } from "react";
import DatesProfile from "../../components/DashBoard/Profiles/DatesProfile.jsx";
import AccesDates from "../../components/DashBoard/Profiles/AccesDates.jsx";
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const Profile = () => {

  const [enabled, setEnabled] = useState(false);

  return (
    <>
        <DatesProfile/>
  
      {/* Change password */}
     <AccesDates/>
     
      {/* Connected accounts */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Conectar con cuentas</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in you'll need to provide a 4 digit amazing
              code.{" "}
              <Link to="/" className="text-green-400">
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-gray-500 text-sm">
                  Plan properly your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">GitHub</h5>
                <p className="text-gray-500 text-sm">
                  Keep eye on on your Repositories
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Slack</h5>
                <p className="text-gray-500 text-sm">
                  Integrate Projects Discussions
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
        </form>
      </div>
      {/* Email preferences */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">
          Notificaciones por correo electrónico
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id1" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id1" className="text-gray-100">
                Successful Payments
              </label>
              <p className="text-gray-500 text-sm">
                Receive a notification for every successful payment.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id2" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id2" className="text-gray-100">
                Payouts
              </label>
              <p className="text-gray-500 text-sm">
                Receive a notification for every initiated payout.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id3" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id3" className="text-gray-100">
                Customer Payment Dispute
              </label>
              <p className="text-gray-500 text-sm">
                Receive a notification if a payment is disputed by a customer
                and for dispute purposes.
              </p>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Inactive account */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center gap-4 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-yellow-600" />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-100 text-xl mb-2">
              You Are Deactivating Your Account
            </h5>
            <p className="text-gray-500">
              For extra security, this requires you to confirm your email or
              phone number when you reset yousignr password.{" "}
              <Link className="text-blue-500">Learn more</Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
            I confirm my account deactivation
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
            Desactivate account
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
