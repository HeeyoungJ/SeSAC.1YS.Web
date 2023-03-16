package sesac.sesac.domain;
//구조 변경은 여기서 변경하면됨.
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue
    private  int id; // id primary key auto_increment,

    @Column(length = 20, nullable = false)
    // name varchar(20) not null
    private String name;

    @Column(length = 20, nullable = false)
    private String nickname;
}
