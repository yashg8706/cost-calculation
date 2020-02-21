describe("Test suite for Discount Calculation", function(){
  describe("Test suite for function calculateDiscount(totalCost)", function(){
    describe("Test to pass", function(){//Test conditions of calculate discount to pass
      it("should return 0 if totalCost is 500", function(){
        expect(calculateDiscount(500)).toBe(0);
      });
      it("should return 246 if totalCost is 4100", function(){
        expect(calculateDiscount(4100)).toBe(246);
      });
      it("should return 499.50 if totalCost is 5550", function(){
        expect(calculateDiscount(5550)).toBe(499.50);
      });
      it("should return 948 if totalCost is 7900", function(){
        expect(calculateDiscount(7900)).toBe(948);
      });
      it("should return 2100 if totalCost is 14000", function(){
        expect(calculateDiscount(14000)).toBe(2100);
      });
    });
    describe("Test to fail", function(){//Test conditions of calculate discount to fail
      it("should return Total cost is required", function(){
        expect(calculateDiscount()).toEqual("Total cost parameters is required");
      });
      it("should return Invalid amount", function(){
        expect(calculateDiscount("AB")).toEqual("Invalid total cost");
      });
    });
  });
});