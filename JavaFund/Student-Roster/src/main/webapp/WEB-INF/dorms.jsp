<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title>Dorms</title>
</head>
<body>

<h2 class="center">Dorms</h2>
<p><a href="/dorms/new">Add a new dorm</a></p>
<p><a href="/students/add">Add a new student</a></p>


<table>
    <thead>
        <tr>
            <th>Dorm</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
		<c:forEach var="dorm" items="${dorms}">
			<tr>
				<td><c:out value="${dorm.name}"></c:out></td>
				<td><a href="/dorms/${dorm.id}">See Students</a></td>
			</tr>	
		</c:forEach>
    </tbody>
</table>
</body>
</html>