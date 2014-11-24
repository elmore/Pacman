describe("Grid", function() {

	var div;

	beforeEach(function() {
		
		div = document.createElement('div');
		
		div.id = 'container-div';
		
		document.body.appendChild(div);
	});
	
	afterEach(function() {
	
		document.body.removeChild(div);
	});

	it("should be instantiatable", function() {
		
		var grid = new Grid.Create(div, 5, 7);
		
		expect(grid).not.toBeNull();
	});
	
	it("should render a grid of correct size", function() {
		
		var grid = new Grid.Create(div, 5, 7);
		
		var cells = document.getElementsByClassName('cell');
		
		expect(cells.length).toBe(35);
	});
	
	it("should be initialisable to a pattern", function() {
	
		var grid = new Grid.Create(div, 4, 4);
		
		var pattern = '####\
					   ####\
					   ####\
					   ####';
		
		
	});	
});
