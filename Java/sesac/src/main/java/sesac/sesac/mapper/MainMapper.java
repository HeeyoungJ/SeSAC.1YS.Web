package sesac.sesac.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.sesac.domain.User;

import java.util.List;

@Mapper

public interface MainMapper {
    List<User> retrieveAll();
    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(User user);
}
