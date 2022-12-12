<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<title>Insert title here</title>
</head>
<body>
<h1>Fruit Store</h1>

<table class="table table-striped table-bordered">
  <thead>
    <tr>
     <th scope="col">Name</th>
     <th scope="col">Price</th>
    </tr>
  </thead>

<c:forEach var="item" items="${fruits}">
   <tr>
   <td> <c:out value="${item.getName()}"/></td>
   <td> <c:out value="${item.getPrice()}"/></td>
</tr>
</c:forEach>



</table>

</body>
</html>