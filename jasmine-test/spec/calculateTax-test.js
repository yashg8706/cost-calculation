describe("Test suite for Tax Calculation", function(){
  describe("Test suite for function calculateTax(totalCost)", function(){
    describe("Test to pass", function(){ //Test conditions of calculate tax to pass
      it("should return 13 for ON state", function(){
        expect(calculateTax(100,"ON")).toBe(13);
      });
      it("should return 5 for AB state", function(){
        expect(calculateTax(100,"AB")).toBe(5);
      });
      it("should return 14.975 for QC state", function(){
        expect(calculateTax(100,"QC")).toBe(14.975);
      });
      it("should return 6 for MI state", function(){
        expect(calculateTax(100,"MI")).toBe(6);
      });
      it("should return 0 for DE state", function(){
        expect(calculateTax(100,"DE")).toBe(0);
      });  
    });
    describe("Test to fail", function(){ //Test conditions of calculate tax to fail
      it("should return should return \"Invalid amount\"", function(){
        expect(calculateTax("MI", "MI")).toEqual("Invalid amount");
      });
      it("should return should return \"Province/state parameter is required\"", function(){
        expect(calculateTax(5000)).toEqual("Province/state parameter is required");
      });
      it("should return should return \"Invalid province/state code length\"", function(){
        expect(calculateTax(5000, "MIA")).toEqual("Invalid province/state code length");
      });
      it("should return should return \"State and amount parameters are missing\"", function(){
        expect(calculateTax()).toEqual("Total cost parameter missing");
      });
    });
  });
});
