<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Form</title>
</head>
<body>
<form action="/results">
<h1>
Search:
<input type="text" name="keyword"/>
</h1>
<button type="submit" value="submit">Submit</button>
</form>

</body>
</html>