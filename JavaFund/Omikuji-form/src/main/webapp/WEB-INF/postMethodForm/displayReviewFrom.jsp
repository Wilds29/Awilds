<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col bg-primary my-5">
				<h3>In <c:out value="${pickNum}" /> years, you will live in <c:out value="${pickCity}" /> with <c:out value="${pickPerson}" /> as your roommate, selling <c:out value="${pickHobby}" /> for a living. The next time you see a <c:out value="${pickThing}" />, you will have good luck. Also, <c:out value="${pickWords}" />.</h3>
			</div>
		</div>
		<a class="btn btn-lg btn-primary" href="/review/form">Go Back</a>
	</div>
</body>
</html>