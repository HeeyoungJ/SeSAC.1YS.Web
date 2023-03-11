package sesac.spring.api.sesacapi.controller;

import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    //name 속성으로 넘어오는 것을 변수에 담아라
    //둘 이름이 다를 경우 (@RequestParam("name") String name2) 이렇게 작성
    //잘 들어오는지 확인하기 : Model에 담아 html에 전달해주기
    public String getAPI1(@RequestParam(value = "name") String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response2")
    //required = false는 값을 보내도되고 안보내도 된다는 뜻.
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }
    //변수 이름이 다를 경우, @PathVariable ("age") String abc와 같이 표기
    //주소를 여러개 갖고 싶을 경우, 배열로 넣어줘야함.
    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable ("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }
    //주소를 여러개 갖고 싶을 경우, 배열로 넣어줘야함.
    //required=false도 설정해주어야함.
    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable (value="age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }
    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody //동적 폼전송시, 많이 사용함. api로 이용할 수 있다.
    public String postAPI3(@RequestParam(required = false) String name){
        return "이름은 : " + name;
    }
    //-------------------------------Test-------------------------------
    @GetMapping("/introduce/{name}")
    public String getTest1(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @GetMapping("/introduce2")
    public String getTest2(@RequestParam String name, @RequestParam String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }
    @PostMapping("/introduce3")
    public String postTest3(
            @RequestParam String name, @RequestParam String gender, @RequestParam String year,
            @RequestParam String month, @RequestParam String date, @RequestParam String list, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("date", date);
        model.addAttribute("list", list);
        return "response";
    }
    @GetMapping("/introduce5/{홍길동}")
    public String getAPI10(@PathVariable(value = "홍길동") String name, Model model){
        model.addAttribute("홍길동", name);
        return "response";
    }

    @GetMapping("dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("dto/response3")
    @ResponseBody
    public String dtoAPI3( @RequestBody UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @GetMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @GetMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody  UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    //Axios - DTO
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
}
