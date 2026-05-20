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

// Print all even number from 1 to N

    const number = 100;
        let cnt = 1;
            while(cnt<=number){
                if(cnt%2==0) {
                    console.log(cnt,'Odd Number');
                }else{
                    console.log(cnt,'Even Number');
                }
                cnt++;
            }