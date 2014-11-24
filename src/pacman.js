
var Grid = (function(window, document) {	
	
	var create = function(el, w, h) {
	
		for(var i=0; i<w; i++) {
		
			var row = createRow(el);
		
			for(var j=0; j<h; j++) {
			
				var cell = createCell();
				
				row.add(cell);
			}
		}
		
		return {
		
			//load : load;
		};
	};
	
	var createRow = function(el) {
	
		var row = document.createElement('tr');
		
		el.appendChild(row);
				
		return {
		
			add : function(cell) {
			
				row.appendChild(cell);
			}
		};
	};
	
	var createCell = function() {
		
		var cell = document.createElement('td');
		
		cell.className = 'cell';
		
		return cell;
	};

	return {

		Create : create
	};
	
}(window, document));