import React, {useState} from "react";

// Icons
import { RiShieldCheckLine } from "react-icons/ri";
 

const AccesDates = () => {

    return (
        <>
         <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Acces Dates</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Email</h5>
              <p className="text-gray-500 text-sm">dash@example.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Change email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Password</h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Change password
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Asegura tu cuenta</h5>
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you'll need to provide a 6 digit
              code
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Activar
            </button>
          </div>
        </div>
      </div>
      
      </>
    )
}

export default AccesDates;