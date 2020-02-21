describe("Test suite for Cost Calculation", function(){
	describe("Test suite for function calculateCost(totalUnits, pricePerUnit, state)", function(){
		describe("Test to pass", function(){//Test conditions of calculate cost to fail
			it("should return \"1480.50\" if totalUnits is 1500, pricePerUnit is 1 and state is AB", function(){
				expect(calculateCost(1500,1,"AB")).toBe(1480.50);
			});
			it("should return \" 7555.68\" if totalUnits is 3600, pricePerUnit is 2.25 and state is MI", function(){
				expect(calculateCost(3600,2.25,"MI")).toEqual(7555.68);
			});
		});

		describe("Test to fail", function(){//Test conditions of calculate Cost to fail
			it("should return \"Invalid number of items\" if value of totalUnits, pricePerUnit and state is not provided", function(){
				expect(calculateCost()).toEqual("Invalid number of items");
			});
			it("should return \" Invalid province/state code length\" if totalUnits is 500, pricePerUnit is 1 and state is ONE", function(){
				expect(calculateCost(500,1,"ONE")).toEqual("Invalid province/state code length");
			});
			it("should return \" Invalid province/state code\" if totalUnits is 500, pricePerUnit is 1 and state is 22", function(){
				expect(calculateCost(500,1,22)).toEqual("Invalid province/state code");
			});
			it("should return \" Province/state parameter is required\" if totalUnits is 500, pricePerUnit is 1 and state is empty", function(){
				expect(calculateCost(500,1)).toEqual("Province/state parameter is required");
			});
			it("should return \" Unit price is required\" if totalUnits is 500, pricePerUnit and state is empty", function(){
				expect(calculateCost(500)).toEqual("Unit price is required");
			});
			it("should return \" Invalid unit price\" if totalUnits is 500, pricePerUnit is \"as\" and state is ON", function(){
				expect(calculateCost(500,"as", "ON")).toEqual("Invalid unit price");
			});
			it("should return \" Invalid number of items\" if totalUnits is \"500\", pricePerUnit is 1 and state is ON", function(){
				expect(calculateCost("500",1, "ON")).toEqual("Invalid number of items");
			});
			it("should return \" Invalid number of items\" if totalUnits is \"500\", pricePerUnit is 1 and state is ON", function(){
				expect(calculateCost("500",1, "ON")).toEqual("Invalid number of items");
			});
		});
	});
});