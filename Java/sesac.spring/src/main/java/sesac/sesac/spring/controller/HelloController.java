package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {

//    @GetMapping("/hi") // Nodejs : app.get = 해당 url 접속시, 아래 함수 실행.
//    public String getHi(Model model){
//        model.addAttribute("msg", "안녕하세요!");
//        model.addAttribute("utext", "<strong>utext입니다.</strong>");
//        // res.render("hi", model); //hi.html 파일에 model 값 보낼 수 있듯이
//
//        return "hi"; //res.render("hi") = templates/hi.html 파일을 실행.
//    }
//
//    @GetMapping("/Test")
//    public  String getAge(Model model){
//        model.addAttribute("age", 9);
//
//        return "Test";
//    }
    @GetMapping("/people")
    public String getPeople(Model model){
        ArrayList<Person> people = new ArrayList<Person>();
        people.add(new Person("이름:1", 10));
        people.add(new Person("이름:2", 10));
        people.add(new Person("이름:3", 10));
        people.add(new Person("이름:4", 10));

        model.addAttribute("people",people);
        return "people";
    }
}
