import $ from "jquery";

'use strict';

$(function() {
    	var URL_GET = 'https://schema.api.voyado.oculos.no/api/Customer/';
    	var URL_POST = 'https://schema.api.voyado.oculos.no/api/Customer/';
    	//var URL_GETM = 'https://schema.api.voyado.oculos.no/api/customer/discover/';

    	var bid = '432CF638-CB81-446B-BE95-73436D750282';
    	var authorize = 'b2N1bG9zOlJYZHUrOX5KXnZxQFVQPFo=';
        var schemaid = '140';
        var CountryCode = 'NO';

    	$.fn.serializeObject = function(){
    	    var o = {};
    	    var a = this.serializeArray();
    	    $.each(a, function() {
    	        if (o[this.name] !== undefined) {
    	            if (!o[this.name].push) {
    	                o[this.name] = [o[this.name]];
    	            }
    	            o[this.name].push(this.value || '');
    	        } else {
    	            o[this.name] = this.value || '';
    	        }
    	    });
    	    return o;
    	};

    	function makeBaseAuth(authorize) {
    	  var hash = authorize;
    	  return 'Basic ' + hash;
    	}

    	/* function checkInputs () {
    		var inputs = $('form#minside').find('input');
    		inputs.each(function(index, el) {
    			var value = $(el).val();
    			if(value){
    				$(el).parent().find('.placeholder').addClass('active');
    			}
    		});
    	} */

		$('form#newsletter').on('submit', function(event) {
		
			event.preventDefault();
    		var data = $(this).serializeObject();
    		var query = getQueryParams(document.location.search);
    		var auth = makeBaseAuth(authorize);
    		var acao = '*';
			var acac = true;

    		var payload = {    
			  'Email': data.epost,
			  'Mobile': data.mob,
			  'AcceptEmail': '1',
			  'AcceptMobile': '1',
			  'AcceptTerms': '1',
			  'Src': 'survey',
			  'SchemaId': schemaid,
			  'CustomerId': query.id,
			  'Guid': null,
			  'KeyVal': null,
			  'ExtendedConsents': {
                //'acceptsDigitalMedia': data.ad ? true : false,
			  	//'AcceptTerms': data.acceptterms ? true : false
			  },
			  'ExtendedJsonFields': {
			  	'CountryCode': 'NO'
			  }
			};
			console.log(payload);
			
			$.ajax({
	            type: 'POST',
	            url: URL_POST,
	            data: JSON.stringify(payload),
	            contentType:'application/json; charset=utf-8',
	            headers: {
	              'BID': bid,
	              'Authorization': auth,
	              'Access-Control-Allow-Origin': acao,
	              'Access-Control-Allow-Credentials': acac
	            },
	            success: function (data){
	              feedback(true);

	            },
	            error: (function(data) {
	              feedback(false);
	              	var errorEmail = "<p>E-postadressen er registrert fra før</p>";
					var errorMobile = "<p>Din mobil er registrert fra før</p>";
		        	if(data.responseText === "Email exist") {
		        		$('.error').html(errorEmail);	 
			        }
			        if(data.responseText === "Mobile exist") {
			        	$('.error').html(errorMobile);	        	
			        }
	              	
	            })
	        });
	    });

		function feedback (ok) {
			if(ok){
				$('.thanks').show();
				$('form').hide();
				$('.error').hide();
			} else {
				$('.error').show();
			}
		}

		getCust();

		function getCust () {
			var query = getQueryParams(document.location.search);
			var custId = query.id;
			if(!custId) return;
			var data = [];
		    var req = new XMLHttpRequest();
		    req.open('GET', URL_GET+custId, true);
		    req.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
			req.setRequestHeader('Authorization', 'Basic '+authorize);
			req.setRequestHeader('bid', bid);
			req.setRequestHeader('schemaid', schemaid);
			req.setRequestHeader('Access-Control-Allow-Origin', '*');
			req.setRequestHeader('Access-Control-Allow-Credentials', true);

		    req.onreadystatechange = function() {
		        if(req.readyState === 4 && req.status === 200) {
		        	var cust = JSON.parse(req.response);
		        	sessionStorage.cust = req.response;
		        	insertCustData(cust);
		            checkInputs();
		            console.log(cust);
		        }
		    };
		    req.send(JSON.stringify(data));
		    
		}

		function getQueryParams(qs) {
		    qs = qs.split('+').join(' ');

		    var params = {}, tokens,
		        re = /[?&]?([^=]+)=([^&]*)/g;

		    while (tokens = re.exec(qs)) {
		        params[decodeURIComponent(tokens[1])]
		            = decodeURIComponent(tokens[2]);
		    }

		    return params;
		}

		function insertCustData (cust) {
			var form = $('form#minside')[0];
			var $form = $(form);
			
			$form.find('input[name=epost]').val(cust.Email);
			$form.find('input[name=mob]').val(cust.Mobile);

			$form.find('input[name=zip]').val(cust.Zipcode);
		
		}

    });