import axios from "axios";
import { useEffect, useState } from "react";
import { IResponse } from "../types/apiResponse.type";
import IPostData from "../types/post.type";

const usePostsFetch = (query: string, page: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<IPostData[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextPageId, setNextPageId] = useState("");

  useEffect(() => {
    setPosts([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();
    const url = "https://larecipe.com/api/recipes";
    const params = {
      q: query,
      page,
    };

    axios({
      method: "GET",
      url,
      params,
      signal: controller.signal,
    })
      .then(({ data: { posts, page, has_next_page } }: IResponse) => {
        setPosts((prevPosts) => [...prevPosts, ...posts]);
        setHasNextPage(has_next_page);
        setLoading(false);
        setNextPageId(page);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setLoading(false);
        setError(true);
      });

    return () => controller.abort();
  }, [query, page]);

  return { posts, nextPageId, loading, error, hasNextPage };
};

export default usePostsFetch;
