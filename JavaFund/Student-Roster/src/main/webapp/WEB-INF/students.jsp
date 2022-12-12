<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title><c:out value="${dorm.name}"></c:out></title>
</head>
<body>

<h1><c:out value="${dorm.name}"></c:out> Students</h1>
<p><a href="/dorms">Dashboard</a></p>

<form action="/dorms/${dormId}" method="post">

	<table>
	    <thead>
	        <tr>
	            <td>	
	            	Students:				
					<select name="studentId" id="studentId" class="input">
	                    <c:forEach var="student" items="${allStudents}">
	                    	<c:if test = "${student.dorm==null}">
						       <option value="${student.id}">${student.name}</option>
						    </c:if>
	                        <c:if test = "${student.dorm!=null}">
						       <option value="${student.id}">${student.name} (${student.dorm.name})</option>
						    </c:if>
	                    </c:forEach>
	                </select>
	            </td>
	            <td><input class="input" class="button" type="submit" value="Add"/></td>
	        </tr>
	    </thead>
	</table>
</form>
<hr>
<table>
	<thead>
        <tr>
            <th>Student</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
		<c:forEach var="student" items="${students}">
			<tr>
				<td><c:out value="${student.name}"></c:out></td>
				<td><a href="/students/remove/${student.id}">Remove</a></td>
			</tr>	
		</c:forEach>
    </tbody>
</table>
</body>
</html>