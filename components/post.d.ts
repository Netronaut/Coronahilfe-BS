export interface PostData {
  title: string;
  author?: string;
  publishDate?: string;
}

export interface Post {
  data: PostData;
  content: string;
}
