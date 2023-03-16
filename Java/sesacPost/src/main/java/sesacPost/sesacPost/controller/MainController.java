package sesacPost.sesacPost.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sesacPost.sesacPost.dto.PostDTO;

@Controller
@RequestMapping("/Post")
public class MainController {
    @GetMapping("/upload")
    public String getUpload(){return "Upload";}

    @PostMapping("/upload")
    @ResponseBody
    public String postUpload(@RequestBody PostDTO postDTO){

    }

}
