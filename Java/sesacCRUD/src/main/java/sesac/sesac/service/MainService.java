package sesac.sesac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.domain.User;
import sesac.sesac.dto.UserDTO;
import sesac.sesac.mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;
    public List<UserDTO> getUserList(){
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        System.out.println(result.size());

        for(int i = 0; i < result.size(); i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return  users;

    }
    public void addUser(User user){mainMapper.insertUser(user);}
}
