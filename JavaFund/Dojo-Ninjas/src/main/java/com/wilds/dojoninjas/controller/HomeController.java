package com.wilds.dojoninjas.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.wilds.dojoninjas.models.Dojo;
import com.wilds.dojoninjas.models.Ninja;
import com.wilds.dojoninjas.services.DojoService;
import com.wilds.dojoninjas.services.NinjaService;

@Controller
public class HomeController {
	
	@Autowired
	DojoService dojoService;
	
	@Autowired
	NinjaService ninjaService;

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "index.jsp";
	}
	
	@GetMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "NewDojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String addNewDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "NewDojo.jsp";
		}else {
			dojoService.createDojo(dojo);
			return "redirect:/";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String newDojo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojoService.findDojo(id));
		return "ViewDojo.jsp";
	}
	
	@GetMapping("/ninjas/new")
	public String newNinja(
			Model model,
			@ModelAttribute("ninja") Ninja ninja) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "NewNinja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String addNewNinja(
			Model model,
			@Valid @ModelAttribute("ninja") Ninja ninja,
			BindingResult result) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", dojoService.allDojos());
			return "NewNinja.jsp";
		}else {
			ninjaService.createNinja(ninja);
			return "redirect:/";
		}
		
	}
}
