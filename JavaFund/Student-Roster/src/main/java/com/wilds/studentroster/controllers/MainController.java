package com.wilds.studentroster.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.wilds.studentroster.models.Dorm;
import com.wilds.studentroster.models.Student;
import com.wilds.studentroster.services.DormService;
import com.wilds.studentroster.services.StudentService;

@Controller
public class MainController {
	
	@Autowired
	DormService dormService;
	
	@Autowired
	StudentService studentService;

	@GetMapping("/")
	public String index() {
		return "redirect:/dorms";
	}
	
	@GetMapping("/dorms")
	public String dorms(Model model) {
		
		model.addAttribute("dorms", dormService.allDorms());
		
		return "dorms.jsp";
	}
	
	@GetMapping("/dorms/new")
	public String addDorm(@ModelAttribute("dorm") Dorm dorm) {
		return "new_dorm.jsp";
	}
	
	@PostMapping("/dorms/new")
	public String addDorm(@Valid @ModelAttribute("dorm") Dorm dorm, BindingResult result) {
		if(result.hasErrors()) {
			return "new_dorm.jsp";
		}else {
			dormService.addDorm(dorm);
			return "redirect:/dorms";
		}
	}
	
	@GetMapping("/dorms/{id}")
	public String dormStudents(@PathVariable("id") Long id, @ModelAttribute("student") Student student, Model model) {
		List<Student> students = studentService.dormStudents(id);
		List<Student> allStudents = studentService.allStudents();
		model.addAttribute("students", students);
		model.addAttribute("allStudents", allStudents);
		model.addAttribute("dormId", id);
		return "students.jsp";
	}
	
	@RequestMapping("/dorms/{id}")
	public String addStudentToDorm(@PathVariable("id") Long id, @RequestParam(value="studentId", required=false) Long studentID) {
		Student student = studentService.findStudent(studentID);
		studentService.addToDorm(student, dormService.findDorm(id));
		return "redirect:/dorms/{id}";
	}
	
	@GetMapping("/students/add")
	public String addStudent(@ModelAttribute("student") Student student, Model model) {
		List<Student> students = studentService.allStudents();
		model.addAttribute("students", students);
		model.addAttribute("dorms", dormService.allDorms());
		return "new_student.jsp";
	}
	
	@PostMapping("/students/add")
	public String addNewStudent(@Valid @ModelAttribute("student") Student student, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("dorms", dormService.allDorms());
			return "new_student.jsp";
		}else {
			studentService.addStudent(student);
			return "redirect:/dorms/" + student.getDorm().getId();
		}
	}
	
	@RequestMapping("/students/remove/{id}")
	public String removeStudent(@PathVariable("id") Long id) {
		Student student = studentService.findStudent(id);
		Long dormId = student.getDorm().getId();
		studentService.removeFromDorm(student);
		return "redirect:/dorms/" + dormId;
	}
	
}