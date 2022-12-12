<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojos</title>
<!-- for Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>

	<h1>Dojo Locations:</h1>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">Location:</th>
				<th scope="col">Ninjas:</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dojo" items="${dojos}">
				<tr>
					<td><c:out value="${dojo.name}"></c:out></td>
					<td><a href="/dojos/${dojo.id}">View Dojo</a></td>
				</tr>
			</c:forEach>
			<tr>
				<td><a href="/dojos/new">Add a New Dojo</a></td>
				<td><a href="/ninjas/new">Add a New Ninja</a></td>
			</tr>
		</tbody>
	</table>

</body>
</html>