package sesac.sesac.controller;

import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.domain.Person;
import sesac.sesac.dto.PersonDTO;
import sesac.sesac.service.PersonService;
@Controller
@RequestMapping("/person")
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/register")
    public String getRegister(){
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){
        personService.insertPerson(personDTO);
    return "";
    }
    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);
        if (person == null)
//            ;
            return false; else
                return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model){
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        return "info";
    }
    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }
    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestParam PersonDTO personDTO){
        personService.deletePerson(personDTO);
        return "";
    }
}
