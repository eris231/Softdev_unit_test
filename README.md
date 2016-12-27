# Softdev_unit_test

- function : ``precedence(a, b)`` in tests/precedence/precedence.js  
``if a <= b precendence(a, b) = true``  
	- ``a = "+", b = "+"``  
	precedence(a, b) : true  
	- ``a = "%", b = "-"``  
	precedence(a, b) : false  
	- ``a = "x", b = "%"``  
	precedence(a, b) : true  
	
- function : ``display(value)`` in tests/display/display.js  	
	with checking 4 bases ``hex, dec, oct, bin``
	- test in normal length( <=18 ) using value ``123(10)``  
		the diplay part should show  
		- ``7B`` in base 16  
		- ``123`` in base 10  
		- ``173`` in base 8  
		- ``1111011`` in base 2  
		- all the display part should remain the same font size as before  
	- test in exceed length( >18 ) using value ``1234567(10)``  
		- ``12D687`` in base 16  
		- ``1234567`` in base 10  
		- ``4553207`` in base 8  
		- ``100101101011010000111`` in base 2  
		- all the display part except ``bin`` should remain the same font size as before  
		- ``bin`` part should be 50% of current size  
		
- event : ``$('.convert-normal').click()`` in tests/convert-normal/convert-normal.test.js  
	will test 4 bases' button whether it has the property ``disabled``  
	- ``$("button#hex.convert-normal").prop('disabled')``  
	- ``$("button#dec.convert-normal").prop('disabled')``  
	- ``$("button#oct.convert-normal").prop('disabled')``  
	- ``$("button#bin.convert-normal").prop('disabled')``
	- and other 16 numbers' button
	
- event : ``$('.btn-normal').click()`` in tests/btn-normal/btn-normal.test.js  
	- test when ``latestOp==true``  
	- test under ``latestOp==false``  
		- ``current==0``  
		- ``current<0``  
		- ``current>0``  
		- ``current exceed when currSys==hex``  
		- ``current exceed when currSys==dec and current>0``  
		- ``current exceed when currSys==dec and current<0``  
- event : ``$('.btn-mark').click()`` in tests/btn-mark/btn-mark.test.js  
	- test basic arithmetic ``+-x%``
		- ``7x2-`` answer should be ``14``  
	- test ``=``  
		- ``5-6/2=`` answer should be ``2``  
	- test ``←``  
		- ``117←`` answer should be ``11``  
	- test ``CE``  
		- ``11+7CE=`` answer should be ``11``  
	- test ``C``  
		- ``11+7C=`` answer should be ``0``  
	- test ``neg``
		- ``neg(5)`` answer should be ``-5``  
	- test ``Mod``  
		- ``5Mod3=`` answer should be ``2``  
- test
