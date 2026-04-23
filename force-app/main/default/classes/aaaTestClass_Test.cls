@isTest
private class aaaTestClass_Test {
  @isTest
  static void hasTestPropertyValue() {
    // TO DO: implement unit test
    aaaTestClass testClass = new aaaTestClass();
    System.assertEquals('testValue', testClass.testProperty);
  }

  // @isTest
  // static void intentionalFailure(){
  //   System.assert(false, 'This is an intentional failure: aaaTestClass');
  // }
}
