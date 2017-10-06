$(document).ready(function(){
	$("#btn").on("click",function(){
		var search=$("#sbx").val();
		search=search.replace(/ /g, "_");;
		search=search.toLowerCase();

		if(search=="")
		{
			alert("SEARCH SOMETHING");
		}
		else
		{
			$.getJSON('https://en.wikipedia.org/w/api.php?format=json&generator=allpages&gaplimit=30&gapfrom='+search+'&gapfilterredir=nonredirects&prop=extracts&action=query&prop=extracts&exintro=&exsentences=2&explaintext=&callback=?',function(json){
			var html="";
			var arr = $.map(json.query.pages, function(el) { return el });
			console.log(arr);
				arr.forEach(function(val){
					html+="<div class='container'><div class='jumbotron' style='color:black;font-style:calibri'>"+"<strong>"+'<a href="' + "http://en.wikipedia.org/?curid=" +val.pageid+ '" target="_blank">'+val.title+"</a><br></strong>"+ "<br>" + val.extract + "</div></div>";
					$("p").html(html);
	
				});
			});

		}
	
	});
});
