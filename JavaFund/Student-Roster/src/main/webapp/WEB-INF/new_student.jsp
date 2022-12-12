<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title>New Student</title>
</head>
<body>

<h1>New Student</h1>
<p><a href="/dorms">Dashboard</a></p>

<form:form action="/students/add" method="post" modelAttribute="student">

	<table>
	    <thead>
	    	<tr>
	            <td class="float-left">Name:</td>
	            <td class="float-left">
	            	<form:errors path="name" class="text-danger"/>
					<form:input class="input" path="name"/>
	            </td>
	        </tr>
	        <tr>
	            <td class="float-left">Select Dorm:</td>
	            <td class="float-left">
					
					<form:select path="dorm" name="" id="" class="form-select">
	                    <c:forEach var="dorm" items="${dorms}">
	                        <option value="${dorm.id}">${dorm.name}</option>
	                    </c:forEach>
	                </form:select>
	            </td>
	        </tr>
	        <tr>
	        	<td colspan=2><input class="input" class="button" type="submit" value="Add"/></td>
	        </tr>
	    </thead>
	</table>
</form:form>
</body>
</html>