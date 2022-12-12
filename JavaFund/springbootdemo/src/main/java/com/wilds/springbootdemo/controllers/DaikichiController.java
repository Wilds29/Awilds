package com.wilds.springbootdemo.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DaikichiController {

	public DaikichiController() {
		// TODO Auto-generated constructor stub
	}
	
	@RequestMapping("/daikichi")
	public String daiTest() {
		return "welcome";
	}
	
	@RequestMapping(value="/daikichi/today", method = RequestMethod.GET)
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	
	@RequestMapping(value="/daikichi/tomorrow", method = RequestMethod.GET)
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	@RequestMapping("/daikichi/travel/{location}")
	public String location(@PathVariable("location") String location){
    	return "Congratulations! You will soon travel to " + location + "!";
    }
	
	@RequestMapping("/daikichi/lotto/{number}")
	public String location(@PathVariable("number") int number){
    	if (number % 2 == 0) {
    		return "You will take a grand journey in the near future, but be weary of tempting offers.";
    	} else {
    		return "You have enjoyed the fruits of your labor but now is a great time with family and friends.";
    	}
    }

}
