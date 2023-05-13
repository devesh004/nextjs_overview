//our_domain/news

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/newsDetails">News one</Link>
        </li>
        <li>News two</li>
      </ul>
    </>
  );
};

export default NewsPage;
