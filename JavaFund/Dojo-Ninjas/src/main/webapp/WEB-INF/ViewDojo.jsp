<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${dojo.name}"></c:out></title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="style.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<h1> <c:out value="${dojo.name}"></c:out> Dojo </h1>
	
	<c:forEach var="ninja" items="${dojo.ninjas}">
		<h2>First Name: <c:out value="${ninja.firstName}"></c:out></h2>
		<h2>Last Name: <c:out value="${ninja.lastName}"></c:out></h2>
		<h2>Age: <c:out value="${ninja.age}"></c:out></h2>
	</c:forEach>

</body>
</html>