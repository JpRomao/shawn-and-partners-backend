<h1>Backend</h1>

<p>Welcome to my backend test, you can run this test as described below</p>

<h2>
  Requirements (if you use Docker and Docker-compose, you can just run
  <i>`docker-compose up`</i> and skip the next two steps. The server will run in
  you localhost:3333)
</h2>

<ul>
  <li>NodeJS: https://nodejs.org/en/</li>
  <li>Insomnia (or other similar tool): https://insomnia.rest/download</li>
</ul>

<h2>How to run</h2>

<ul>
  <li>Clone this repository</li>
  <li>
    Run `yarn` (if you use yarn) or `npm install` to install all dependencies
  </li>
  <li>Run `yarn dev` (if you use yarn) or `npm run dev` to run the server</li>
</ul>

<h2>How to test</h2>

<ul>
  <li>Run `yarn test` (if you use yarn) or `npm run test` to run the tests</li>
</ul>

<h2>How to use</h2>

<ul>
  <li>
    The server will run in you localhost:3333, you can use the insomnia file
    below to test the routes
  </li>
  <li>
    <p>route: `/users?since={number}`</p>
    <p>method: `GET`</p>
    <p>
      description: get all users from github api with id higher than the "since"
      parameter
    </p>
  </li>
  <li>
    <p>route: `/users/{username}`</p>
    <p>method: `GET`</p>
    <p>description: get a user from github api by username</p>
  </li>
  <li>
    <p>route: `/users/{username}/repos`</p>
    <p>method: `GET`</p>
    <p>description: get all repos from a user from github api by username</p>
  </li>
</ul>

[shawn-and-partners-insomnia.zip](https://github.com/JpRomao/shawn-and-partners-backend/files/9999951/shawn-and-partners-insomnia.zip)
