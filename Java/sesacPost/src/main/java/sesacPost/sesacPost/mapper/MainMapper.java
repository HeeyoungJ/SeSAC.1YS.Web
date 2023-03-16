package sesacPost.sesacPost.mapper;

import org.apache.ibatis.annotations.*;
import sesacPost.sesacPost.domain.Post;

@Mapper
public interface MainMapper {
    @Insert("insert into post(title,writer,post) values(#{title},#{writer}, #{post})")
    void insertPost(Post post);

//    @Select("Select * from person where id=#{id} and pw=#{pw} limit 1")
//    Person getPerson(String id, String pw);
//
//    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
//    void updatePerson(Person person);
//
//    @Delete("delete from person where id=#{id}")
//    void deletePerson(String id);
}
