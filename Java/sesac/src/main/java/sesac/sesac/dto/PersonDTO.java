package sesac.sesac.dto;

public class PersonDTO {
    private String id;
    private String name;
    private String pw;
    private String nickname;
    private int no;
    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}
    public String getPw(){return pw;}
    public void setPw(String pw){this.pw = pw;}
    public int getNo(){return this.no;}
    public void setNo(int no) {this.no = no;}
    public String getNickname(){return nickname;}
    public void setNickname(String nickname){this.nickname = nickname;}
}
