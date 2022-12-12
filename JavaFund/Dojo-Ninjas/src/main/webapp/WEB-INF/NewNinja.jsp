<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Ninja</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="style.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<h1>Add New Ninja</h1>
	
	<form:form action="/ninjas/new" method="POST" modelAttribute="ninja">
		<form:label path="firstName">First Name:</form:label>
		<form:input type="text" path="firstName"/>
		<form:label path="lastName">Last Name:</form:label>
		<form:input type="text" path="lastName"/>
		<form:label path="age">Age:</form:label>
		<form:input type="number" path="age"/>
		<form:select path="dojo">
			<c:forEach var="dojo" items="${dojos}">
				<option value="${dojo.id}">${dojo.name}</option>
			</c:forEach>
		</form:select>

		<input type="submit" value="Add Player">
	</form:form>

</body>
</html>