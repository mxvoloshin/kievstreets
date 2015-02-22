describe("Directive Tests", function () {

    var scope;
    var compile;
    var directive;
    beforeEach(angular.mock.module("app"));

    beforeEach(angular.mock.inject(function ($rootScope, $compile, $httpBackend, $sniffer) {
        scope = $rootScope.$new();
        compile = $compile;
        $httpBackend.whenGET('/AbpAppView/Load?viewUrl=/app/Main/views/directives/profile/inn.cshtml').respond("");
        directive = angular.element('<form name="innform">' +
             '<div>' +
            '<label>' +
            'ІПН:' +
            '</label>' +
             '<input type="text" id="INN" name="inn" ng-model="data" />' +
            '</div>' +
            '</form>');
       
        compile(directive)(scope);
        scope.$digest();
    }));

    it('label should contain ІПН', function () {
        expect(directive.text()).toContain("ІПН:");
    });

    it('inner text should contain 12345', function () {
        scope.data = '12345';
        scope.$digest();
        expect(scope.innform.inn.$viewValue).toContain("12345");
    });
});
