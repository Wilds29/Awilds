package com.wilds.studentroster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wilds.studentroster.models.Dorm;
import com.wilds.studentroster.models.Student;
import com.wilds.studentroster.repository.StudentRepo;

@Service
public class StudentService {
	private final StudentRepo studentRepo;
	
	public StudentService(StudentRepo studentRepo) {
		this.studentRepo = studentRepo;
	}
	
	public List<Student> allStudents() {
		return studentRepo.findAll();
	}
	
	public List<Student> dormStudents(Long dormId) {
		return studentRepo.findByDormIdIs(dormId);
	}
	
	public Student addStudent(Student student) {
		return studentRepo.save(student);
	}
	
	public Student updateStudent(Student student) {
		return studentRepo.save(student);
	}
	
	public void removeFromDorm(Student student) {
		student.setDorm(null);
		studentRepo.save(student);
	}
	
	public void addToDorm(Student student, Dorm dorm) {
		student.setDorm(dorm);
		studentRepo.save(student);
	}
	
	public Student findStudent(Long id) {
		Optional<Student> optionalStudent = studentRepo.findById(id);
		if(optionalStudent.isPresent()) {
			return optionalStudent.get();
		}else {
			return null;
		}
	}
}