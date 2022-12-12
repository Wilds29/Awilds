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
	<div class="container my-5">
		<form action="/review/process" method="post">
			<div class="form-group" >
				<label for="pickNum">Pick any number from 5 to 25</label> 
				<input
					name="pickNum" type="number" class="form-control" class="form-number text-muted">
			</div>
			<div class="form-group">
				<label for="pickCity">Enter the name of any city</label> 
				<input
					type="text" class="form-control" name="pickCity"
					placeholder="Nairobi">
			</div>
			<div class="form-group">
				<label for="pickPerson">Enter the name of any real person</label> 
				<input
					type="text" class="form-control" name="pickPerson"
					placeholder="Bob Dylan">
			</div>
			<div class="form-group">
				<label for="pickHobby">Enter professional endeavor or hobby:</label> 
				<input
					type="text" class="form-control" name="pickHobby"
					placeholder="Selling Origamis">
			</div>
			<div class="form-group">
				<label for="pickThing">Enter any type of living thing</label> 
				<input
					type="text" class="form-control" name="pickThing"
					placeholder="Ferret">
			</div>
			<div class="form-group">
				<label for="pickWords">Say something nice to someone</label> 
				<textarea
					type="text" class="form-control" name="pickWords"
					>You do not realize how happy you make others</textarea>
			</div>
			<br>
			<p>Send and show a friend</p>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</body>
</html>