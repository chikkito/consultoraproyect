package com.consultora.app.apicontroller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
@RestController
@RequestMapping(value = "/api/v1")
public class ApiController {

	
	@GetMapping( "/api")
	ResponseEntity<List<String>> getAll() {
		List<String> datos = new ArrayList<String>();
		datos.add("DATP1");
		datos.add("dato2");
		datos.add("d4t03");
		datos.add("data");
		return ResponseEntity.ok().body(datos);
	}
}
