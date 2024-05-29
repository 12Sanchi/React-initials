export const sum = (a, b) => {
  return a + b;
};

/* Lets create a basic test case,a dummy testcase,lets not  write react t.c lets write small js t.c
 This above f(n) returns sum of 2 no.It will take sum of 2 no.and will return sum of 2 no.lets write testcases for this but where 
 let me tell u try to run this cmd npm run test,if u runthis it will give u a hint,it tries to say No tests found,
 it uses jest,jest tries to find out,it finds file but id doesnot find the files but what it searched it searched for these files (yellow one)
 the files which r present in a folder __test__
 If u will create __test__ anywhwere in your folder structure & any js or ts file under this, will be considered as your testfile.

 _ _ = dunder (these 2 underscore) 7 we also call this as dunder testcase
*
*2 u.s at front & 2 u.s at back = dunder, ( sir thinks bcoz nobody accidentally creates folder with this name,so they have kind of reserved reserved thesse characters  )
*
**In this folder lets create our first testfile,i am testing my sum method,lets create filename as sum.test.js
installed vs code icon--

Now lets start testing our sum f(n),how will u start testing your sum f(n),1st how do i write my testcase,we write a f(n) known as test 
this test f(n) basically takes 2 args---------1st is string ,2nd is a c.back f(n),so this is how we write testcase,now we will test for something 

$$ This 1st args gives the descrip.of the test like what r we testing,2nd args is a c.b in which we actually write the implementation of the test or over here we actually write code to test 
      In 2nd line 1st i will call the sum() now inside this if i give it 2 args suppose 3,4 & store it in some const result 
      now i want to test whether my test is 7 or not  how to write code for it i would write expect(result).tobe(7);


      import sum..

      test("Sum function should calculate sum of two numbers",() => {
              
        const result = sum(3,4)

        expect(result).tobe(7);
      });*/
