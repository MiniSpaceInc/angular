import { Post } from "../../model/Post";

export interface PostService {
    getPosts(): Post[];
}
