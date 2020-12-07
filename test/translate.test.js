describe('translate', function () {

	// Multiple tests for words starting with different vowels
	
    it("word starting with vowel a", function() {
		expect(translate('apple')).toEqual('appleway')
	});

	it("word starting with vowel e", function() {
		expect(translate('enjoy')).toEqual('enjoyway')
	});

	it("uppercase word converted to lowercase", function() {
		expect(translate('IGLOO')).toEqual('iglooway')
	});

	it("words starting with uppercase vowel converted to lowercase", function() {
		expect(translate('OFfice')).toEqual('officeway')
	});

	it("word starting with vowel u", function() {
		expect(translate('up')).toEqual('upway')
	});

	it("word starting with a consonant", function() {
		expect(translate('box')).toEqual('oxbay')
	});

	it("word starting with a consonant", function() {
		expect(translate('pin')).toEqual('inpay')
	});

	it("word starting with 2 consonants", function() {
		expect(translate('shop')).toEqual('opshay')
	});

	it("word starting with 3 consonants", function() {
		expect(translate('split')).toEqual('itsplay')
	});

	it("word starting with y treat as consonant", function() {
		expect(translate('yellow')).toEqual('ellowyay')
	});

});
