// pages/index.js
import React from 'react';

export default function Home() {
  // 注意：handleSubmit 不再需要，因为我们直接通过表单进行跳转

  return (
    <div>
      <h1>WHOIS Query</h1>
      <form method="GET" action="/results" target="_blank">
        <input name="query" type="search" placeholder="Enter domain (e.g., example.com)" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

