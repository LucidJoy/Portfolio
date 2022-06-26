import React from "react";

import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://twitter.com/LucidJoyy'
        target='_blank'
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        rel='noopener noreferrer'
      >
        <div>
          <BsTwitter />
        </div>
      </a>

      <a
        href='https://github.com/LucidJoy'
        target='_blank'
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        rel='noopener noreferrer'
      >
        <div>
          <BsGithub />
        </div>
      </a>

      <a
        href='https://www.linkedin.com/in/jyotirmoy-karmakar-848375214/'
        target='_blank'
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        rel='noopener noreferrer'
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
