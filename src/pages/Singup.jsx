import React from 'react'

export default function Singup() {
  return (
    <div className="bg-[#e6e6e6]">
      <div className="container">
        <div>Singup</div>
        <div>Axios instance</div>
        <div>use react-hook-form</div>
        <div>Name field is required with min 3 char validation</div>
        <div>Email needs to be validated</div>
        <div>
          Password needs to be min 8 character including numbers, lower case,
          upper case and special chars
        </div>
        <div>Password needs to be matched to second pass input field</div>
        <div>
          Role field should be listed in selection box and data needs to be
          fetched by GET request to endpoint: “/roles”
        </div>
        <div>customer should be selected by default</div>
      </div>
    </div>
  )
}
