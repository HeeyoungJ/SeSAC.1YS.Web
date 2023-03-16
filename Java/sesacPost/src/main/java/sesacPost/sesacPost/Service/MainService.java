package sesacPost.sesacPost.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacPost.sesacPost.domain.Post;
import sesacPost.sesacPost.dto.PostDTO;
import sesacPost.sesacPost.mapper.MainMapper;

@Service
public class MainService {
    @Autowired
    MainMapper mainMapper;

    public void insertPost(PostDTO postDTO){
        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setWriter(postDTO.getWriter());
        post.setPost(postDTO.getPost());

        mainMapper.insertPost(post);
    }
}
