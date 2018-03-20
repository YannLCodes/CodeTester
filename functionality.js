
/*==========Top bar controls==========*/
$(function()
		{
		  		$("#languages").controlgroup();
				
				$("#html").click(function()
					{
						$("#inhtml").toggle();
					});

				$("#css").click(function()
					{
						$("#incss").toggle();
					});
				
				$("#js").click(function()
					{
						$("#injs").toggle();
					});
				
				$("#output").click(function()
					{
						$("#display").toggle();
					});		
			
		/*========================================*/

		/*==========Text fields==========*/


			$("#inhtml,#incss,#injs,#display").height($(window).height() - $("#header").height()-20);

			$(function()
				{
					$("#inhtml").resizable(
						{
							alsoResize:"#htmlScript"
						});
					$("#htmlScript").resizable(
						{
								containment:"#inhtml"
						});

					$("#incss").resizable(
						{
							alsoResize:"#cssScript"
						});
					$("#cssScript").resizable(
						{
								containment:"#incss"
						});

					$("#injs").resizable(
						{
							alsoResize:"#jsScript"
						});
					$("#jsScript").resizable(
						{
								containment:"#injs"
						});
				});
		/*========================================*/

		/*==========Display area functions==========*/


		$("#htmlScript,#cssScript,#jsScript").keyup(function()
				{
					var htmlScript = $("#htmlScript").val();	// saves HTML user input in a variable
					var cssScript = $("#cssScript").val();		// saves CSS user input in a variable
					var jsScript = $("#jsScript").val();		// saves JS user input in a variable
					
					$("iframe").contents().find("html").html("<html> <head> <style type='text/css'>"+ cssScript + "</style></head> <body>" + htmlScript + "</body></html>");
					document.getElementsByTagName("iframe")[0].contentWindow.eval(jsScript);
					/*selects the all iframes (only one on this page - no need for IDs)
					selects child node 0, evaluates var jsScript in the content of the iframe*/
				});

			
		/*========================================*/
	});	
