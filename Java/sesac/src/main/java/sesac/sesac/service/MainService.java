package sesac.sesac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.domain.User;
import sesac.sesac.domain.UserEntity;
import sesac.sesac.dto.UserDTO;
import sesac.sesac.mapper.MainMapper;
import sesac.sesac.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;
    public List<UserDTO> getUserList(){
        List<UserEntity> result = userRepository.findAll();
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
    public void addUser(UserEntity user){userRepository.save(user);}

    public ArrayList<UserDTO> getUserName(String name){
        Optional<UserEntity> user = userRepository.findByName(name);
        ArrayList<UserDTO> userList = new ArrayList<>();

        if(user.isPresent()){ //Optional 로 감싸진 객체가 null인지 아닌지 확인
            UserDTO dto = new UserDTO();
            dto.setId(user.get().getId());
            dto.setNo(0);
            dto.setName(user.get().getName());
            dto.setNickname(user.get().getNickname());
            userList.add(dto);
        }
        return userList;
    }
}
