// Print Number 1 to N 
// const number = 100;
//     let cnt = 1;
//         while(cnt<=number){
//             console.log(cnt);
//             cnt++;
//         }

// Print Numbers from 1 to N without changing the loop condition of above question 

    // const number= 100;
    //     let cnt=1;
    //         while(cnt<=number){
    //             console.log(number-cnt+1);
    //             cnt++;
    //         }

// "Print all even number from 1 to N"

    // const number = 100;
    //     let cnt = 1;
    //         while(cnt<=number){
    //             if(cnt%2==0) {
    //                 console.log(cnt,'Odd Number');
    //             }else{
    //                 console.log(cnt,'Even Number');
    //             }
    //             cnt++;
    //         }

// Sum of First Natural Number
  // console.time();

  // const number = 10000000n;
  // let cnt=0;
  // let sum =0;
  // while(cnt<=number){
  //   sum+=cnt;
  //   cnt++;
  // }
  
  // console.log(sum);
  // console.timeEnd()

  // Product (Factorial of N)

//  const number = 5;
// let product = 1;
// let cnt=1;
//   while(cnt<=number){
//     product*=cnt;
//     cnt++;
//   }

//   console.log(product);


// sum of all Even Numbers up to N

  const number = 5;
  let sum = 0;
  let cnt = 1;
    while(cnt<=number){
      if(cnt%2!==0) {
        // console.log('No of Even Number Giver Value',cnt);
       sum+=cnt
      }
      cnt++;
    }

    console.log(sum);
