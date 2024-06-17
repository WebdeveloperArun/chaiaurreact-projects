import React, { useEffect, useState } from 'react'

const Github = () => {
    const[data ,setData] = useState()

    useEffect(() => {
        fetch("https://api.github.com/users/WebdeveloperArun")
        .then(res => res.json())
        .then(data => {
            if (data) {
                 setData(data);
            }
           
        })
    },[])


  return (
    <div className="text-center m-5 bg-orange-200 text-xl flex justify-center items-center">
      <div>
        <img
          className="w-28 rounded-full "
          src={data && data.avatar_url}
          alt="Picture"
        />
      </div>
      <div className="flex flex-col">
        <p> Github Name: {data && data.name} </p>
        <p> Followers: {data && data.followers} </p>
      </div>
    </div>
  );
}

export default Github
