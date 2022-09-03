import IPostData from "./post.type";

interface IResponseData {
  posts: IPostData[];
  page: string;
  has_next_page: boolean;
}

export interface IResponse {
  data: IResponseData;
}
