package com.wilds.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HomeController {

	@GetMapping("/home")
	public String setCount(HttpSession Session, Model model) {
		if(Session.getAttribute("count") == null) {
		Session.setAttribute("count", 0);
		}
		int tempCount = (int)Session.getAttribute("count");
		tempCount++;
		Session.setAttribute("count", tempCount);
		return "counterPage.jsp";
	}
	
	@GetMapping("/get/count")
	public String getCount() {
		return "countGet.jsp";
	}
	
	@GetMapping("/search")
	public String searchForm() {
		return "searchForm.jsp";
	}
	
	@GetMapping("/results")
	public String displayResults(@RequestParam("keyword")String keyword, Model model) {
		model.addAttribute("results", keyword);
		return "results.jsp";
	}
	
	@GetMapping("/review/form")
	public String renderReviewForm() {
		return "postMethodForm/reviewForm.jsp";
	}
	
	@RequestMapping(value="/review/process", method=RequestMethod.POST)
	public String formProcess(@RequestParam(value="pickNum") Integer pickNum,
							  @RequestParam(value="pickCity") String pickCity,
							  @RequestParam(value="pickPerson") String pickPerson,
							  @RequestParam(value="pickHobby") String pickHobby,
							  @RequestParam(value="pickThing") String pickThing,
							  @RequestParam(value="pickWords") String pickWords,
							  HttpSession session) {
							  
		session.setAttribute("pickNum", pickNum);
		session.setAttribute("pickCity", pickCity);
		session.setAttribute("pickPerson", pickPerson);
		session.setAttribute("pickHobby", pickHobby);
		session.setAttribute("pickThing", pickThing);
		session.setAttribute("pickWords", pickWords);
							  	  
		return "redirect:/review/show";
	}
	
	@RequestMapping("/review/show")
	public String showOmikuji() {
		
//		model.addAttribute("pickNum", pickNum);
//		model.addAttribute("pickCity", pickCity);
//		model.addAttribute("pickPerson", pickPerson);
//		model.addAttribute("pickHobby", pickHobby);
//		model.addAttribute("pickThing", pickThing);
//		model.addAttribute("pickWords", pickWords);
		
		return "postMethodForm/displayReviewFrom.jsp";
	}
}
