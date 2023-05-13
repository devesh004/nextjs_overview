import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <div>Dynamic</div>;
};

export default Dynamic;
