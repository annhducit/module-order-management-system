package project.moduleordermanagementsystembe.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.*;

@RequestMapping("/images")
@Controller
public class ImageController {

    @GetMapping("{imageName}")
    public void getImage(@PathVariable String imageName, HttpServletResponse response) throws IOException, FileNotFoundException {
        response.setContentType("image/jpeg");

        String imagePath = "E:\\Career\\Project\\module-order-management-system\\module-order-management-system-BE\\src\\main\\resources\\static\\" + imageName;
        FileInputStream image = new FileInputStream(imagePath);
        BufferedInputStream bin = new BufferedInputStream(image);
        BufferedOutputStream bout = new BufferedOutputStream(response.getOutputStream());

        int ch;
        while((ch = bin.read()) != -1) {
            bout.write(ch);
        }

        bin.close();
        image.close();
        bout.close();
    }
}
